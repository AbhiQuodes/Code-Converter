// const BigNumber = require('bignumber.js');
// import BigNumber from "bignumber.js";
// done binaryand octal to decimal Bignumber
// done hexadecimal to decimal BigNumber
//remaining dec to binOct and dec 2 hex BigNumber.

// const { default: BigNumber } = require("bignumber.js");
//copy from chatgpy
let stepBox = document.getElementById("stepBox");
let resultDetailBox = document.querySelector(".step-box");

document.addEventListener("DOMContentLoaded", function() {
  const detailedAnswerBtn = document.getElementById("detailedAnswerBtn");
  const selectInput = document.getElementById("Inoperation");
  const resultDetailBox = document.getElementById("resultBox");

  // Initially hide the step-box
  stepBox.style.display = 'none';

  // When the dropdown selection changes
  selectInput.addEventListener("change", function() {
      // Show the Detailed Answer button and the step-box after selection
      detailedAnswerBtn.style.display = 'block';
  });

  // Handle the click event for Detailed Answer button
  detailedAnswerBtn.addEventListener("click", function() {
      // Toggle the visibility of step-box
      if (stepBox.style.display === 'none') {
          stepBox.style.display = 'flex';
          // Add some content to step-box
          if(  stepBox.innerHTML == '')
          {
          stepBox.innerHTML = 'Detailed explanation goes here.';
          }
      } else {
          stepBox.style.display = 'none';
      }
  });

  // Optional: hide the Detailed Answer button when resultDetailBox is empty
  resultDetailBox.addEventListener("input", function() {
      if (resultDetailBox.innerHTML === '') {
          detailedAnswerBtn.style.display = 'none';
      }
  });
});


let input_code = 0.0001;
let big10 = new BigNumber("10");

let input_string = input_code.toString();
let i = 0,
  int_part,
  fracPart = 0;
let i_initial = 0;
let resultCode = "";
let s_decimal = "";
let fpartA = [],
  j,
  k,
  f;
  let step =0;

let letter = "";
let carry;
let base;
let difference;
let small_code = "",
  largeCode = "";
let mode = "dark";

let inTake = document.querySelector("#intake");
let cbton = document.querySelector("#cBotton");
let inOperation = document.querySelector("#Inoperation");
let resultDisplay = document.querySelector("#resultBox");
let switchmode = document.querySelector("#toggle");
let togglePos = document.querySelector("#TDesign");
let ApearSidebar = document.querySelector("#apear");
let s_barDiv = document.querySelector("#s_bar");
let contmode = document.querySelector("#container");
let headtext = document.querySelector("Header");
let s_Icon = document.querySelector(".material-symbols-outlined");

