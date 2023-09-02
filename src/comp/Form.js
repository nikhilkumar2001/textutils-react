import React, {useState} from 'react'
import '../App.css';

export default function Form(props) {

  const upClickFun = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("capitalize")
  }
  const lowClickFun = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("decapitalize")
  }
  const buttonThird = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Clear")
  }

  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  const[text, setText] = useState('')
  return (
    <>
        <div className='container'>
<div className="mb-3 my-4">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
  <textarea className="form-control" id="mybox"  value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
    <button className='btn-primary' onClick={upClickFun}>Convert to UpperCase</button>
    <button className='btn-primary mx-2 my-1' onClick={lowClickFun}>Convert to lowercase</button>
    <button className='btn-primary mx-2 my-1' onClick={buttonThird}>Clear</button>
    </div>
    <div className='container my-3 '>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} and {text.length} characters</p> 
      <p>{0.08*text.split(" ").length} Minutes to read</p> 
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Preview your text here"}</p>


    </div>
    </>
  )
}
Form.defaultProps = {
    label: "Enter the text to analyze"
}
