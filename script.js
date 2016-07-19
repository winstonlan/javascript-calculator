$(document).ready(function() {
    var calcInput = "";
    // first row of button assign selectors that trigger events
    $("#ac-button").click(function() {
        calcInput = "";
        $("#calc-screen").text(calcInput);

    });
    $("#ce-button").click(function() {
        calcInput = calcInput.slice(0, calcInput.length - 1);
        console.log(calcInput)
        $("#calc-screen").text(calcInput)
    });
    $("#mod-button").click(function() {
        calcInput += "%"
        $("#calc-screen").text(calcInput)

    });
    $("#div-button").click(function() {
        calcInput += "/"
        $("#calc-screen").text(calcInput)
    });

    // second row of buttons assign selectors that trigger events
    $("#seven-button").click(function() {
        calcInput += "7";
        $("#calc-screen").text(calcInput);
    });
    $("#eight-button").click(function() {
        calcInput += "8";
        $("#calc-screen").text(calcInput);
    });
    $("#nine-button").click(function() {
        calcInput += "9";
        $("#calc-screen").text(calcInput);
    });
    $("#mult-button").click(function() {
        calcInput += "*";
        $("#calc-screen").text(calcInput);
    });

    // third row of buttons assign selectors that trigger events
    $("#four-button").click(function() {
        calcInput += "4";
        $("#calc-screen").text(calcInput);
    });
    $("#five-button").click(function() {
        calcInput += "5";
        $("#calc-screen").text(calcInput);
    });
    $("#six-button").click(function() {
        calcInput += "6";
        $("#calc-screen").text(calcInput);
    });
    $("#sub-button").click(function() {
        calcInput += "-";
        $("#calc-screen").text(calcInput);;
    });

    // fourth row of buttons assign selectors tha trigger events
    $("#one-button").click(function() {
        calcInput += "1";
        $("#calc-screen").text(calcInput);
    });
    $("#two-button").click(function() {
        calcInput += "2";
        $("#calc-screen").text(calcInput);
    });
    $("#three-button").click(function() {
        calcInput += "3";
        $("#calc-screen").text(calcInput);
    });
    $("#add-button").click(function() {
        calcInput += "+";
        $("#calc-screen").text(calcInput);
    });

    // fifth row of buttons assign selectors that trigger events
    $("#dec-button").click(function() {
        calcInput += '.'
        $("#calc-screen").text(calcInput);
    });
    $("#zero-button").click(function() {
        calcInput += "0";
        $("#calc-screen").text(calcInput);
    });
    $("#ans-button").click(function() {
    });
    $("#eq-button").click(function() {
        console.log(calcInput)
        $("#calc-screen").text(eval(calcInput));
        calcInput = eval(calcInput).toString();
    });


});
