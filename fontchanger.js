// !!! DO NOT DELETE PRESET VALUES !!!
// Specyfic dimensions for choosen font
let currentNeonBase = 6.98;
let currentNeonLowercaseUp = 3.49;
let currentNeonUppercaseUp = 4.53;
let currentNeonLowercaseDown = 3.49;
let currentNeonUppercaseDown = 3.49;
let currentNeonNonStandardUp = 3.49;
let mountingAdditionalDimension = 5;

// Width of letters in specyfic font
let currentNeonLetterWidth = 5.49;
let currentNeonWhitespaceWidth = 3.49;
let currentNeonUnexpectedSymbolWidth = 3.49;

// Array to check if width is standard
let standardSymbolsArray= ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];

// Variables containing all size types for specyfic font
let currentNeonStandardSize = "30px";
let currentNeonMiddleSize = "40px";
let currentNeonLargeSize = "50px";

// Each letter type cost
let currentNeonOneLineLettersCost = 25;
let currentNeonTwoLineLettersCost = 35;
let currentNeonThreeLineLettersCost = 45;

// Font name, clor, mounting option and size
let currentNeonFontName = "courgette";
let currentNeonColor = "af5fdff";
let currentNeonBackgroundType = "glassOnly";
let currentNeonSize = "standard";

// Cost for specyfic background
let currentNeonBackgroundCost = 0;

// Height and width multiplier depending on choosen neon size
let currentNeonSizeMultiplier = 1;

// Text entered by user
let currentNeonText = "";

// Arrays of letters
let lettersArrayOneLine = ["w","e","r","u","o","a","s","z","x","c","v","n","m"];
let lettersArrayTwoLineLowercaseUp = ["t","d","h","k","l","b","0","1","2","3","4","5","6","7","8","9"];
let lettersArrayTwoLineUppercaseUp = ["W","E","R","T","U","I","O","P","A","S","D","F","G","H","K","L","Z","X","C","V","B","N","M"];
let lettersArrayTwoLineDown = ["q","y","p","g"];
let lettersArrayI = ["i"];
let lettersArrayJ = ["j"];
let lettersArrayThreeLineLowercase = ["f"];
let lettersArrayThreeLineUppercase = ["Q", "Y", "J"];

// Structures describing array of letters height
lettersParametersOneLine = {
	letterAbove: 0,
	letterUnder: 0
};
lettersParametersTwoLineLowercaseUp = {
	letterAbove: currentNeonLowercaseUp,
	letterUnder: 0
};
lettersParametersTwoLineUppercaseUp = {
	letterAbove: currentNeonUppercaseUp,
	letterUnder: 0
};
lettersParametersTwoLineDown = {
	letterAbove: 0,
	letterUnder: currentNeonLowercaseDown
};
lettersParametersI = {
	letterAbove: currentNeonNonStandardUp,
	letterUnder: 0
};
lettersParametersJ = {
	letterAbove: currentNeonNonStandardUp,
	letterUnder: currentNeonLowercaseDown
};
lettersParametersThreeLineLowercase = {
	letterAbove: currentNeonLowercaseUp,
	letterUnder: currentNeonLowercaseDown
};
lettersParametersThreeLineUppercase = {
	letterAbove: currentNeonUppercaseUp,
	letterUnder: currentNeonUppercaseDown
};

