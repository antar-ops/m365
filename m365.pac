function FindProxyForURL(url, host) {
  // Replace with your real gateway external IP or DNS name
  var proxy_server = "PROXY 34.14.198.164:443";

  // List of Microsoft 365 domains to route through the secure gateway
  var domainsToProxy = [
    "login.microsoftonline.com",
    "graph.windows.net",
    "office.com",
    "office365.com",
    "sharepoint.com",
    "outlook.com",
    "teams.microsoft.com",
    "lync.com",
    "onenote.com"
  ];

  // Match domain itself and all subdomains
  for (var i = 0; i < domainsToProxy.length; i++) {
    if (host == domainsToProxy[i] || dnsDomainIs(host, "." + domainsToProxy[i])) {
      return proxy_server;
    }
  }

  // Everything else goes directly
  return "DIRECT";
}
