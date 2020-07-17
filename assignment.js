// feetToMile

function feetToMile (feet){
    var mile = feet/5280;
    return mile;
}

var result=feetToMile(10560);
console.log(result);


// feetToMile


// woodCalculator
function woodcalculator(chair, table, khaat){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var khaatCount = khaat * 5;
    var totalWood = chairCount + tableCount + khaatCount;
    return totalWood;
}
var calculator = woodcalculator(14, 5, 12);
console.log(calculator)


// woodCalculator


// brickCalculator

var tola = 20;
if (tola <= 10) {
        var brick = tola * 1500;
        console.log(brick);
    } 
    else if (tola <= 20){
        var brick1 = tola * 1200;
        console.log(brick1);
    }
    else{
        var brick2 = tola * 1000;
        console.log(brick2);
    }



// brickCalculator


// tinyFriends

function tinyFriends(name){
    var tiny=name[0]
    for(var i=0;i<name.length; i++ ){
        var tinyName= name[i];

        if(tinyName.length<tiny.length){
            tiny=tinyName;
        }
    }
    return tiny;
}

var lowestName=tinyFriends(["Niloy","mahi", "AkashAlam", "kamrul"]);

console.log(lowestName);


// tinyFriends

