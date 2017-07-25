
var str = [];
var word;

function Occurrence(str) {

    var max = 0;
    for(var i = 0; i < str.length; i++){
        if(count(str[i]) > max){
            max = count(str[i])
            word = str[i]
        }
    }
    if(max == 1){
        document.write("-1");
    }
    else{
        document.write("The word with the most occurence of any letter is " +"<h2>" + word );
    }
}

function count(word){
    var letters = {};
    var highest = 0;

    for(var j = 0; j < word.length; j++){
        if(!(word[j] in letters)){
            letters[word[j]] = 0;
        }
        letters[word[j]]++;
        if(letters[word[j]] > highest){
            highest = letters[word[j]];
        }
    }

    return highest;
}


Occurrence(['xx','yyy','zz','kkkkkkkkkkkishankk']);













/*
var arr = ["ksgssshssss","abcdd","xxxxxxxxxxxxxxxxxx","yyyyyyyyyyyyyyyyyyyyy"];

var ascii_arr = [];
var max_value;
var string_max_value = 0;
var final_str = "";
var index;
var final_index;

for(var i=0;i<arr.length;i++){

    max_value = 0;

    for(var x=0;x<255;x++){
        ascii_arr[x] = 0;
    }

    for(var j=0;j<arr[i].length;j++){

        ascii_arr[arr[i].charCodeAt(j)]++;
    }

    for(var z=0;z<ascii_arr.length;z++){
        if(ascii_arr[z] > max_value){
            max_value = ascii_arr[z];
            index = z;
        }
    }

    if(max_value >= string_max_value){
        string_max_value = max_value;
        final_index = index;
        final_str = arr[i];
    }


}

document.write("The character " + String.fromCharCode(final_index) + " occured longest in \""+ final_str + "\" " + string_max_value +" times.");
*/
