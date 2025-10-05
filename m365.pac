function FindProxyForURL(url, host) {
  // Use your actual BeyondCorp Secure Gateway DNS name
  var proxy_server = "HTTPS securegateway-m365-secure-gateway-v57fc849597f522a4p-tp.p.beyondcorp.net:443";

  // Microsoft 365 domains
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

  // Loop through and match exact or subdomains
  for (var i = 0; i < domainsToProxy.length; i++) {
    if (host == domainsToProxy[i] ||
        dnsDomainIs(host, "." + domainsToProxy[i]) ||
        shExpMatch(host, "*." + domainsToProxy[i])) {
      return proxy_server;
    }
  }

  // Default: direct internet
  return "DIRECT";
}
