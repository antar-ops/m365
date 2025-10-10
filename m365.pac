function FindProxyForURL(url, host) {
  // Define Secure Gateway proxy servers
  var proxy_server = "PROXY 34.14.205.133:8080; PROXY 34.93.31.114:8080; PROXY 34.131.18.75:8080; PROXY 34.131.152.152:8080";

  // --- 1️⃣ Exclude critical Google services ---
  if (dnsDomainIs(host, "google.com") ||
      dnsDomainIs(host, ".google.com") ||
      dnsDomainIs(host, "gstatic.com") ||
      dnsDomainIs(host, ".gstatic.com") ||
      dnsDomainIs(host, "googleusercontent.com") ||
      dnsDomainIs(host, ".googleusercontent.com") ||
      dnsDomainIs(host, "gmail.com") ||
      dnsDomainIs(host, ".gmail.com") ||
      dnsDomainIs(host, "googleapis.com") ||
      dnsDomainIs(host, ".googleapis.com") ||
      dnsDomainIs(host, "admin.google.com") ||
      dnsDomainIs(host, "accounts.google.com") ||
      dnsDomainIs(host, "drive.google.com")) {
    return "DIRECT";
  }

  // --- 2️⃣ Microsoft 365 domains through Secure Gateway ---
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

  // --- 3️⃣ All other traffic goes direct ---
  return "DIRECT";
}
