const string = "Привет! Как дела?";

function getVowels(string) {
    let arrString = string.split('');
    let vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let stringVowels = [];

    for (let i = 0; i < arrString.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (arrString[i] == vowels[j]) {
                stringVowels.push(string[i]);
            }
        }        
    }
  return stringVowels;
}

console.log(getVowels(string));