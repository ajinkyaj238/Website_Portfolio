// // const parallaxText = document.getElementById('text');

// // window.addEventListener("scroll", function () {
// //     let value = window.scrollY; 
// //     parallaxText.style.marginTop = value * 1.5 + "px";
// // });

// /* This section of code was meant to emulate a typing effect. But it was not working as intended. Helped me learn javascript though. */
// const texts = ['Hello!', '您好!', '¡Hola!', 'नमस्कार!', '!مرحبًا', '안녕하세요!', '!שלום', 'Hallo!', 'こんにちは!', 'สวัสดีครับ!', 'Bonjour!']

// // Set the initial index
// let typedText = '';
// let currentText = '';
// let iterator = 0;
// let stop = false;

// //infinite loop to cycle between languages
// function cycleText() {
//     while (!stop) {
//       for (let currentIndex = 0; currentIndex < texts.length; currentIndex++) {
//         currentText = texts[currentIndex];
  
//         for (let i = 0; i < currentText.length; i++) {
//           iterator = i;
//           setInterval(parallaxType, 100);
//         }
  
//         setInterval(parallaxStay, 4000);
        
//         for (let i = 0; i < currentText.length; i++) {
//             setInterval(parallaxErase, 100);
//         }
//     }
//     }
//   }

// //typing effect
// function parallaxType(){
//     typedText += currentText[iterator];
//     console.log(typedText);

// }

// // just the text
// function parallaxStay(){
//     console.log(currentText);
// }

// //erasing effect
// function parallaxErase(){
//     typedText = typedText.slice(0, typedText.length - 1);
//     console.log(typedText);

// }

// cycleText();

// // Define the text to be typed
// // const textToType = 'Hello! Welcome to my website.';
// const texts = ['Hello!', '您好!', '¡Hola!', 'नमस्कार!', '!مرحبًا', '안녕하세요!', '!שלום', 'Hallo!', 'こんにちは!', 'สวัสดีครับ!', 'Bonjour!']


// // Set the initial index and empty string for typed text
// let typedText = '';
// let textToType = '';
// let stop = false;
// let currentTextIndex = 0;


// function changeText() {

//   for (let z = 0; z < texts.length; z++) {

//     if (z >= texts.length - 1) {
//       z = 0;
//     }
//     textToType = texts[z];
//     updateTypedText();

//   }
  
// }


// function updateTypedText() {
//   let i = 0;

//   function printNextCharacter() {
//     if (i < textToType.length) {
//       console.log(textToType);
//       typedText += textToType[i];
//       console.log(typedText);
//       i++;
//       setTimeout(printNextCharacter, 100);
//     } else {
//       typedText = '';
//       console.log(textToType);
//       setTimeout(updateTypedText, 4000); // Change after 4 seconds. 
//     }
//   }

//   printNextCharacter();
// }
 

// changeText();
// // updateTypedText();


let typedText = '';
let stop = false;
let currentTextIndex = 0;
const texts = ['Hello!', '您好!', '¡Hola!', 'नमस्कार!', '!مرحبًا', '안녕하세요!', '!שלום', 'Hallo!', 'こんにちは!', 'สวัสดีครับ!', 'Bonjour!']; // Example array of texts

function changeText() {
  if (currentTextIndex >= texts.length) {
    currentTextIndex = 0;
  }
  textToType = texts[currentTextIndex];
  updateTypedText();
  currentTextIndex++;
}

function updateTypedText() {
  let i = 0;

  function printNextCharacter() {
    if (i < textToType.length) {
      typedText += textToType[i];
      console.log(typedText);
      i++;
      setTimeout(printNextCharacter, 100);
    } else {
      typedText = '';
      console.log(textToType);
      setTimeout(changeText, 4000); // Change text after 4 seconds
    }
  }

  printNextCharacter();
}

changeText(); // Start the text change process





