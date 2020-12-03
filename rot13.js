function rot13(str) {
  const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  str = str.split('');
  const regSpecialChar = RegExp('/[\W_]/g');

  let newStr = str.map(str => {
      if(alph.indexOf(str) != alph.indexOf(regSpecialChar)) {
        if(alph.indexOf(str) - 13 >= 0) {
          return alph[alph.indexOf(str) - 13]
        } else {
          return alph[alph.indexOf(str) + 13]
        }
      } else {
        return str;
      }
    }).join('');
  return newStr;
}

console.log(rot13("SERR CVMMN!"));
