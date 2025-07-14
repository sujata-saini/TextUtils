import React,{useState}  from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
      color: 'black',
      backgroundColor: 'white',
      border  : '1px solid white' 
    })
    const [btnText, setBtnText] = useState("Enable dark Mode");
  
    const toggleStyle = () => {
      if (myStyle.color === 'black') {
        setMyStyle({
          color: 'white',
          backgroundColor: 'black',
          border : '1px solid white'
        })
        setBtnText("Enable light Mode");
      
      } else {
        setMyStyle({
          color: 'black',
          backgroundColor: 'white'
        });
        setBtnText("Enable dark Mode");
       
      }
      }
  return (
    <div className="container my-4" style={myStyle}>
    <h1 className="mx-3 mt-3">About Us</h1>
  
    <div className="accordion mx-3 my-4" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            style={myStyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Analyze your text
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            <strong>TextUtils gives you a way to analyze your text efficiently and quickly.</strong>
          </div>
        </div>
      </div>
  
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            style={myStyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Free to use
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            <strong>TextUtils is a free character counter tool that provides instant count and other text-related functionality.</strong>
          </div>
        </div>
      </div>
  
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            style={myStyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Browser compatible
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            <strong>This word counter software works in Chrome, Firefox, Internet Explorer, Opera, and more.</strong>
          </div>
        </div>
      </div>
    </div>
  
    <div className="text-center">
      <button type="button" onClick={toggleStyle} className="btn btn-primary">
        {btnText}
      </button>
    </div>
  </div>
  
  )
}
