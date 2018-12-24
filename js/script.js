/* global $ */

$(document).ready(function() {
    // Point Variables
    var outboxerPoints = 0;
    var swarmerPoints = 0;
    var sluggerPoints = 0;
    var boxerPuncherPoints = 0;
    var highestOfTwo = 0;
    var highestOfAll = 0;
    var highestOfThree = 0;
    // Slide Id Variables
    var introSlide = "s1";
    var activeSlideId = introSlide;
    var name;
    var outBoxerSlideId = 11;
    var swarmerSlideId = 12;
    var sluggerSlideId = 13;
    var boxerPuncherSlideId =14;
    $(".outBoxer").click(function() {
        outboxerPoints = pointSystem(outboxerPoints);
        console.log("slugger:" + sluggerPoints);
        nextSlideFunction();
    });
    $(".swarmer").click(function() {
        swarmerPoints = pointSystem(swarmerPoints);
        console.log("swarmer:" + swarmerPoints);
        nextSlideFunction();
    });
    $(".slugger").click(function() {
        sluggerPoints = pointSystem(sluggerPoints);
        console.log("slugger:" + sluggerPoints);
        nextSlideFunction();
    });
    $(".boxerPuncher").click(function() {
        boxerPuncherPoints = pointSystem(boxerPuncherPoints);
        console.log("boxerPuncher:"+outboxerPoints);
        nextSlideFunction();
    });
    $(".nextQuestion button").click(function(){
        var slideNum = parseInt(activeSlideId.substring(1,2));
        $("#"+activeSlideId).removeClass("active");
        slideNum++;
        activeSlideId="s"+slideNum;
        $("#"+activeSlideId).addClass("active");
        name = $("#name").val();
        $(".inputName").text(name);
    });
    function nextSlideFunction (){
        var slideNum = parseInt(activeSlideId.substring(1,2));
        $("#"+activeSlideId).removeClass("active");
        if (slideNum===9){
            gameLogic();
            slideNum=gameLogic();
        }
        else{
            slideNum++;    
        }
        activeSlideId="s"+slideNum;
        $("#"+activeSlideId).addClass("active");
    }
    function pointSystem (typeOfPoints){
        return typeOfPoints + 1;
    }
    function maxOfTwoNum (numOne,numTwo){
        if(numOne>numTwo){
            return numOne;
        }
        else{
            return numTwo;
        }
    }
    function gameLogic(){
        highestOfTwo = maxOfTwoNum(outboxerPoints,swarmerPoints);
        highestOfThree = maxOfTwoNum(highestOfTwo,sluggerPoints);
        highestOfAll = maxOfTwoNum(highestOfTwo,boxerPuncherPoints);
        
        if(highestOfAll === outboxerPoints){
            console.log(highestOfTwo);
            console.log("style: out boxer");    
            return outBoxerSlideId;
        }
        else if(highestOfAll === swarmerPoints){
            console.log(highestOfTwo);
            console.log("style: swarmer");
            return swarmerSlideId;
        }
        else if (highestOfAll === sluggerPoints){
            console.log(highestOfTwo);
            console.log("style: slugger");
            return sluggerSlideId;
        }
        else{
            return boxerPuncherSlideId;
        }
    }
    
    
    
});