// Set all parameters for selected font
function fontSetter(obj) {
	let selectedNeonFontName = obj.getAttribute("data-neonFontName");
	let selectedNeonBase = obj.getAttribute("data-neonBase");
	let selectedNeonLowercaseUp = obj.getAttribute("data-neonLowercaseUp");
	let selectedNeonUppercaseUp = obj.getAttribute("data-neonUppercaseUp");
	let selectedNeonLowercaseDown = obj.getAttribute("data-neonLowercaseDown");
	let selectedNeonUppercaseDown = obj.getAttribute("data-neonUppercaseDown");
	let selectedNeonNonStandardUp = obj.getAttribute("data-neonNonStandardUp");
	let selectedNeonLetterWidth = obj.getAttribute("data-neonLetterWidth");
	let selectedNeonWhitespaceWidth = obj.getAttribute("data-neonWhitespaceWidth");
	let selectedNeonUnexpectedSymbolWidth = obj.getAttribute("data-neonUnexpectedSymbolWidth");
	let selectedNeonStandardSize = obj.getAttribute("data-neonStandardSize");
	let selectedNeonMiddleSize = obj.getAttribute("data-neonMiddleSize");
	let selectedNeonLargeSize = obj.getAttribute("data-neonLargeSize");
	let selectedNeonOneLineLettersCost = obj.getAttribute("data-neonOneLineLettersCost");
	let selectedNeonTwoLineLettersCost = obj.getAttribute("data-neonTwoLineLettersCost");
	let selectedNeonThreeLineLettersCost = obj.getAttribute("data-neonThreeLineLettersCost");

	currentNeonFontName = selectedNeonFontName;

	currentNeonBase = parseFloat(selectedNeonBase);
	currentNeonLowercaseUp = parseFloat(selectedNeonLowercaseUp);
	currentNeonUppercaseUp = parseFloat(selectedNeonUppercaseUp);
	currentNeonLowercaseDown = parseFloat(selectedNeonLowercaseDown);
	currentNeonUppercaseDown = parseFloat(selectedNeonUppercaseDown);
	currentNeonNonStandardUp = parseFloat(selectedNeonNonStandardUp);
	currentNeonLetterWidth = parseFloat(selectedNeonLetterWidth);
	currentNeonWhitespaceWidth = parseFloat(selectedNeonWhitespaceWidth);
	currentNeonUnexpectedSymbolWidth = parseFloat(selectedNeonUnexpectedSymbolWidth);

	currentNeonStandardSize = selectedNeonStandardSize;
	currentNeonMiddleSize = selectedNeonMiddleSize;
	currentNeonLargeSize = selectedNeonLargeSize;

	currentNeonOneLineLettersCost = parseFloat(selectedNeonOneLineLettersCost);
	currentNeonTwoLineLettersCost = parseFloat(selectedNeonTwoLineLettersCost);
	currentNeonThreeLineLettersCost = parseFloat(selectedNeonThreeLineLettersCost);
	
	let textFromInput = document.getElementById("inserted_text").value;
	currentNeonText = textFromInput;
	setLettersArray(currentNeonFontName);
	updateNeonView();
}

function colorSetter(obj) {
	let selectedNeonColor = obj.getAttribute("data-color");
	currentNeonColor = selectedNeonColor;
	let textFromInput = document.getElementById("inserted_text").value;
	currentNeonText = textFromInput;
	updateNeonView();
}

function neonBackgroundSetter(obj) {
	let selectedNeonBackgroundType = obj.getAttribute("data-backgroundType");
	let selectedNeonBackgroundCost = obj.getAttribute("data-backgroundCost");
	let textFromInput = document.getElementById("inserted_text").value;
	currentNeonText = textFromInput;
	currentNeonBackgroundType = selectedNeonBackgroundType;
	currentNeonBackgroundCost = parseFloat(selectedNeonBackgroundCost);

	updateNeonView();
}

function neonSizeSetter(obj) {
	let selectedNeonSize = obj.getAttribute("data-neonSize");
	currentNeonSize = selectedNeonSize;

	updateNeonView();
}

function updateNeonText(obj) {
	let textFromInput = document.getElementById("inserted_text").value;
	textFromInput = textFromInput.replace(/\r?\n/g, '<br />');
	if (textFromInput == "") {
    	document.getElementById("neonTextFromInput").innerHTML = "Enter your text";
	}
	else {
		document.getElementById("neonTextFromInput").innerHTML = textFromInput;
	}

	currentNeonText = textFromInput;
	updateNeonView();
}