cbton.addEventListener("pointerdown", (e) => {
  input_code = inTake.value;
  // alert('yes');

  if (input_code == "") {
    resultDisplay.innerHTML = "No Input";
  } else {
    switch (inOperation.value) {
      case "Binary To Decimal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>2</sub> = ` +
          "(" +
          binToDecM(input_code) +
          ")<sub>10</sub>";

        break;
      }

      case "Binary to Octal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>2</sub> = ` +
          "(" +
          binTooctM(input_code) +
          ")<sub>8</sub>";
        break;
      }

      case "Binary To Gray": {
        input_code = new BigNumber(input_code);
        input_code = input_code.integerValue(BigNumber.ROUND_FLOOR).toString();
        resultDisplay.innerHTML =
          `(${input_code})<sub>Binary</sub> = ` +
          "(" +
          binTograyM(input_code) +
          ")<sub>Gray</sub>";

        break;
      }

      case "Binary To Hexadecimal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>2</sub> = ` +
          "(" +
          binTohexM(input_code) +
          ")<sub>16</sub>";

        break;
      }

      case "Decimal To Binary": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>10</sub> = ` +
          "(" +
          dec2binM(input_code) +
          ")<sub>2</sub>";
        break;
      }

      case "Decimal To Hexadecimal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>10</sub> = ` +
          "(" +
          decTohexM(input_code) +
          ")<sub>16</sub>";
        break;
      }

      case "Decimal To Octal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>10</sub> = ` +
          "(" +
          dec2octM(input_code) +
          ")<sub>8</sub>";
        break;
      }

      case "Gray To Binary": {
        input_code = new BigNumber(input_code);
        input_code = input_code.integerValue(BigNumber.ROUND_FLOOR).toString();
        resultDisplay.innerHTML =
          `(${input_code})<sub> Gray  </sub> = ` +
          "(" +
          grayTobinM(input_code) +
          ")<sub> Binary</sub>";

        break;
      }

      case "Octal To Binary": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>8</sub> = ` +
          "(" +
          octTobinM(input_code) +
          ")<sub>2</sub>";
        break;
      }

      case "Octal To Decimal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>8</sub> = ` +
          "(" +
          octTodecM(input_code) +
          ")<sub>2</sub>";
        break;
      }

      case "Octal To Hexadecimal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>8</sub> = ` +
          "(" +
          octTohexM(input_code) +
          ")<sub>16</sub>";
        break;
      }

      case "Hexadecimal To Binary": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>16</sub> = ` +
          "(" +
          hexTobinM(input_code) +
          ")<sub>2</sub>";
        break;
      }

      case "Hexadecimal To Decimal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>16</sub> = ` +
          "(" +
          hexTodecM(input_code) +
          ")<sub>10</sub>";
        break;
      }

      case "Hexadecimal To Octal": {
        resultDisplay.innerHTML =
          `(${input_code})<sub>16</sub> = ` +
          "(" +
          hexTooctM(input_code) +
          ")<sub>8</sub>";
        break;
      }

      case "1's Complement": {
        resultDisplay.innerHTML =
          `One's Complement of (${input_code}) = ` +
          "(" +
          comp1s(input_code) +
          ")";
        break;
      }

      case "2's Complement": {
        resultDisplay.innerHTML =
          `Two's Complement of (${input_code}) = ` +
          "(" +
          comp2s(input_code) +
          ")";
        break;
      }
    }
  }
});

switchmode.addEventListener("pointerdown", () => {
  if (mode == "dark") {
    togglePos.classList.remove("toggleAop");
    togglePos.classList.add("toggleOp");
    contmode.classList.add("contLight");
    headtext.style.color = " rgb(110 74 99)";
    contmode.classList.remove("contdark");
    inTake.style.borderColor = "purple";
    inTake.style.color = "#5b295b";

    s_Icon.style.color = "rgb(110 74 99)";

    mode = "light";
  } else {
    togglePos.classList.add("toggleAop");
    togglePos.classList.remove("toggleOp");
    contmode.classList.remove("contLight");
    contmode.classList.add("contdark");
    headtext.style.color = "rgb(195, 199, 248)";
    inTake.style.borderColor = "blanchedalmond";
    s_Icon.style.color = "rgb(195, 199, 248)";
    inTake.style.color = "blanchedalmond";
    mode = "dark";
  }
});

ApearSidebar.addEventListener("pointerdown", () => {
  if (s_barDiv.style.left == "0px") {
    s_barDiv.style.left = "-300px";
  } else {
    s_barDiv.style.left = "0px";
  }
});

if (resultCode == "error") {
  inTake.style.borderColor = "red";
}

function errorCall() {
  return (resultCode = "error");
}
// function  to extract the fractional part

function extractF(input_code) {
  fracPart = new BigNumber("0");
  input_code = new BigNumber(input_code);

  if (input_code.isLessThan(1)) {
    fracPart = input_code;
    return fracPart;
  }
  if (input_code.decimalPlaces() > 0) {
    for (i = 1; 1; i++) {
      input_code = input_code.multipliedBy(new BigNumber("10"));

      if (input_code.decimalPlaces() == 0) {
        for (j = 1; j <= i; j++) {
          fracPart = fracPart.plus(
            input_code
              .modulo(big10)
              .multipliedBy(new BigNumber("10").pow(j - 1))
          );

          input_code = new BigNumber(
            input_code.dividedBy(big10).toFixed(0, BigNumber.ROUND_DOWN)
          );
        }

        fracPart = fracPart.dividedBy(new BigNumber("10").pow(i));
        break;
      }
    }
  }

  return fracPart;
}

