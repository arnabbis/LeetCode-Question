let word = 'unicornarihan'
let count = 0;

    // Helper function to check if a string contains all five vowels
    function hasAllVowels(s) {
        let vowels = new Set();
        for (let i = 0; i < s.length; i++) {
            if ("aeiou".includes(s[i])) {
                vowels.add(s[i]);
            }
        }
        return vowels.size === 5;
    }

    // Iterate through all possible substrings
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
            let substring = word.substring(i, j);
            // Check if the substring contains only vowels and has all five vowels
            if (hasAllVowels(substring) && /^[aeiou]+$/.test(substring)) {
                count++;
            }
        }
    }

    console.log(count)
