let word = "racecar";

rev_word = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
    rev_word = rev_word + word[i]
}
if (rev_word === word) {
    console.log(rev_word);
    console.log("It is a Palindrome");
} else {
    console.log(rev_word);
    console.log("It is not a Palindrome");
}

//  It is a Palindrome



let b = "venu";

reverse_word = "";

for (let i = b.length - 1; i >= 0; i -= 1) {
    reverse_word = reverse_word + b[i];
}
if (b === reverse_word) {
    console.log(reverse_word);
    console.log("It is a plaindrome");
} else {
    console.log(reverse_word);
    console.log("It is not a palindrome");
}

// output ----> It is not a palindrome


let c = "madam";

reverseWord = "";

for (let i = c.length - 1; i >= 0; i -= 1) {
    reverseWord = reverseWord + c[i];
}
if (c === reverseWord) {
    console.log(reverseWord);
    console.log("It is a plaindrome");
} else {
    console.log(reverseWord);
    console.log("It is not a palindrome");
}


// output-----> It is a palindrome