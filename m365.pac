function FindProxyForURL(url, host) {
  // Define the secure proxy server address for your Cloud Run service.
  // We use "HTTPS" because the service is on a secure URL and listens on port 443.
  var proxy_server = "HTTPS m365-pac-760924100245.us-central1.run.app:443";

  // An array of Microsoft 365 domains and subdomains to be routed through the secure gateway.
  // Using ".domain.com" format matches the domain and any subdomains.
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
  // The shExpMatch function performs a shell-like expression match, ideal for hostnames.
  for (var i = 0; i < m365_domains.length; i++) {
    // Note: The "*" is needed here because some domains in the list do not start with a dot.
    if (shExpMatch(host, "*" + m365_domains[i])) {
      // If the requested host matches an M365 domain, return the proxy server address.
      return proxy_server;
    }
  }

  // For all other traffic that does not match the M365 domains,
  // return "DIRECT" to bypass the proxy and connect directly to the internet.
  return "DIRECT";
}
