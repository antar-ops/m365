function FindProxyForURL(url, host) {
  const PROXY = "HTTPS gateway.antarpreetbajwa.xyz:443";
  const domainsToProxy = [
    "antarpreetbajwaxyz.pipedrive.com",
    "login.microsoftonline.com",
    "office.com",
    "office365.com"
  ];

  for (let i = 0; i < domainsToProxy.length; i++) {
    if (dnsDomainIs(host, domainsToProxy[i]) || dnsDomainIs(host, "." + domainsToProxy[i])) {
      return PROXY;
    }
  }

  return "DIRECT";
}
