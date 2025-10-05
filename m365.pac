function FindProxyForURL(url, host) {
  // Secure Gateway proxy (use HTTPS, not PROXY)
  var proxy_server = "HTTPS 34.14.198.164:443";

  // Microsoft 365 key domains
  if (dnsDomainIs(host, "login.microsoftonline.com")) return proxy_server;
  if (dnsDomainIs(host, "graph.windows.net")) return proxy_server;
  if (shExpMatch(host, "*.office.com")) return proxy_server;
  if (shExpMatch(host, "*.office365.com")) return proxy_server;
  if (shExpMatch(host, "*.sharepoint.com")) return proxy_server;
  if (shExpMatch(host, "*.outlook.com")) return proxy_server;
  if (shExpMatch(host, "*.teams.microsoft.com")) return proxy_server;
  if (shExpMatch(host, "*.lync.com")) return proxy_server;
  if (shExpMatch(host, "*.onenote.com")) return proxy_server;

  // Everything else bypasses proxy
  return "DIRECT";
}
