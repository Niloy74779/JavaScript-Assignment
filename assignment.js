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

function brickCalculator(numberOfFloor){
    if(numberOfFloor < 11 && numberOfFloor > 0){
        var firstTenFloor = numberOfFloor * 15 * 1000;
        var outPut = "Bricks You Need";
        var outPut2 = outPut +" "+ firstTenFloor
        return outPut2;
        
    }
    else if(numberOfFloor > 10 && numberOfFloor < 21){
    var secondTenFloors1 = (numberOfFloor - 10) * 12 * 1000;
    var firstTenFloors2 = 150000 ; // 10 * 15 * 1000
    var totalBricks1 = secondTenFloors1 + firstTenFloors2 ;
    var outPut = "You Need";
    var outPut2 = outPut +" "+ totalBricks1
    return outPut2;
    }
    else if(numberOfFloor > 20 ){
    var highestFloors = (numberOfFloor - 20) * 10 * 1000;
    var secondTenFloors2 = 120000 ;// 10 * 12 * 1000
    var firstTenFloors3 = 150000 ; // 10 * 15 * 1000
    totalBricks2 = highestFloors + secondTenFloors2 + firstTenFloors3;
    var outPut = "Bricks You need";
    var outPut2 =  outPut +" "+totalBricks2;
    return outPut2 ;
    }
    else{
        return "Put a valid number of floor "
    }
    }
    var result = brickCalculator(10);
     console.log(result)



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

