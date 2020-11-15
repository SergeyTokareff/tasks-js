const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = [];

function filterArray (mixedArray, isEven) {
  const even = [];
  for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i] % 2 == 0) {
      even.push(mixedArray[i]);
    }
  }
  return even;            
}

console.log(filterArray(mixedArray, isEven));