function numAlpha(int_part) {
  letter = "";
  if (int_part.modulo(16).isEqualTo(10)) {
    letter += "A";
  } else if (int_part.modulo(16).isEqualTo(11)) {
    letter += "B";
  } else if (int_part.modulo(16).isEqualTo(12)) {
    letter += "C";
  } else if (int_part.modulo(16).isEqualTo(13)) {
    letter += "D";
  } else if (int_part.modulo(16).isEqualTo(14)) {
    letter += "E";
  } else if (int_part.modulo(16).isEqualTo(15)) {
    letter += "F";
  }

  return letter;
}

function binORoct2Dec(base, input_code) {
  // Binary to Decimal when Base=2
  //Octal to Decimal when Base =8
step=0;
stepBox.innerHTML = '';
  resultCode = new BigNumber("0");
  //error check validation step;
  if (isNaN(input_code) || input_code < 0) {
    errorCall();

    return resultCode;
  }

  for (i = 0; i <= input_code.length; i++) {
    if (input_code[i] == ".") {
      i_initial = input_code.length - i - 1;
    }
  }

  input_code = new BigNumber(Math.pow(10, i_initial)).multipliedBy(
    new BigNumber(input_code)
  );

  for (i = -i_initial; input_code >= 1; i++) {
    //error check validation step
    if (base == 2) {
      if (
        input_code.modulo(big10).isGreaterThan(new BigNumber("1")) ||
        input_code.modulo(big10).isLessThan(new BigNumber("0"))
      ) {
        errorCall();
        return resultCode;
      }
    } else if (base == 8) {
      if (
        input_code.modulo(big10).isGreaterThan(new BigNumber("7")) ||
        input_code.modulo(big10).isLessThan(new BigNumber("0"))
      ) {
        errorCall();

        return resultCode.toString();
      }
    }

    //changes made here 25 NOvember 2024
    let previousResultCode = resultCode;

    resultCode = resultCode.plus(
      new BigNumber(new BigNumber(base).pow(i)).multipliedBy(
        input_code.modulo(big10)
      )
    );
    //changes made here 25 NOvember 2024
    if (resultDetailBox.innerHTML != null) {
      resultDetailBox.innerHTML = 
        resultDetailBox.innerHTML +
        `<div> 
              <span style="color: black;"> step : 
        ${++step} ->   
        </span>
        ${
          previousResultCode == 0
            ? ""
            : '<span style="color: black;">' +
              previousResultCode +
              "</span>" +
              "  +  "
        }  ${input_code.modulo(big10)} x ${base}<sup>${i}</sup>   =  ` +
        '<span style="color: black;">' +
        resultCode +
        "</span></div>";
    }

    input_code = input_code
      .dividedBy(big10)
      .integerValue(BigNumber.ROUND_FLOOR);
  }

  if (resultDetailBox.innerHTML != null) {
    resultDetailBox.innerHTML =
      resultDetailBox.innerHTML +
      `<div> <span style="color: black;"> Answer :</span> ` +
      '<span style="color: green;">' +
      resultCode+
      "</span></div>";
  }
  return resultCode.toString();

  // Done Done Binary to decimal;
}

