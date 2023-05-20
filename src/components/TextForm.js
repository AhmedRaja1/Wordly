import React, { useState } from 'react';


export default function TextForm(props) {

// Function for Uppercase Button Click & UpperCase Logic (Start)
const handleUpClick = ()=>{
  // console.log("Uppercase was clicked" + text); (Console Hit & Trial)
  let newText = text.toUpperCase();
  setText(newText);
}
// Function for Uppercase Button Click & UpperCase Logic  (End)


// Function for Lowercase Button Click & LowerCase Logic (Start)
const handleLowClick = ()=>{
  // console.log("Lowercase was clicked" + text); (Console Hit & Trial)
  let newText = text.toLowerCase();
  setText(newText);
}
// Function for Lowercase Button Click & LowerCase Logic  (End)


// Function for Clear Text Button Click & Clear Text Logic (Start)
const handleClearClick = ()=>{
  let newText = text.slice(text.length); // Other way around : let newText = ""; (Not Good)
  setText(newText);
}
// Function for Clear Text Button Click & Clear Text Logic  (End)


// Function for Copy Text Button Click & Copy Text Logic (Start)
const handleCopyClick = () => {
  navigator.clipboard.writeText(text);
}
// Function for Copy Text Button Click & Copy Text Logic  (End)


// Function for Speech Synthesis (Start)
const handleSpeechClick = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
// Function for Speech Synthesis  (End)


// Function for Find & Replace (Start)
const handleReplaceClick = () => {
  let existing_text = prompt("Enter which word to replace : ");
  let replaced_text = prompt("Enter New Text");
  setText(text.replaceAll(existing_text, replaced_text))
}
// Function for Find & Replace  (End)


// Function for Reversal (Start)
const handleReversalClick = () => {
  let splitWord = text.split("");
  let reverseWord = splitWord.reverse("");
  let joinedWords = reverseWord.join("");
  let newText = joinedWords

  setText(newText);
};
// Function for Reversal (End)


// Function for Capitalize (Start)
const handleCapitalClick = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
}
// Function for Capitalize (End)


// Function for Removing Duplicate Words (Start)
function handleDuplicateClick(){
  let wordArr = text.split(" ");
  let newText = wordArr.filter((item, pos)=>{
      return wordArr.indexOf(item) === pos;
  })
  newText = newText.join(" ");
  setText(newText);
}
// Function for Removing Duplicate Words (End)

// Function for Removing Extra Spaces (Start)
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}
// Function for Removing Extra Spaces (End)


// Function for OnChange Handle(Start)
const handleOnChange = (event)=>{
  // console.log("On Change") (Console Hit & Trial)
  setText(event.target.value);
}
// Function for OnChange Handle {Used for typing inside textbox} (End)


// useState Hook
const [text, setText] = useState("Enter Your Text");
  return (
    <>
  
  
    <div className="container py-5">
    <div className='mb-3'>
    <textarea className="form-control" value={text} id="myBox" rows="5"
              onChange={handleOnChange} >  
    </textarea>
    </div>

    
    {/* Button Uppercase Start */}
        <button className = "btn btn-warning mx-2 my-2" onClick={handleUpClick} > Uppercase </button>
    {/* Button Uppercase End */}

    {/* Button Lowercase Start */}
    <button className = "btn btn-warning mx-2 my-2" onClick={handleLowClick} > Lowercase </button>
    {/* Button Lowercase End */}

    {/* Button Copy Text Start */}
    <button className = "btn btn-warning mx-2 my-2" onClick={handleCopyClick} > Copy </button>
    {/* Button Copy Text End */}

     {/* Button Speech Start */}
     <button className = "btn btn-warning mx-2 my-2" onClick={handleSpeechClick} > Speech </button>
    {/* Button Speech End */}

    {/* Button Replace Start */}
    <button className = "btn btn-warning mx-2 my-2" onClick={handleReplaceClick} > Replace </button>
    {/* Button Replace End */}

    {/* Button Reversal Start */}
    <button className = "btn btn-warning mx-2 my-2" onClick={handleReversalClick} >Reversal </button>
    {/* Button Reversal End */}

    {/* Button Reversal Start */}
    <button className = "btn btn-warning mx-2 my-2" onClick={handleCapitalClick} >Capitalize</button>
    {/* Button Reversal End */}
    
    {/* Button Reversal Start */}
    <button className = "btn btn-warning mx-2 my-2" onClick={handleDuplicateClick}>Duplicate</button>
    {/* Button Reversal End */}
   
    {/* Button Extra Spaces Removal Start */}
    <button className = "btn btn-warning mx-2 my-2" onClick={handleExtraSpaces}>Spaces</button>
    {/* Button Extra Spaces Removal End */}

        {/* Button Clear Text Start */}
        <button className = "btn btn-danger mx-2 my-2" onClick={handleClearClick} > Clear Text </button>
    {/* Button Clear Text End */}
    
    
    </div>  
  
   
{/* Summary Accordion (Start) */}
  <div className="accordion my-2" id="accordionExample">
  <div className="accordion-item">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <h5> Your Text's Summary</h5>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Words = {text.split(/\s+/).filter((element)=>{return element.length !==0}).length}  
        <br />
        Characters = {text.length}
        <br />
        Reading Time = {text.split(" ").length * 0.008} Minutes
      </div>
    </div>
  </div>
  </div>
</div>
{/* Summary Accordion (End) */}


   
{/* Preview (Start) */}
<div className="accordion" id="Preview">
  <div className="accordion-item">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <h5> Your Text's Preview</h5> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {text}
      </div>
    </div>
  </div>
  </div>
</div>
{/* Preview (End) */}



    
 

    
    </>
  )
}