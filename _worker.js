export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.hostname = "aniri-minimal.pages.dev";
    
    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  },
};