function dec2BinORoct(base, input_code) {
  resultCode = "";
  s_decimal = "";
  stepBox.innerHTML = '';
  step=0;
  // error check validation step
  if (isNaN(input_code) == true) {
    //NaN stands not a number;
    errorCall();
    return resultCode;
  }
  //extracting the integer part from floating value;

  int_part = Math.trunc(input_code);

  //Extracting the fractional part from input_code;

  fracPart = extractF(input_code);
  fracPart = fracPart.toString();

  //  successfully extracted the fractional part;

  // fractional Decimal to binary

  for (k = 1; fracPart != 0 && k <= 20; k++) {
    fpartA[k] = fracPart;
    let previousFracPart=fracPart
    fracPart = base * fracPart;
    
    s_decimal += Math.trunc(fracPart).toString();
    if (resultDetailBox.innerHTML != null) {
      resultDetailBox.innerHTML =
        resultDetailBox.innerHTML +
        `<div> 
                <span style="color: black;"> step : 
        ${++step} ->   
        </span>
       <span style="color: black;">
       ${ s_decimal ==0 ? "":s_decimal + '  +  ' } 
        </span>
        ${previousFracPart} x ${base}  =   ` +
        '<span style="color: black;">' +
        fracPart +
        "</span></div>";
    }


    input_code = fracPart;

    //repeated block of code of Extracting the fractional part;

    fracPart = extractF(input_code);

    for (j = 1; j <= k; j++) {
      if (fracPart == fpartA[j]) {
        break;
      }
    }
    if (resultDetailBox.innerHTML != null) {
      resultDetailBox.innerHTML =
        resultDetailBox.innerHTML +
        `<div style="color: black;"> 
     
       
      Fractional Part  =  ` +
        '<span style="color: brown;">' +
        fracPart +
        "</span></div>";
    }
  }
  resultCode = s_decimal;
  s_decimal = "";

  // int_part = 0;

  //proceessing the int_part;
  if (int_part != 0) {
    for (i = 1; int_part >= 1; i++) {
      s_decimal += Math.trunc(int_part % base).toString();
        //changes made 25 november
      if (resultDetailBox.innerHTML != null) {
        resultDetailBox.innerHTML =
          resultDetailBox.innerHTML +
          `<div> 
             <span style="color: black;"> step : 
        ${++step} ->   
        </span>
          ${int_part} % ${base}  =   ` +
          '<span style="color: black;">' +
          Math.trunc(int_part % base)+
          "</span></div>";
      }

      if (resultDetailBox.innerHTML != null) {
        resultDetailBox.innerHTML =
          resultDetailBox.innerHTML +
          `<div>
              <span style="color: black;"> step : 
        ${++step} ->   
        </span>
             ${int_part} / ${base}  =   ` +
          '<span style="color: black;">' +
          int_part/base +
          "</span></div>";
      }
      int_part /= base;

    }
    //reversing the string by converting the string to array using split('') and reversing the array using
    // reverse() and re converting the array to string;
    s_decimal = s_decimal.split("").reverse().join("");

  } else {
    s_decimal = "0";
  }

  // concating both conversion float Decimal to binary and int decimal to binary;
  fracPart == 0 ? (carry = "") : (carry = ".");
  resultCode = s_decimal + carry + resultCode;
  if (resultDetailBox.innerHTML != null) {
    resultDetailBox.innerHTML =
      resultDetailBox.innerHTML +
      `<div> <span style="color: black;"> Answer :</span> ` +
      '<span style="color: green;">' +
      resultCode +
      "</span></div>";
  }

  fpartA = [];

  return resultCode;
}



function dec2hex(input_code) {
  // resultCode = new BigNumber('0');
  // converting the code to adaptation with BigNumber;
  resultCode = "";
  if (isNaN(input_code) == true || input_code < 0) {
    //NaN stands not a number;
    errorCall();
    return resultCode;
  }

  input_code = new BigNumber(input_code);

  int_part = new BigNumber(input_code.toFixed(0, BigNumber.ROUND_DOWN));

  fracPart = extractF(input_code);

  //making fracPart to BigNumber.
  fracPart.isEqualTo(new BigNumber("0")) ? (carry = "") : (carry = "."); // fracPart == 0 ? (carry = "") : (carry = ".");
  //no change here.

  if (input_code.isLessThan(new BigNumber("1"))) {
    // i can face doubt
    resultCode += "0";

    // no change in resultCode variable.
  }
  for (i = 1; int_part.isGreaterThanOrEqualTo(new BigNumber("1")); i++) {
    if (
      int_part
        .modulo(new BigNumber("16"))
        .isLessThanOrEqualTo(new BigNumber("9"))
    ) {
      // resultCode += (Math.trunc(int_part) % 16).toString();
      resultCode =
        resultCode +
        int_part
          .modulo(new BigNumber("16"))
          .toFixed(0, BigNumber.ROUND_DOWN)
          .toString();
      // using here in place of math.trunc BigNumber property.
    } else {
      // resultCode += numAlpha(Math.trunc(int_part));
      resultCode =
        resultCode +
        numAlpha(new BigNumber(int_part.toFixed(0, BigNumber.ROUND_DOWN)));

      //make change in numalpha function
    }

    // int_part = Math.trunc(int_part) / 16;
    //error here rounding off is going on
    int_part = new BigNumber(
      int_part.dividedBy(new BigNumber("16")).toFixed(0, BigNumber.ROUND_DOWN)
    );

    // use divideby function in above operation.
  }
  resultCode = resultCode.split("").reverse().join("");

  // fractional part Decimal to hexaDecimal;
  for (k = 1; !fracPart.isEqualTo(new BigNumber("0")) && k <= 20; k++) {
    fpartA[k] = fracPart;
    // doubt can we make array of BigNumber.. Solved yes we can

    // fracPart *= 16;
    fracPart = fracPart.multipliedBy(new BigNumber("16"));

    if (
      fracPart.modulo(new BigNumber("16")).toFixed(0, BigNumber.ROUND_DOWN) <= 9
    ) {
      //.isLessThanOrEqualTo(new BigNumber('9'))) {
      carry += fracPart.toFixed(0, BigNumber.ROUND_DOWN).toString();
    } else {
      carry += numAlpha(
        new BigNumber(fracPart.toFixed(0, BigNumber.ROUND_DOWN))
      );
    }
    input_code = fracPart;

    // now extracting the fractional part from the fracpart;

    fracPart = extractF(input_code);

    for (j = 1; j <= k; j++) {
      if (fracPart == fpartA[j]) {
        break;
      }
    }
  }
  resultCode += carry;
  fpartA = [];

  return resultCode;
}

