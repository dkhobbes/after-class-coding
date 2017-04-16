
function isPalindrome(string) {
  if(string.length <= 1) return true; //1
  if(string.charAt(0) != string.charAt(string.length - 1)) return false; //2
  return isPalindrome( string.substr(1, string.length -2) ); //3
 }

 console.log(isPalindrome('anna')); // true
