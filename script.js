const parallaxText = document.getElementById('text');
const texts = ['Hello!', '您好!', '¡Hola!', 'नमस्कार!', '!مرحبًا', '안녕하세요!', '!שלום', 'Hallo!', 'こんにちは!', 'สวัสดีครับ!', 'Bonjour!']

// Set the initial index
let currentIndex = 0;
let typedText = '';

window.addEventListener("scroll", function () {
    let value = window.scrollY; 
    parallaxText.style.marginTop = value * 1.5 + "px";
});


let backgroundImage = document.getElementById('backgroundImage');
let textElement = document.getElementById('textElement'); // Replace 'textElement' with the actual id of your text element

window.addEventListener('scroll', function() {
  let rect = backgroundImage.getBoundingClientRect();

  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    textElement.style.display = 'none'; // Hide the text
  } else {
    textElement.style.display = 'block'; // Show the text
  }
});

// Function to update the parallax text
function updateParallaxText() {
  parallaxText.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

// Call the updateParallaxText function initially
updateParallaxText();

// Set an interval to update the text every 5 seconds
setInterval(updateParallaxText, 5000);






/* This section of code was meant to emulate a typing effect. But it was not working as intended. Helped me learn javascript though. */
// const texts = ['Hello!', '您好!', '¡Hola!', 'नमस्कार!', '!مرحبًا', '안녕하세요!', '!שלום', 'Hallo!', 'こんにちは!', 'สวัสดีครับ!', 'Bonjour!']

// // Set the initial index
// let typedText = '';
// let currentText = '';
// let stop = false;

// //infinite loop to cycle between languages
// function cycleText(){

//     for(let currentIndex = 0; currentIndex < texts.length; currentIndex++) {
        
//         currentText = texts[currentIndex];

//         for(let i = 0; i < currentText.length; i++) {
//             setInterval(parallaxType(i), 100);
//         }

//         setInterval(parallaxStay(currentIndex), 4000);

//         for(let i = 0; i < currentText.length; i++) {
//             setInterval(parallaxErase(), 100);
//         }
//         setInterval(parallaxErase(), 100);

//     }

// }

// //typing effect
// function parallaxType(i){
//     typedText += currentText[i];
//     parallaxText.textContent = typedText;

// }

// // just the text
// function parallaxStay(currentIndex){
//     parallaxText.textContent = texts[currentIndex];
// }

// //erasing effect
// function parallaxErase(){
//     typedText = typedText.slice(0, typedText.length - 1);
//     parallaxText.textContent = typedText;

// }

// while (!stop) {
//     cycleText();
// }



// Get the reference to the parallax text element
// const parallaxText = document.getElementById('text');

// // Define the text to be typed
// const textToType = 'Hello! Welcome to my website.';

// // Set the initial index and empty string for typed text
// let currentIndex = 0;
// let typedText = '';



// // Function to update the typed text
// function updateTypedText() {
//   typedText = textToType.slice(0, currentIndex);
//   parallaxText.textContent = typedText;
//   currentIndex++;

//   if (currentIndex > textToType.length) {
//     setTimeout(displayText, 4000);
//     currentIndex = 0;
//   }

// }



// updateTypedText();
// displayText();
// setInterval(updateTypedText, 100);




// let typedText = '';
// let stop = false;
// let currentTextIndex = 0;
// const texts = ['Hello!', '您好!', '¡Hola!', 'नमस्कार!', '!مرحبًا', '안녕하세요!', '!שלום', 'Hallo!', 'こんにちは!', 'สวัสดีครับ!', 'Bonjour!']; // Example array of texts

// function changeText() {
//   if (currentTextIndex >= texts.length) {
//     currentTextIndex = 0;
//   }
//   textToType = texts[currentTextIndex];
//   updateTypedText();
//   currentTextIndex++;
// }

// function updateTypedText() {
//   let i = 0;

//   function printNextCharacter() {
//     if (i < textToType.length) {
//       typedText += textToType[i];
//       parallaxText.textContent = typedText;
//       i++;
//       setTimeout(printNextCharacter, 100);
//     } else {
//       typedText = '';
//         //   parallaxText.textContent = typedText;
//       //   setTimeout(changeText, 4000); // Change text after 4 seconds
//       setInterval(setText, 4000);
//     }
//   }

//   printNextCharacter();
// }


// function setText() {
//     parallaxText.textContent = typedText;
//     changeText();
// }

// changeText(); // Start the text change process




