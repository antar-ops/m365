function FindProxyForURL(url, host) {
  var proxy_server = "HTTPS securegateway-m365-secure-gateway-a2ee0198c4995c770p-tp.p.beyondcorp.net:443";
  
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
  
  for (var i = 0; i < m365_domains.length; i++) {
    if (shExpMatch(host, "*" + m365_domains[i])) {
      return proxy_server;
    }
  }
  
  return "DIRECT";
}
