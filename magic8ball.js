function magic(){
  const responses = [
    "yes",
    "maybe",
    "ask again later", 
    "why are you asking me",
    "ugh you again", 
    "im leaning yes", 
    "im leaning no",
    "idk flip a coin",
    "sure why not"

  ];
  // self reminder i want to make the responses in another file so i can add or swap as i see fit 
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
    //Reminder make error message red reminder  
    
    
  } else {
    errorMessage.textContent = "";

    const result = magic(); // Get a random response
    responseDiv.textContent = result; // Display the response in the div
    questionInput.value = "";
  }
  
  
});




// current to do list:
// 1. fix bug where output dosnt reset if you click the submit
// again with an empty value. currently i would like it to reset the preveous answer
// and only display the error log.

// 2. take deep dive on suggested chat gpt fixes: remember if you dont understand it you arnt doing it yourself.
// 3. start push for making answers interchangeable by adding seperate files with response answers.
// 4. find artwork or purchase artwork for the site i wish to make it look good.
