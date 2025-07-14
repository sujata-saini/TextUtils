import React,{useState} from 'react'


export default function Text(props) {
  
  const handleUpperClick =() =>{
    console.log("Uppercase was clicked"+text); 
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted into upper case ", "success");
  }

  const handleOnChange=(e) =>{
    console.log("On change");
    setText(e.target.value);
  }

  const handleLowerClick =() => {
    console.log("on chage lowercase ");
    let newText= text.toLowerCase();
    setText(newText );
    props.showAlert("Your text has been converted to lower case", "success");

  }

   const handleClearClick =()=>{
    setText('');
    props.showAlert("Your text has been cleared permantly" ,"success");

   }
const handleCopyClick =()=>{
   console.log("i am copyied ");
   var text = document.getElementById("mybox");
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Your text has been copied ", "success");
}


const handleExtraSpaces =()=>{
  let newText =text.split(/\s+/);
  setText(newText.join (" "));
  props.showAlert("Extra spaces has been removed successfully", "success");
}


  const [text,setText]= useState('' );

  return (
    <>
    <div className="container" style ={{ color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="mybox" className="form-label"></label>

  <textarea className="form-control" id="mybox"  onChange={handleOnChange}   style ={{ backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}value ={text} rows="8" placeholder="Enter here"></textarea>
</div>

    < button  className="btn btn-primary mx-3 my-2" onClick ={handleUpperClick} >convert to Uppercase </button>
    <button className = "btn btn-primary mx-3 my-2" onClick ={handleLowerClick}>convert to Lowercase</button>
    <button className='btn btn-primary  mx-3 my-2' onClick = {handleClearClick}>clear me </button>
    <button className='btn btn-primary mx-3  my-2' onClick = {handleCopyClick}>copy me </button>
    <button className='btn btn-primary max-3 my-2'  onClick= {handleExtraSpaces}>Remove Extra Space </button>


    </div>
    <div className ="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary</h3>
<p> {text.trim().split(/\s+/).filter(word => word).length } words and {text.length} charcters</p>
     <p>{0.008*text.trim().split(/\s+/).filter(word => word).length} Minutes taken to read </p>

     <h3> Preview </h3>
     <p>{text.length>0 ?text:'Enter something in text area to preview the desired text'}</p>
</div>

  
    </>
  )
} 