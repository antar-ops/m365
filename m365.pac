function FindProxyForURL(url, host) {
  // Define the Google Secure Gateway IPs and port (8080 is the default proxy listener).
  var proxy_server = "PROXY 34.14.205.133:8080; " +
                     "PROXY 34.93.31.114:8080; " +
                     "PROXY 34.131.18.75:8080; " +
                     "PROXY 34.131.152.152:8080";

  // List of Microsoft 365 domains that must go through the Secure Gateway.
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

  // Loop through each Microsoft 365 domain and check if the requested host matches.
  for (var i = 0; i < m365_domains.length; i++) {
    if (shExpMatch(host, "*" + m365_domains[i])) {
      return proxy_server;
    }
  }

  // For all other traffic, connect directly to the Internet.
  return "DIRECT";
}
