/*let question = " setup user input here"

let magic = Math.floor(Math.random()*10);

console.log("What is your question? :" + question)

if (magic === 0) {
  console.log("yes");
} else if (magic === 1) {
  console.log("maybe");
} else if (magic === 2) {
  console.log("ask again later");
} else if (magic === 3) {
  console.log("why are you asking me");
} else if (magic === 4) {
  console.log("ugh you again");
} else if (magic === 5) {
  console.log("im leaning yes");
} else if (magic === 6) {
  console.log(" im leaning n");
} else if (magic === 7) {
  console.log("idk flip a coinn");
} else if (magic === 8) {
  console.log("sure why not");
}
*/


function magic(){
  const responses = [
    "yes",
    "maybe",
    "ask again later", 
    "why are you asking me",
    "ugh you again", 
    "im leaning yes", 
    "im leaning no",
    "idk flip a coinn",
    "sure why not"

  ];
  
  const magic = Math.floor(Math.random()*responses.length); 
  return responses[magic];

}

document.getElementById("questionform").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from reloading the page
  
  const questionInput = document.getElementById("question");
  const responseDiv = document.getElementById("response"); // Select the response container
  const errorMessage = document.getElementById("error-message"); // Select the error message container
  
  if (questionInput.value.trim() === "") {
    
    errorMessage.textContent = "Please ask a question before submitting!";
    /* make error message red reminder */  
    
    
  } else {
    errorMessage.textContent = "";

    const result = magic(); // Get a random response
    responseDiv.textContent = result; // Display the response in the div
    questionInput.value = "";
  }
  
  
});