function hex2dec(input_code) {
  //ek zatke me karne wallah code

  // resultCode = 0;

  resultCode = new BigNumber("0");
  let code_length = input_code.length;
  let position, power;

  //checking the number of digits after decimal point

  for (i = 0; i <= code_length - 1; i++) {
    if (input_code[i] == ".") {
      i_initial = -(code_length - i - 1);

      break;
    } else {
      i_initial = code_length;
      power = code_length - i;
    }
  }

  for (i = i_initial, position = code_length - 1; position >= 0; position--) {
    i_initial < 0 ? (power = i) : (power = code_length - i);

    if (input_code[position] == ".") {
      i_initial < 0 ? i-- : i++;
    } else {
      //make its a function

      if (input_code[position] == "A" || input_code[position] == "a") {
        resultCode = resultCode.plus(
          new BigNumber("10").multipliedBy(new BigNumber("16").pow(power))
        );
      } else if (input_code[position] == "B" || input_code[position] == "b") {
        resultCode = resultCode.plus(
          new BigNumber("11").multipliedBy(new BigNumber("16").pow(power))
        );
      } else if (input_code[position] == "C" || input_code[position] == "c") {
        resultCode = resultCode.plus(
          new BigNumber("12").multipliedBy(new BigNumber("16").pow(power))
        );
      } else if (input_code[position] == "D" || input_code[position] == "d") {
        resultCode = resultCode.plus(
          new BigNumber("13").multipliedBy(new BigNumber("16").pow(power))
        );
      } else if (input_code[position] == "E" || input_code[position] == "e") {
        resultCode = resultCode.plus(
          new BigNumber("14").multipliedBy(new BigNumber("16").pow(power))
        );
      } else if (input_code[position] == "F" || input_code[position] == "f") {
        resultCode = resultCode.plus(
          new BigNumber("15").multipliedBy(new BigNumber("16").pow(power))
        );
      } else {
        if (
          parseInt(input_code[position]) <= 9 &&
          parseInt(input_code[position]) >= 0
        ) {
          resultCode = resultCode.plus(
            new BigNumber(input_code[position]).multipliedBy(
              new BigNumber("16").pow(power)
            )
          );
        }
        // error check Validation step
        else {
          errorCall();
          // resultCode=(resultCode).toFixed(20);
          return resultCode.toString();
        }
      }
    }

    i_initial < 0 ? i++ : i--;
  }
  resultCode = new BigNumber(
    resultCode.decimalPlaces(20, BigNumber.ROUND_HALF_EVEN).toString()
  );

  return resultCode.toString();
}

function bin2gray(input_code) {
  resultCode = input_code[0];
  // input_code=input_code.integerValue().toFixed(0);

  for (i = 1; i < input_code.length; i++) {
    if (input_code[i] == input_code[i - 1]) {
      resultCode += "0";
    } else if (input_code[i] == ".") {
      break;
    } else {
      resultCode += "1";
    }

    //error check Validation step
    if (
      input_code[i] % 10 > 1 ||
      input_code[i] % 10 < 0 ||
      isNaN(input_code) == true
    ) {
      errorCall();
      return resultCode;
    }
  }
  return resultCode;
}

