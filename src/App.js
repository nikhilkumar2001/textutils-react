import './App.css';
import Nav from './comp/Nav';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Form from './comp/Form'
// import About from './comp/About';
import Alert from './comp/Alert';
import React, { useState } from 'react';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
      {/* <Router> */}
        <Nav />
        <Alert alert={alert} />
        {/* <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={<Form showAlert={showAlert} />} />
        </Routes> */}
        <Form showAlert={showAlert} />
        <div className='container my-7'></div>
      {/* </Router> */}
    </>
  );
}

export default App;