//Switching arrays depending on choosen font
function setLettersArray(fontNameChanger) {
	switch(fontNameChanger) {
		case "courgette":
			lettersArrayOneLine = ["w","e","r","u","o","a","s","z","x","c","v","n","m"];
			lettersArrayTwoLineLowercaseUp = ["t","d","h","k","l","b","0","1","2","3","4","5","6","7","8","9"];
			lettersArrayTwoLineUppercaseUp = ["W","E","R","T","U","I","O","P","A","S","D","F","G","H","K","L","Z","X","C","V","B","N","M"];
			lettersArrayTwoLineDown = ["q","y","p","g"];
			lettersArrayI = ["i"];
			lettersArrayJ = ["j"];
			lettersArrayThreeLineLowercase = ["f"];
			lettersArrayThreeLineUppercase = ["Q", "Y", "J"];
			break;
		case "raleway":
		case "textMeOne":
		case "kanit":
		case "bubblerOne":
		case "comfortaa":
		case "arimaMadurai":
		case "poiretOne":
		case "waitingSunrise":
		case "sueEllen":
		case "schoolbell":
		case "comingSoon":
			lettersArrayOneLine = ["w","e","r","u","o","a","s","z","x","c","v","n","m"];
			lettersArrayTwoLineLowercaseUp = ["t","d","f","h","k","l","b","0","1","2","3","4","5","6","7","8","9"];
			lettersArrayTwoLineUppercaseU = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
			lettersArrayTwoLineDown	= ["q","y","p","g"];
			lettersArrayI = ["i"];
			lettersArrayJ = ["j"];
			lettersArrayThreeLineLowercase = [];
			lettersArrayThreeLineUppercase = [];
			break;
		case "badScript":
			lettersArrayOneLine = ["w","e","r","u","o","a","s","z","x","c","v","n","m","0","1","2"];
			lettersArrayTwoLineLowercaseUp = ["t","d","h","k","l","b","6","8"];
			lettersArrayTwoLineUppercaseUp = ["W","E","T","Y","U","I","O","P","A","S","D","F","H","J","K","L","X","C","V","B","N","M"];
			lettersArrayTwoLineDown = ["q","y","p","g","3","4","5","7","9"];
			lettersArrayI = ["i"];
			lettersArrayJ = ["j"];
			lettersArrayThreeLineLowercase = ["f"];
			lettersArrayThreeLineUppercase = ["R", "G", "Z", "Q"];
			break;
		case "cedarvilleCursive":
			lettersArrayOneLine = ["w","e","r","u","o","a","s","x","c","v","n","m"];
			lettersArrayTwoLineLowercaseUp = ["t","d","h","k","l","b","0","1","2","3","4","5","6","7","8","9"];
			lettersArrayTwoLineUppercaseUp = ["Q","W","E","R","T","U","I","O","P","A","S","D","F","G","H","K","L","X","C","V","B","N","M"];
			lettersArrayTwoLineDown = ["q","y","p","g","z","f"];
			lettersArrayI = ["i"];
			lettersArrayJ = ["j"];
			lettersArrayThreeLineLowercase = [];
			lettersArrayThreeLineUppercase = ["Z","Y","J"];
			break;
		case "sacramento":
			lettersArrayOneLine = ["w","e","r","u","o","a","s","x","c","v","n","m"];
			lettersArrayTwoLineLowercaseUp = ["t","d","h","k","l","b","0","1","2","3","4","5","6","7","8","9"];
			lettersArrayTwoLineUppercaseUp = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","H","J","K","L","Z","X","C","V","B","N","M"];
			lettersArrayTwoLineDown = ["q","y","p","g","z"];
			lettersArrayI = ["i"];
			lettersArrayJ = ["j"];
			lettersArrayThreeLineLowercase = ["f"];
			lettersArrayThreeLineUppercase = ["G"];
			break;
		case "vibur":
			lettersArrayOneLine = ["w","e","r","u","o","a","s","z","x","c","v","n","m"];
			lettersArrayTwoLineLowercaseUp = ["t","d","h","k","l","b","0","1","2","3","4","5","6","7","8","9"];
			lettersArrayTwoLineUppercaseUp = ["W","E","R","T","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
			lettersArrayTwoLineDown = ["q","y","p","g"];
			lettersArrayI = ["i"];
			lettersArrayJ = ["j"];
			lettersArrayThreeLineLowercase = ["f"];
			lettersArrayThreeLineUppercase = ["Q", "Y"];
			break;
		case "walterTurncoat":
			lettersArrayOneLine = ["w","e","r","u","o","a","s","z","x","c","v","n","m","i","j","t","d","f","h","k","l","b","q","y","p","g"];
			lettersArrayTwoLineLowercaseUp = [];
			lettersArrayTwoLineUppercaseUp = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","0","1","2","3","4","5","6","7","8","9"];
			lettersArrayTwoLineDown = [];
			lettersArrayI = [];
			lettersArrayJ = [];
			lettersArrayThreeLineLowercase = [];
			lettersArrayThreeLineUppercase = [];
			break;
		default:
			lettersArrayOneLine = ["w","e","r","u","o","a","s","z","x","c","v","n","m"];
			lettersArrayTwoLineLowercaseUp = ["t","d","f","h","k","l","b","0","1","2","3","4","5","6","7","8","9"];
			lettersArrayTwoLineUppercaseUp = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
			lettersArrayTwoLineDown = ["q","y","p","g"];
			lettersArrayI = ["i"];
			lettersArrayJ = ["j"];
			lettersArrayThreeLineLowercase = [];
			lettersArrayThreeLineUppercase = [];
	}
}

function insertedTextHeightCalculator() {
	let finalTextHeight = 0;
	let textForCalculations = currentNeonText;

	let maxValues = {
		maxUp: 0,
		maxDown: 0
	}

	let letterArrays = new Array(lettersArrayOneLine, lettersArrayTwoLineLowercaseUp, lettersArrayTwoLineUppercaseUp, lettersArrayTwoLineDown, lettersArrayI, lettersArrayJ, lettersArrayThreeLineLowercase, lettersArrayThreeLineUppercase);
	let letterParameters = new Array(lettersParametersOneLine, lettersParametersTwoLineLowercaseUp, lettersParametersTwoLineUppercaseUp, lettersParametersTwoLineDown, lettersParametersI, lettersParametersJ, lettersParametersThreeLineLowercase, lettersParametersThreeLineUppercase);
	let lettersAndItsParameters = letterArrays.concat(letterParameters);
	let halfLenghtOflettersAndItsParametersArray = lettersAndItsParameters.length/2;

	for (let i=0; i < halfLenghtOflettersAndItsParametersArray; i++) {
		let listOfLetters = lettersAndItsParameters[i];
		let listOfLettersParamaters = lettersAndItsParameters[i+halfLenghtOflettersAndItsParametersArray];
		
		let temporaryValues = {
			temporaryUp: 0,
			temporaryDown: 0
		}

		for (let x = 0; x < textForCalculations.length; x++) {
			if(listOfLetters.includes(textForCalculations.charAt(x))) {
		      if (temporaryValues.temporaryUp < listOfLettersParamaters.letterAbove) {
		        temporaryValues.temporaryUp = listOfLettersParamaters.letterAbove;
		      }
		      if (temporaryValues.temporaryDown < listOfLettersParamaters.letterUnder) {
		        temporaryValues.temporaryDown = listOfLettersParamaters.letterUnder;
		      }
		    }
		}

		if (maxValues.maxUp <= temporaryValues.temporaryUp) {
    		maxValues.maxUp = temporaryValues.temporaryUp;
    	}
    	if (maxValues.maxDown <= temporaryValues.temporaryDown) {
      		maxValues.maxDown = temporaryValues.temporaryDown;
    	}
	}

	if(textForCalculations=="") {
		finalTextHeight = 0;
	} 
	else {
		finalTextHeight = maxValues.maxUp + currentNeonBase + maxValues.maxDown;
	}

	// If font size is bigger font height is equally bigger
	return finalTextHeight * currentNeonSizeMultiplier;
	finalTextHeight = roundWithStep(finalTextHeight * currentNeonSizeMultiplier , 0.5);
	return finalTextHeight;
}

function insertedTextWidthCalculator() {
	let countLetters = 0;
	let finalTextWidth = 0;
	let textForCalculations = currentNeonText;

	for (let x = 0; x < textForCalculations.length; x++) {
	    countLetters++;

	    if (textForCalculations.charAt(x) == " ") {
	      	finalTextWidth += currentNeonWhitespaceWidth;
	    } 
	    else if (standardSymbolsArray.includes(textForCalculations.charAt(x))){
	    	finalTextWidth += currentNeonLetterWidth;
	    }
	    else {
	    	finalTextWidth += currentNeonUnexpectedSymbolWidth;
	    }
	}

	// If font size is bigger font width is equally bigger
	finalTextWidth = roundWithStep(finalTextWidth * currentNeonSizeMultiplier , 0.5);
	return finalTextWidth;
}

function remove_first_character(element) {
  return element.slice(1)
}

function lightUp() {
	let generalLightLayer = document.querySelector(".lightLayer");
	let buttonLigthLayer = document.querySelector(".buttonLayer");
	let textToChange = document.querySelector(".neonText");
	let color = textToChange.classList[1];
  	let classOfColor = remove_first_character(color);

	generalLightLayer.style.background = "rgba(0,0,0,0.2)";
  	buttonLigthLayer.style.background = "rgba(0,0,0,0.01)";
  	textToChange.classList = "neonText";

  	if (color!="ab1f3ff" || color!="affc478") {
    	textToChange.style.color = `#${classOfColor}`;
    	currentNeonColor = `a${classOfColor}`;
	}
	if (color=="ab1f3ff" || color=="affc478") {
		textToChange.style.color = "rgba(255,255,255,0.6)";
	}
}

function lightDown() {
 	let generalLightLayer = document.querySelector(".lightLayer");
	let buttonLigthLayer = document.querySelector(".buttonLayer");
	let textToChange = document.querySelector(".neonText");
	let classOfColor = remove_first_character(currentNeonColor);
	generalLightLayer.style.background = "rgba(0,0,0,0.65)";
	buttonLigthLayer.style.background = "rgba(0,0,0,0.5)";
	textToChange.classList = "neonText";
	textToChange.classList.add(currentNeonColor);

	if (currentNeonColor!="ab1f3ff" || currentNeonColor!="affc478") {
		textToChange.style.color = "rgba(0,0,0,0.01)";
	}
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function roundWithStep(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

function calculateCost() {
	let countLetters = 0;
	let finalNeonCost = 0;
	let textForCalculations = currentNeonText;

	for (let x = 0; x < textForCalculations.length; x++) {
	    countLetters++;

	    if (lettersArrayOneLine.includes(textForCalculations.charAt(x)) || lettersArrayI.includes(textForCalculations.charAt(x))) {
	      	finalNeonCost += currentNeonOneLineLettersCost;
	    } 
	    else if (lettersArrayTwoLineLowercaseUp.includes(textForCalculations.charAt(x)) || lettersArrayTwoLineUppercaseUp.includes(textForCalculations.charAt(x)) || lettersArrayTwoLineDown.includes(textForCalculations.charAt(x)) || lettersArrayJ.includes(textForCalculations.charAt(x))){
	    	finalNeonCost += currentNeonTwoLineLettersCost;
	    }
	    else if (lettersArrayThreeLineLowercase.includes(textForCalculations.charAt(x)) || lettersArrayThreeLineUppercase.includes(textForCalculations.charAt(x))){
	    	finalNeonCost += currentNeonThreeLineLettersCost;
	    }
	}

	// If font size is bigger font width is equally bigger
	finalNeonCost = roundWithStep(finalNeonCost * currentNeonSizeMultiplier + currentNeonBackgroundCost , 0.5);
	return finalNeonCost;
}

// !!!!! If we want to use this function to generate cost more accurate we have to add data-costPerCm2 to mounting options and retreive it in function setting mounitng option
function calculateCostForGivenBackgroundDimension(heigth, width) {
	let costPerCm2 = 2;
	let field = heigth * width;
	let neonBackgroundCost = roundWithStep(field*costPerCm2 , 0.5);
	return neonBackgroundCost;
}

// Function in which will be held all visual updates gaining data from preset or functions connected with buttons. setters only set values, not change view 
// ! Color change is exception
function updateNeonView() {
	// Change neon text
	let elementToChangeFont = document.querySelector(".neonFont");
  	elementToChangeFont.classList="neonFont";
  	elementToChangeFont.classList.add(`${currentNeonFontName}`);

  	// Change neon color
  	let elementToChangeColor = document.querySelector(".neonText");
  	elementToChangeColor.classList = "neonText";
  	elementToChangeColor.classList.add(`${currentNeonColor}`);

  	// Change neon background
	let elementToChangeBackground = document.querySelector(".neonBackground");
	elementToChangeBackground.classList="neonBackground";
	elementToChangeBackground.classList.add(`${currentNeonBackgroundType}`);
	let ralColorText;
	if(currentNeonBackgroundType=="ral-system") {
		ralColorText = document.getElementById("textRalSystem").value;
		elementToChangeBackground.classList.add(`ral_${ralColorText}`);
	}

  	// Change neon size
	let elementToChangeSize = document.getElementById("neonTextFromInput");

	if (currentNeonSize == "standard") {
		currentNeonSizeMultiplier = 1;
		elementToChangeSize.style.fontSize = currentNeonStandardSize;
	} else if (currentNeonSize == "medium") {
		currentNeonSizeMultiplier = 1.66;
		elementToChangeSize.style.fontSize = currentNeonMiddleSize;
	} else {  
		currentNeonSizeMultiplier = 2.33;
		elementToChangeSize.style.fontSize = currentNeonLargeSize;
	}

	// Change dimensions for given settings 
  	let calculatedHeight;
  	let calculatedWidth;
  	let calculatedHeightWithMounting;
	let calculatedWidthWithMounting;
	let calculatedCost;
  	calculatedHeight = insertedTextHeightCalculator();
	calculatedWidth = insertedTextWidthCalculator();
	calculatedHeightWithMounting = calculatedHeight;
	calculatedWidthWithMounting = calculatedWidth;
	 calculatedCost = calculateCost();

	if(currentNeonBackgroundType != "glassOnly") {
		calculatedHeightWithMounting = calculatedHeight + mountingAdditionalDimension;
		calculatedWidthWithMounting = calculatedWidth + mountingAdditionalDimension;
	} 
	else {
		calculatedHeightWithMounting = calculatedHeight;
		calculatedWidthWithMounting = calculatedWidth;
	}

	//If we want to calculate cost per cm2:
	//let widthOfBackground = calculatedWidth + 5;
	//let heightOfBackground = calculatedHeight + 5;
	//let calculatedCost = calculateCostForGivenBackgroundDimension(heightOfBackground, widthOfBackground);

	// Display dimensions and cost:
	if(currentNeonText != "") {
		document.getElementById("overallSize").innerHTML = "Overall size: " + roundWithStep(calculatedHeightWithMounting , 0.5) + " x " + roundWithStep(calculatedWidthWithMounting , 0.5) + " cm";
		document.getElementById("neonSize").innerHTML = "Neon size: " + roundWithStep(calculatedHeight , 0.5) + " x " + roundWithStep(calculatedWidth , 0.5) + " cm";
		document.getElementById("estimatedCost").innerHTML = "Cost: " + roundWithStep(calculatedCost , 0.5) + " €";
	}
	else {
		document.getElementById("overallSize").innerHTML = "0 x 0 cm";
		document.getElementById("neonSize").innerHTML = "0 x 0 cm";
		document.getElementById("estimatedCost").innerHTML = "0 €";
	}
}



