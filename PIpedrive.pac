function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "antarpreetbajwaxyz.pipedrive.com")) {
    return "HTTPS m365-secure-gateway.corp.google.com:443";
  }
  return "DIRECT";
}
