function $(a){return document.getElementById(a)}
function alertopen(a,b){$("title").innerHTML=a;$("body").innerHTML=b;$("alert").hidden=false}
function alertclose(){$("alert").hidden=true};
function isPrime(c){c=BigInt(c);if(c<=1){return false}if(2==c){return true}if(0==c%2n){return false}var b=c-1n;for(var a=3n;a<=b;a+=2n){if(0==c%a){return false}}return true}
function primeFactorization(e){e=BigInt(e);var b=[];var d=0n;for(var c=2n;c<e;c++){if(0==e%c){b[d++]=c}}return b}
function gcd(a,b){if(b==0){return a}return this.gcd(b,a%b)}
function lcm(a,b){var g=(n,m)=>m?g(m,n%m):n;return a*b/g(a,b)}
function rnd(a,b){return Math.floor(Math.random()*(b+1-a)+a)}
function bigrnd(l){var r=""+rnd(1,9);for(i=1n;i<l;i++){r+=rnd(0,9)}return BigInt(r)}
function modpow(d,f,c){var a=1n;while(f>0){if((f&1n)==1){a=(a*d)%c}f>>=1n;d=(d*d)%c}return a}
var RSA = {
  pF : function(N){var i=2n;while(i<N){if((N%i)==0){return[i,(N/i)]}i++}return false},
  MakePrime : function(l){var e=true;while(e){var p=bigrnd(l);e=!isPrime(p)}return p},
  pqisPrime : function(p,q){return!(isPrime(p)&&isPrime(q))},
  MakeAll : function(l){var p=this.p(l),q=this.q(l),N=this.N(p,q),L=this.L(p,q),E=this.E(L),D=this.D(L,E),Public=this.Public(D,N),Private=this.Private(E, N);return{p,q,N,L,E,D,Public,Private}},
  p : function(l){return this.MakePrime(l)},
  q : function(l){return this.MakePrime(l)},
  N : function(p,q){return p*q},
  L : function(p,q){return lcm(p-1n, q-1n)},
  E : function(L){var E=L-1n;for(var i=0n;i<2;i++){while(gcd(E,L)!=1){if(E>L){return 0}E--}E--}return E+1n},
  D : function(L,E){var D=2n;while((E*D%L)!=1){if(D>L){return 0}D++}return D},
  Public : function(D,N){return "u"+this.KeyToString(D,N)},
  Private : function(E,N){return "r"+this.KeyToString(E,N)},

  KeyToString : function(a,b){return a+"_"+b},

  StringToKey : function(a){return [BigInt(a.slice(1,a.length).split("_")[0]),BigInt(a.slice(1,a.length).split("_")[1])]},

  encrypt : function(plain, PublicKey){return modpow(BigInt(plain),this.StringToKey(PublicKey)[0],this.StringToKey(PublicKey)[1])},

  decrypt : function(cipher, PrivateKey){return modpow(BigInt(cipher),BigInt(this.StringToKey(PrivateKey)[0]),BigInt(this.StringToKey(PrivateKey)[1]))}
}

function RSAkeymake(){
  alertopen("お待ちください","<h3>鍵を作成中です。</h3>");
  var {Public,Private} = RSA.MakeAll($("select").value);
  alertclose();
  alertopen("鍵を作成しました！",`<h3>公開鍵(これを公開する):${Public}<br>秘密鍵(自分で持っておく):${Private}</h3><p>注意:鍵を無くすと暗号を戻せなくなります。絶対に無くさないでください。</p>`);
}

function enc(){
  var text = $("textinput").value;
  var key = $("keyinput").value;
  if(key.slice(0,1) != "u"){
    alertopen("エラー","この鍵ではありません。もう一つの鍵を使ってください。");
    return 0;
  }
  alertopen("完了！",`<h3>結果:<br>${RSA.encrypt(text, key)}</h3><br><br>`);
}

function dec(){
  var text = $("textinput").value;
  var key = $("keyinput").value;
  if(key.slice(0,1) != "r"){
    alertopen("エラー","この鍵ではありません。もう一つの鍵を使ってください。");
    return 0;
  }
  alertopen("完了！",`<h3>結果:<br>${RSA.decrypt(text, key)}</h3><br><br>`);
}