function gray2bin(input_code) {
  resultCode = input_code[0];
  // input_code=input_code.integerValue().toFixed(0);

  for (i = 1; i < input_code.length; i++) {
    if (input_code[i] == resultCode[i - 1]) {
      resultCode += "0";
    } else if (input_code[i] == ".") {
      break;
    } else {
      resultCode += "1";
    }
    //error check Validation step
    if (
      input_code[i] % 10 > 1 ||
      input_code[i] % 10 < 0 ||
      isNaN(input_code) == true
    ) {
      errorCall();
      return resultCode;
    }
  }
  return resultCode;
}

function complement(input2) {
  for (i = 0; i < input2.length; i++) {
    if (input2[i] == "1") {
      input2 = input2.split("");
      input2[i] = "0";
      input2 = input2.join("");
    } else if (input2[i] == "0") {
      input2 = input2.split("");
      input2[i] = "1";
      input2 = input2.join("");
    }

    //error check Validation step
    else {
      errorCall();
      return resultCode;
    }
  }

  return input2;
}

function binAdd(input1, input2) {
  resultCode = "";
  carry = "";

  // checking the larger length input.
  if (input1.length > input2.length) {
    largeCode = input1;
    small_code = input2;
  } else {
    largeCode = input2;
    small_code = input1;
  }
  difference = largeCode.length - small_code.length;
  //error check Validation step for differnce in inputs

  if (isNaN(input1)) {
    errorCall();
    return resultCode;
  }

  for (j = 0; j < input1.length; j++) {
    if (input1[j] < 0 || input1[j] > 1) {
      errorCall();
      return resultCode;
    }
  }
  for (i = largeCode.length - 1; i >= difference; i--) {
    if (largeCode[i] == small_code[i - difference]) {
      resultCode = "0" + resultCode;

      if (small_code[i] == "1") {
        carry = "1";
      }
    } else {
      resultCode = "1" + resultCode;
    }

    if (largeCode[i - 1] == "0" && carry == "1") {
      // writng some extra necessity code;
      largeCode = largeCode.split("");
      //split function is used  for converting the string to array;
      largeCode[i - 1] = "1";
      carry = "0";
      largeCode = largeCode.join("");
      // join function is used to convert the string to array;
    } else if (largeCode[i - 1] == "1" && carry == "1") {
      largeCode = largeCode.split("");
      //split function is used  for converting the string to array;
      largeCode[i - 1] = "0";
      carry = "1";
      largeCode = largeCode.join("");
    }
  }

  return resultCode;
}

function bin_Sub1Comp(input1, input2) {
  //taking one's complement of input2;

  input2 = complement(input2);
  //error check Validation step for input2
  if (input2 == "error") {
    return resultCode;
  }

  //adding input1 and compleCode in  a different way
  resultCode = binAdd(input1, input2);
  //error check validation step for input1;
  if (resultCode == "error") {
    console.log(resultCode);
    return resultCode;
  }

  //last carry is remaining then add it to addition
  if (carry == "1") {
    resultCode = add1toResult(resultCode);
  }
  return resultCode;
}

function bin_Sub2Comp(input1, input2) {
  resultCode = complement(input2);
  //error check Validation step for input2
  if (resultCode == "error") {
    return resultCode;
  }

  //adding 1 to get 2's complement;

  resultCode = add1toResult(resultCode);

  input2 = resultCode;
  resultCode = binAdd(input1, input2);
  if (resultCode == "error") {
    return resultCode;
  }
  if (carry != "1") {
    resultCode = complement(resultCode);
    resultCode = add1toResult(resultCode);
  }
  return resultCode;
}

function add1toResult(resultCode) {
  carry = "1";
  for (i = resultCode.length - 1; i >= 0 && carry == "1"; i--) {
    if (resultCode[i] == carry) {
      resultCode = resultCode.split("");
      //split function is used  for converting the string to array;
      resultCode[i] = "0";
      carry = "1";
      resultCode = resultCode.join("");
    } else if (resultCode[i] != carry) {
      resultCode = resultCode.split("");
      //split function is used  for converting the string to array;
      resultCode[i] = "1";
      carry = "0";
      // console.log("yes",i);
      resultCode = resultCode.join("");
      // break;
    }
  }
  return resultCode;
}

