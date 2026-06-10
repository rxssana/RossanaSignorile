// Cloudflare Worker — GitHub OAuth per Decap CMS
// Deploy su: https://dash.cloudflare.com → Workers & Pages → Create Worker
//
// Variabili d'ambiente da impostare in Settings → Variables:
//   GITHUB_CLIENT_ID     = Ov23liGNqxYzxM3HwHot
//   GITHUB_CLIENT_SECRET = (il tuo client secret)

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Step 1: redirect a GitHub per il login
    if (url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: 'repo',
      });
      return Response.redirect(
        `https://github.com/login/oauth/authorize?${params}`,
        302
      );
    }

    // Step 2: GitHub rimanda qui con il codice, lo scambiamo con il token
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return sendMessage('error', 'Missing code');

      const res = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const data = await res.json();
      if (data.error) return sendMessage('error', data.error_description || data.error);

      return sendMessage('success', { token: data.access_token, provider: 'github' });
    }

    return new Response('Not Found', { status: 404 });
  },
};

function sendMessage(status, content) {
  const payload = status === 'success' ? JSON.stringify(content) : content;
  const message = `authorization:github:${status}:${payload}`;
  const html = `<!DOCTYPE html><html><body>
<script>window.opener.postMessage(${JSON.stringify(message)},'*');window.close();</script>
<p>Autenticazione completata, puoi chiudere questa finestra.</p>
</body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
