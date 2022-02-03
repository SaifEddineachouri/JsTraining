let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// MetaCharacters Symbols
re = /^h/i;       // Must start with
re = /world$/i;  // Must Ends with
re = /^Hello world$/i; // Begin with  and end with
re = /H.llo world/i; // Matches any one Character
re = /H*llo world/i; // Matches any Charater 0 or more time
re = /gre?a?y/i ; // Optional Character
re = /gre?a?y\?/i ; // Escape Character 


// Brackets [] - Character Sets

re = /gr[ae]y/i; // Must be in  a or e  
re = /[GF]ray/i; // Must begin  with G or F  
re = /[^GF]ray/i; // Match anything Except G or F  
//^ inside the Brackets its not 
re = /^[GF]ray/i; // Must Begin with G or F  
//^ Outside the Brackets its Yes
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/ ; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i     // Must Occur exactly {m} amount of times
re = /Hel{2,4}o/i     // Must Occur exactly {m} amount of times
re = /Hel{2,}o/i     // Must Occur at least {m} times

// Paretheses () - Grouping 
re = /^([0-9]x){3}$/


// ShortHand Character Classes
re = /\w/ ; // word character - alphanumeric or _
re = /\w+/ ; // + = one or more
re = /\W/ ; // Non-Word Character
re = /\d/ ; // Match any digit
re = /\d+/ ; // Match more than one digit
re = /\D/ ; // Match any Non-Digit
re = /\s/ ; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i ; // word boundary

// Assertions
re = /x(?=y)/ ; // Match x only if followed by y
re = /x(?!y)/ ; // Doesnt Match any x followed by y 


// String to match
const str = 'xyz';

// Log Results
const  result = re.exec(str);
console.log(result);

function reTest(re,str) {
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re,str);