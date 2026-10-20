// Sends www.gitelarandonnee.fr to https apex, keeping path and query
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.hostname = "gitelarandonnee.fr";
    return Response.redirect(url.toString(), 301);
  },
};
