function FindProxyForURL(url, host) {
  // Define the proxy server addresses using the gateway IPs and port 8080.
  // The browser will try them in order.
  var proxy_server = "PROXY 34.14.205.133:8080; " +
                     "PROXY 34.93.31.114:8080; " +
                     "PROXY 34.131.18.75:8080; " +
                     "PROXY 34.131.152.152:8080";

  // An array of Microsoft 365 domains to be routed through the secure gateway.
  var m365_domains = [
    "login.microsoftonline.com",
    "graph.windows.net",
    ".office.com",
    ".office365.com",
    ".sharepoint.com",
    ".outlook.com",
    ".teams.microsoft.com",
    ".lync.com",
    ".onenote.com"
  ];

  // Loop through the list of M365 domains.
  for (var i = 0; i < m365_domains.length; i++) {
    if (shExpMatch(host, "*" + m365_domains[i])) {
      return proxy_server;
    }
  }

  // For all other traffic, connect directly.
  return "DIRECT";
}
