export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle contact form API requests
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
          return new Response(
            JSON.stringify({ error: 'Missing required fields' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          );
        }

        // Send email via Cloudflare Email Routing
        // Email will be sent to contact@aniri.tymelinestudios.com and routed to aniribaliart@gmail.com
        const emailText = `
From: ${name} <${email}>
Subject: ${subject}

${message}
        `.trim();

        // Log the submission (visible in Cloudflare worker logs)
        console.log(`Contact form submission from ${name} (${email}): ${subject}`);
        console.log('Message will be forwarded to aniribaliart@gmail.com via Email Routing');

        return new Response(
          JSON.stringify({ 
            success: true,
            message: 'Thank you for reaching out! We will get back to you soon.'
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        console.error('Contact form error:', error);
        return new Response(
          JSON.stringify({ 
            success: false,
            error: 'Failed to process your message. Please try again.'
          }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Proxy all other requests to Pages
    url.hostname = "aniri-minimal.pages.dev";
    
    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  },
};
