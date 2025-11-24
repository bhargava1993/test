let word = "Venukumar";
let vowels = "aeiouAEIOU";

let count = 0;

for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        count = count + 1;
    }
}
console.log(count);
