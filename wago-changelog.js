(function(){
'use strict';
const DATA_URL='wago-changelog.json';
let data=null;
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
function bind(root){
 const cards=[];if(root.matches?.('.ui-card'))cards.push(root);root.querySelectorAll?.('.ui-card').forEach(c=>cards.push(c));
 for(const card of cards){
  const badge=card.querySelector('.ui-card-header .version')||card.querySelector('.version');if(!badge||badge.dataset.wagoHistoryBound)continue;
  const path=canonicalTxtPath(card);if(!path)continue;
  const group=gameGroup(card,path);const key=identity(group,path);const record=data?.items?.[key];
  const history=record?.history||[];if(!history.length)continue;
  badge.dataset.wagoHistoryBound='1';
  const name=card.querySelector('h4')?.textContent.trim()||record.name||path.split('/').pop();
  const button=document.createElement('button');button.type='button';button.className='wago-history-trigger';button.setAttribute('aria-label',name+' version history');button.title='View changelog';
  button.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.4" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.4v4.9l3.1 1.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  button.style.cssText='margin-left:7px;border:1px solid #00eaf577;background:#08232b;color:#00eaf5;border-radius:50%;width:25px;height:25px;padding:0;display:inline-flex;align-items:center;justify-content:center;flex:0 0 25px;cursor:pointer;box-shadow:0 0 0 1px #00eaf510 inset;transition:background .16s ease,border-color .16s ease,box-shadow .16s ease,transform .16s ease';
  button.addEventListener('mouseenter',()=>{button.style.background='#103640';button.style.borderColor='#00eaf5';button.style.boxShadow='0 0 10px #00eaf533';button.style.transform='translateY(-1px)'});
  button.addEventListener('mouseleave',()=>{button.style.background='#08232b';button.style.borderColor='#00eaf577';button.style.boxShadow='0 0 0 1px #00eaf510 inset';button.style.transform='none'});
  button.addEventListener('focus',()=>{button.style.outline='2px solid #00eaf5';button.style.outlineOffset='2px'});
  button.addEventListener('blur',()=>{button.style.outline='none'});
  const tip=document.createElement('div');tip.className='wago-history-tip';tip.style.cssText='display:none;position:absolute;z-index:9999;right:0;top:calc(100% + 8px);width:min(300px,80vw);padding:13px;background:#101b29;border:1px solid #00eaf577;border-radius:10px;color:#edf7ff;box-shadow:0 12px 35px #000b;font:13px/1.5 Arial';
  tip.innerHTML='<b style="color:#00eaf5">'+escapeHtml(name)+' · '+escapeHtml(group)+' Changelog</b>'+history.slice(0,3).map(h=>'<div style="border-top:1px solid #294052;margin-top:8px;padding-top:7px"><b>'+escapeHtml(h.version)+'</b> · '+escapeHtml(h.date||'')+'<br>'+((h.notes||[]).map(n=>'• '+escapeHtml(n)).join('<br>'))+'</div>').join('');
  const wrap=document.createElement('span');wrap.style.cssText='position:relative;display:inline-flex;align-items:center';wrap.append(button,tip);badge.parentNode.insertBefore(wrap,badge.nextSibling);
  button.addEventListener('click',e=>{e.stopPropagation();tip.style.display=tip.style.display==='block'?'none':'block'});
  document.addEventListener('click',()=>tip.style.display='none');
 }
}
async function load(){try{data=await fetch(DATA_URL,{cache:'no-store'}).then(r=>r.json())}catch(e){return}bind(document)}
new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1&&data)bind(n)}))).observe(document.documentElement,{childList:true,subtree:true});
load();
})();