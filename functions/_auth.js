export async function onRequest(context) {
  const auth = context.request.headers.get("Authorization");

  const USER = "Outlaws";
  const PASS = "Outlaws2026!";

  const expected =
    "Basic " + btoa(`${USER}:${PASS}`);

  if (auth !== expected) {
    return new Response("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Protected"',
      },
    });
  }

  return context.next();
}
