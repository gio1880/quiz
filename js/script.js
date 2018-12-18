/* global $ */

$(document).ready(function() {
    
    var totalScore = 0;
    var numberofclicks = 0;
    
    $(".rightImg").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
    });
    $(".outBoxer").click(function() {
        totalScore = + outBoxer();
        numberofclicks = +1;
        console.log(totalScore);
    });
    $(".swarmer").click(function() {
        totalScore = + swarmer();
        console.log(totalScore);
    });
    $(".slugger").click(function() {
        totalScore = + slugger();
        console.log(totalScore);
    });
    $(".boxerPuncher").click(function() {
        totalScore = + boxerPuncher();
        console.log(totalScore);
    });
    $(".boxerPuncher").click(function() {
        totalScore = + boxerPuncher();
        console.log(totalScore);
    });
    $("button").click(function() {
        if(totalScore<14){
            
        }
    });
    function outBoxer() {
        return 1;    
    }
    function swarmer() {
        return 2;
    }
    function slugger() {
        return 3;
    }
    function boxerPuncher(){
        return 4;        
    }
});
