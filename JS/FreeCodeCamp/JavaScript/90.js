// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here

    return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");
// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp)) return myObj[checkProp]; // If true return the prop

    return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");

