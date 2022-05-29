function ClearField() {

   document.getElementById("txt_input_output").value = "";

}

// function to display typed input text on button click event

function ShowInput(value) {

   document.getElementById("txt_input_output").value += value;

}

// function to do math calculation on = button 

function calculate() {

    var inputString = document.getElementById("txt_input_output").value;

    // Checks if the input string contains Sin and calculate Sin value if it does contains

    if (inputString.includes("Sin")) {

        var number = inputString.substr(4, inputString.length);

       document.getElementById("txt_input_output").value = Math.sin(number);

   }

   // Checks if the input string contains Cos and calculate Cos value if it does contains

    else if (inputString.includes("Cos"))

   {

        var number = inputString.substr(4, inputString.length);

       document.getElementById("txt_input_output").value = Math.cos(number);

   }

    // Checks if the input string contains Tan and calculate Tan value if it does contains

    else if (inputString.includes("Tan")) {

        var number = inputString.substr(4, inputString.length);

       document.getElementById("txt_input_output").value = Math.tan(number);

   }

    // Every other math calculations

    else {

        var output = eval(inputString);

       document.getElementById("txt_input_output").value = output;

   }

}