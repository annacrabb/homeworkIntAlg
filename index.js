// Palindrome Check

function palindrome(str) {
    str = str.toLowerCase();

for(var i = 0; i < str.length; i++){
    str = str.replace(' ', '');
    str = str.replace(',','');
    str = str.replace('.', '');
    str = str.replace('/', '');
    str = str.replace('_', '');
    str = str.replace('-', '');
    str = str.replace('(', '');
    str = str.replace(')', '');
}

    var copy = str.split('').reverse().join('')

    if(copy == str){
        return true;
    } else {
        return false;
    }

    return str;
}

palindrome("taco cat");

// Drop It

function drop(arr, func){
while(!func(arr[0])){
    arr.shift();
}
return arr;
}

drop([1, 2, 3], function(n) {return n < 3;});

// Steamroller

var oneArray = [];
function steamrollArray(arr) {
    for (var i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            oneArray.push(arr[i]);
        } else {
            steamrollArray(arr[i]);
        }
    }
    return oneArray;
}

steamrollArray([1, [2], [3, [[4]]]]);