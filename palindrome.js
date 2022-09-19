const getLongestPalindrome = (text) => {
    if (text.length > 1000) {
        return 'The text parameter is limit of 1000 length';
    }

    let currentLongestPalindrome = '';

    for (let i = 0; i < text.length; i++) {
        let checkPalindromeArr = [];

        for (let index = i; index < text.length; index++) {
            const element = text[index];
            checkPalindromeArr.unshift(element);
            checkPalindromeLength = checkPalindromeArr.length;

            if (checkPalindromeLength > 1 && checkPalindromeLength > currentLongestPalindrome.length) {
                const checkPalindromeStr = checkPalindromeArr.join('');
                if (text.indexOf(checkPalindromeStr) !== -1) {
                    currentLongestPalindrome = checkPalindromeStr;
                }
            }
        }
    }

    if (currentLongestPalindrome.length < 2) {
        return `No Palindrome in '${text}'`;
    }

    return `The longest palindrome for '${text}' is '${currentLongestPalindrome}'`;
}

console.log(getLongestPalindrome('babad'));
console.log(getLongestPalindrome('cbbd'));
console.log(getLongestPalindrome('chonlatitlnoh'));

