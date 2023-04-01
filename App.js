import "./App.css";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>
  setAlert({
    msg: message,
    type: type

  })
  setTimeout(() => {
    setAlert(null)
  }, 5000);
  

  
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#134ca1';
      showAlert("Dark mode has been enables", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enables", "success")
      }
  }
  return (
    <>
<Navbar title="TextUtill" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Textforms showAlert={showAlert} heading="Enter your text" mode={mode} />
</div>

</>
  );
}

export default App;
