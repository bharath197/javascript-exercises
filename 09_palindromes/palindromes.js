const palindromes = function (s) {
    for(let a = 0, b = s.length-1; a<s.length,b>=0; a++, b--){
       while(s[a].toLowerCase()==s[a].toUpperCase()) a++
       while(s[b].toLowerCase()==s[b].toUpperCase()) b--
       if(s[a].toLowerCase()!=s[b].toLowerCase()) return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
