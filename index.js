function countVowelsAndConsonants() {
    const inputString = document.getElementById('inputString').value.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    const result = document.getElementById('result');
    result.innerHTML = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}

function checkPalindrome() {
    const input = document.getElementById('numberInput').value;
    const reversedInput = input.split('').reverse().join('');

    const resultDiv = document.getElementById('Palindromeresult');
    if (input === reversedInput) {
        resultDiv.innerHTML = `${input} is a palindrome.`;
    } else {
        resultDiv.innerHTML = `${input} is not a palindrome.`;
    }

}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (!subtotal || !tipPercentage) {
        document.getElementById('totalAmount').innerHTML = "Please enter valid subtotal and tip percentage.";
        return;
    }

    const tipAmount = subtotal * (tipPercentage / 100);
    const totalAmount = subtotal + tipAmount;

    document.getElementById('totalAmount').innerHTML = `Total to be paid (including tip): $${totalAmount.toFixed(2)}`;
    //document.getElementById('totalAmount').innerHTML = `Tip: $${tipAmount} | Total Amount: $${totalAmount.toFixed(2)}`;
}