// Binary to Decimal
function binToDecM(input_code) {
  resultCode = binORoct2Dec(2, input_code);
  return resultCode;
}
// Done Done Binary to decimal;

//binary to octal;

function binTooctM(input_code) {
  input_code = binORoct2Dec(2, input_code);
  //now decimal to octal;
  if (input_code != "error") {
    resultCode = dec2BinORoct(8, input_code);
  }
  return resultCode;
}

//done binary to octal

//binary to hexadecimal

function binTohexM(input_code) {
  // first binary to decimal
  input_code = binORoct2Dec(2, input_code);

  // now decimal to hex
  if (input_code != "error") {
    resultCode = dec2hex(input_code);
  }
  return resultCode;
}

//done binary to hexadecimal;

//doing binary to gray
function binTograyM(input_code) {
  resultCode = bin2gray(input_code);
  return resultCode;
}

//done binary to gray;

//  Doing decimal to binary
function dec2binM(input_code) {
  resultCode = dec2BinORoct(2, input_code);
  return resultCode;
}

//sucessfully done decimal to binary
//  Doing decimal to octal
function dec2octM(inputCode) {
  resultCode = dec2BinORoct(8, input_code);
  return resultCode;
}
//sucessfully done decimal to binary

//Decimal To Hexadecimal code
function decTohexM(input_code) {
  resultCode = dec2hex(input_code);
  return resultCode;
}

// done  float+int decimal to float + normal HexaDecimal;
//done

//octal to binary
function octTobinM(input_code) {
  input_code = binORoct2Dec(8, input_code);

  //now decimal to binary;
  if (input_code != "error") {
    resultCode = dec2BinORoct(2, input_code);
  }
  return resultCode;
}

//done octal to binary;

// Octal to Decimal
function octTodecM(innput_code) {
  resultCode = binORoct2Dec(8, input_code);
  return resultCode;
}

// Done Done Octal to decimal;

//octal to hexadecimal
function octTohexM(innput_code) {
  input_code = "153467";
  //first octal to decimal;
  input_code = binORoct2Dec(8, input_code);
  //now decimal to hexdecimal;
  if (input_code != "error") {
    resultCode = dec2hex(input_code);
  }
  return resultCode;
}
// Done octal to hexadecimal

//  hexadecimal to Decimal
function hexTodecM(input_code) {
  resultCode = hex2dec(input_code);
  return resultCode;
}
//done hex to decimal

//hexadecimal to binary
function hexTobinM(input_code) {
  input_code = hex2dec(input_code);
  //decimal to binary;
  if (input_code != "error") {
    resultCode = dec2BinORoct(2, input_code);
  }
  return resultCode;
}

//done hex  to binary

//hexaDecimal to octal
function hexTooctM(input_code) {
  //first hexadecimal to decimal ;
  input_code = hex2dec(input_code);
  //now decimal to octal
  if (input_code != "error") {
    resultCode = dec2BinORoct(8, input_code);
  }
  return resultCode;
}
// done hex to oct

//doing Gray to Binary
function grayTobinM(input_code) {
  resultCode = gray2bin(input_code);
  return resultCode;
}

// doing binary Addition
function binaddM(input1, input2) {
  input1 = "1011";
  input2 = "1110";
  resultCode = binAdd(input1, input2);
  resultCode = carry + resultCode;
  return resultCode;
}

//done addition;

//substraction using one's complement

function subOneM(input1, input2) {
  input1 = "10110";
  input2 = "801110";
  resultCode = bin_Sub1Comp(input1, input2);

  return resultCode;
}

// done substraction using one's complement;

// doing substraction  using two's complement
function subTwoM(input1, input2) {
  input1 = "10110";
  input2 = "01110";
  resultCode = bin_Sub2Comp(input1, input2);
  return resultCode;
}

function comp1s(innput_code) {
  resultCode = complement(input_code);
  return resultCode;
}

function comp2s(innput_code) {
  resultCode = complement(input_code);
  resultCode = add1toResult(resultCode);
  return resultCode;
}
