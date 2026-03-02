// Ek string variable jisme multiple words hai
let str = "madam Wow racecar2 roshan dinesh"


// Ye function check karta hai ki given word palindrome hai ya nahi
function checkPalindrom (str){

    // String ko lowercase me convert kar rahe hai
    // Taaki "Wow" aur "wow" same treat ho
    str = str.toLowerCase()

    // Reverse string store karne ke liye empty variable
    let reverseStr = "";

    // Loop last character se start hoga
    // i = str.length - 1  (last index)
    // Jab tak i >= 0 hai tab tak chalega
    for(let i = str.length - 1; i >= 0; i--){

        // Har character ko reverseStr me add kar rahe hai
        reverseStr += str[i];
    }

    // Agar reversed string original string ke equal hai
    if(reverseStr === str){

        // To original string return kar do
        return str
    }
}


// Ye main function hai jo poori sentence check karega
function isPalindrom(str){

    // Sentence ko space ke basis par split kar diya
    // Ab ye array ban gaya:
    // ["madam", "Wow", "racecar2", "roshan", "dinesh"]
    str = str.split(' ');

    console.log(str)   // Array print karega

    // Palindrome words store karne ke liye empty array
    let palindromArr = []

    // Array ke har word par loop chalayenge
    for(let i = 0; i < str.length; i++){

        // Word me agar number ho (jaise racecar2)
        // To replace karke number hata rahe hai
        // /\d+/g ka matlab:
        // \d = digit
        // + = one or more
        // g = global (pure word me search karo)
        let cleanStr = str[i].replace(/\d+/g, ""); 

        // Clean word ko checkPalindrom function me bhej rahe hai
        if(checkPalindrom(cleanStr)){

            // Agar palindrome hai to array me push kar do
            // Yaha dubara function call ho raha hai
            palindromArr.push(checkPalindrom(cleanStr))
        }
    }

    // Final palindrome words ka array return kar do
    return palindromArr
}


// Function call
console.log(isPalindrom(str))