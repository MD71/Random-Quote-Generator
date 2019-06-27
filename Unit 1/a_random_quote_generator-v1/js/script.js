/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//Below is a list of quotes for the Random Quote Generator. 
let quotes = [
  //beginning of objects:
  {
    quote: "“The Way Get Started Is To Quit Talking And Begin Doing.",
    source: "Walt Disney",
    citation: "Disney World",
    year: "1947"
  },
  {
    quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    source: "Winston Churchill",
    year: "1904"
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today",
    source: "Will Rogers",
    citation: "history books",
    year: "1929"
  },
  {
    quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character",
    source: "Uknown",
    year: "Uknown"
  },
  {
    quote: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
    source: "Vince Lombardi",
    year: "Uknown"
  },
  {
    quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    source: "Steve Jobs",
    citation: "Apple",
    year: "2009"
  }
  //end of objects
];//end of array

//getRandomQuote() is used to generate a number from 0-5 in random order. 
function getRandomQuote(){
let random_number = Math.floor(Math.random() * 6);
return quotes[random_number];
};

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

//printQuote() will be used to replace <div id ="quote-box"> with the new random quote. 
function printQuote(){
  let random_quote = getRandomQuote();
  let html_string = '';
  html_string = '<p class="quote">' + random_quote.quote + '</p>' + '<p class="source">' + random_quote.source ;
 
  //Checks if Quotes has a citation: 
   if (random_quote.hasOwnProperty("citation")) {
   html_string =  html_string + '<span class="citation">' + random_quote.citation + '</span>';
  }//Checks if Quotes has a year: 
  if (random_quote.hasOwnProperty("year")) {
    html_string = html_string + '<span class="year">'+ random_quote.year +'</span>';
  }//adds closing </p> tag:
    html_string = html_string +`</p>`;
    //Replaces contents of "quote-box with html_string:
document.getElementById('quote-box').innerHTML = html_string;
  };

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to te line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

