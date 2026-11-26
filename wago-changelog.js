(function(){
'use strict';
const DATA_URL='wago-changelog.json';
let data=null;
let activeTip=null;
let activeButton=null;
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function canonicalTxtPath(card){
 const link=card.querySelector('.btn-copy[data-file]')?.getAttribute('data-file')||card.querySelector('a.btn-download[href]')?.getAttribute('href');
 if(!link||!(/\.txt(?:$|[?#])/i.test(link)))return '';
 let path='';
 try{path=decodeURIComponent(new URL(link,document.baseURI).pathname)}catch(e){path=String(link).split(/[?#]/)[0]}
 path=path.replace(/\\/g,'/');
 const lower=path.toLowerCase();const marker=lower.lastIndexOf('/files/');
 if(marker>=0)path=path.slice(marker+1);else path=path.replace(/^\/+/, '');
 path=path.replace(/\/+/g,'/');
 return /^files\//i.test(path)?path.toLowerCase():'';
}
function gameGroup(card,path){
 const parts=String(path||'').toLowerCase().split('/');
 if(parts.includes('forever'))return 'Forever';if(parts.includes('tbc'))return 'TBC';if(parts.includes('classic'))return 'Classic';
 let node=card,text='';for(;node&&node.nodeType===1;node=node.parentElement)text+=' '+(node.id||'')+' '+(typeof node.className==='string'?node.className:'')+' '+(node.getAttribute?.('data-game')||'');
 text=text.toLowerCase();if(/forever/.test(text))return 'Forever';if(/(^|[^a-z])tbc([^a-z]|$)/.test(text))return 'TBC';if(/classic/.test(text))return 'Classic';return 'Other';
}
function identity(group,path){return 'v2|'+String(group||'Other').toLowerCase()+'|'+String(path||'').replace(/\\/g,'/').replace(/^\/+|\/+$/g,'').toLowerCase()}
const historyScrollbarStyle=document.createElement('style');
historyScrollbarStyle.textContent='.wago-history-tip::-webkit-scrollbar{width:8px}.wago-history-tip::-webkit-scrollbar-track{background:#0b1520;border-radius:8px}.wago-history-tip::-webkit-scrollbar-thumb{background:#087f89;border:2px solid #0b1520;border-radius:8px}.wago-history-tip::-webkit-scrollbar-thumb:hover{background:#00cbd8}';
document.head.appendChild(historyScrollbarStyle);
function closeActiveTip(){
 if(!activeTip)return;
 activeTip.style.display='none';activeTip.setAttribute('aria-hidden','true');
 if(activeButton)activeButton.setAttribute('aria-expanded','false');
 activeTip=null;activeButton=null;
}
function positionActiveTip(){
 if(!activeTip||!activeButton||!activeButton.isConnected)return;
 const margin=12;
 const viewportWidth=document.documentElement.clientWidth||window.innerWidth;
 const viewportHeight=window.innerHeight;
 const maxHeight=Math.max(120,Math.min(420,Math.floor(viewportHeight*.65)));
 activeTip.style.maxHeight=maxHeight+'px';
 activeTip.style.width=Math.max(180,Math.min(320,viewportWidth-margin*2))+'px';
 activeTip.style.display='block';
 activeTip.style.visibility='hidden';
 const anchor=activeButton.getBoundingClientRect();
 const popup=activeTip.getBoundingClientRect();
 const left=Math.max(margin,Math.min(anchor.right-popup.width,viewportWidth-popup.width-margin));
 let top=anchor.bottom+8;
 if(top+popup.height>viewportHeight-margin&&anchor.top-popup.height-8>=margin)top=anchor.top-popup.height-8;
 else top=Math.max(margin,Math.min(top,viewportHeight-popup.height-margin));
 activeTip.style.left=Math.round(left)+'px';
 activeTip.style.top=Math.round(top)+'px';
 activeTip.style.visibility='visible';
}
function openTip(button,tip){
 if(activeTip===tip){closeActiveTip();return;}
 closeActiveTip();activeTip=tip;activeButton=button;
 button.setAttribute('aria-expanded','true');tip.setAttribute('aria-hidden','false');
 positionActiveTip();
}
document.addEventListener('click',function(event){
 if(!activeTip)return;
 if(activeTip.contains(event.target)||activeButton?.contains(event.target))return;
 closeActiveTip();
});
document.addEventListener('keydown',function(event){if(event.key==='Escape')closeActiveTip()});
window.addEventListener('resize',positionActiveTip,{passive:true});
document.addEventListener('scroll',function(event){if(activeTip&&event.target!==activeTip&&!activeTip.contains(event.target))positionActiveTip()},{capture:true,passive:true});
function bind(root){
 const cards=[];if(root.matches?.('.ui-card'))cards.push(root);root.querySelectorAll?.('.ui-card').forEach(c=>cards.push(c));
 for(const card of cards){
  const badge=card.querySelector('.ui-card-header .version')||card.querySelector('.version');if(!badge||badge.dataset.wagoHistoryBound)continue;
  const path=canonicalTxtPath(card);if(!path)continue;
  const group=gameGroup(card,path);const key=identity(group,path);const record=data?.items?.[key];
  const history=record?.history||[];if(!history.length)continue;
  badge.dataset.wagoHistoryBound='1';
  const name=card.querySelector('h4')?.textContent.trim()||record.name||path.split('/').pop();
  const button=document.createElement('button');button.type='button';button.className='wago-history-trigger';button.setAttribute('aria-label',name+' version history');button.setAttribute('aria-haspopup','true');button.setAttribute('aria-expanded','false');button.title='View changelog';
  button.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.4" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.4v4.9l3.1 1.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  button.style.cssText='margin-left:7px;border:1px solid #00eaf577;background:#08232b;color:#00eaf5;border-radius:50%;width:25px;height:25px;padding:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 25px;cursor:pointer;box-shadow:0 0 0 1px #00eaf510 inset;transition:background .16s ease,border-color .16s ease,box-shadow .16s ease,transform .16s ease';
  button.addEventListener('mouseenter',()=>{button.style.background='#103640';button.style.borderColor='#00eaf5';button.style.boxShadow='0 0 10px #00eaf533';button.style.transform='translateY(-1px)'});
  button.addEventListener('mouseleave',()=>{button.style.background='#08232b';button.style.borderColor='#00eaf577';button.style.boxShadow='0 0 0 1px #00eaf510 inset';button.style.transform='none'});
  button.addEventListener('focus',()=>{button.style.outline='2px solid #00eaf5';button.style.outlineOffset='2px'});
  button.addEventListener('blur',()=>{button.style.outline='none'});
  const tip=document.createElement('div');tip.className='wago-history-tip';tip.setAttribute('role','dialog');tip.setAttribute('aria-hidden','true');
  tip.style.cssText='display:none;position:fixed;z-index:2147483647;box-sizing:border-box;width:min(320px,calc(100vw - 24px));max-height:min(65vh,420px);overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;scrollbar-width:thin;scrollbar-color:#00aeba #0b1520;padding:13px;background:#101b29;border:1px solid #00eaf577;border-radius:10px;color:#edf7ff;box-shadow:0 12px 35px #000b;font:13px/1.5 Arial;';
  tip.innerHTML='<b style="display:block;position:sticky;top:-13px;margin:-13px -13px 8px;padding:13px;background:#101b29;color:#00eaf5;border-bottom:1px solid #294052;border-radius:10px 10px 0 0">'+escapeHtml(name)+' · '+escapeHtml(group)+' Changelog</b>'+history.map(h=>'<div style="border-top:1px solid #294052;margin-top:8px;padding-top:7px"><b>'+escapeHtml(h.version)+'</b> · '+escapeHtml(h.date||'')+'<br>'+((h.notes||[]).map(n=>'• '+escapeHtml(n)).join('<br>'))+'</div>').join('');
  tip.addEventListener('click',event=>event.stopPropagation());
  document.body.appendChild(tip);
  button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();openTip(button,tip)});
  badge.parentNode.insertBefore(button,badge.nextSibling);
 }
}
async function load(){try{data=await fetch(DATA_URL,{cache:'no-store'}).then(r=>r.json())}catch(e){return}bind(document)}
new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1&&data)bind(n)}))).observe(document.documentElement,{childList:true,subtree:true});
load();
})();