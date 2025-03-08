class Solution {
    reverseString(s) {
        let reverse = [];
        for(let i=s.length-1; i>=0; i++) {
            reverse = s.charAt(i);
        }
        return reverse;
    }
  
  }

  const ob = new Solution();
  const ans = ob.reverseString("Hello");
  console.log(ans);


//   return s.split('').reverse().join('');