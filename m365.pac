function FindProxyForURL(url, host) {
  // IMPORTANT: Remember to replace this placeholder with your actual gateway IP and port.
  // Example: "PROXY 34.14.198.164:443"
  var proxy_server = "PROXY <your-gateway-proxy-address>";

  // A simplified list of root domains to proxy.
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

  // Loop through the list of domains.
  for (var i = 0; i < domainsToProxy.length; i++) {
    // This check robustly matches the domain itself (e.g., "office.com")
    // AND any subdomain (e.g., "word.office.com").
    if (host == domainsToProxy[i] || dnsDomainIs(host, "." + domainsToProxy[i])) {
      return proxy_server;
    }
  }

  // For all other traffic, connect directly to the internet.
  return "DIRECT";
}