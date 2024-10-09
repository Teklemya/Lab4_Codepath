import { useState } from 'react'
import APIForm  from './Components/APIForm'
import './App.css'


function App() {
   const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
   })
  const Access_key = import.meta.env.APIFLASH_KEY 
  const submitForm = () => {
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };
  };
  return (
    <div className="whole-page">
    <h1>Build Your Own Screenshot! 📸</h1>
    
    <APIForm
      inputs={inputs}
      handleChange={(e) =>
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value.trim(),
        }))
      }
      onSubmit={submitForm}
    />
    <br></br>

  </div>
  )
}

export default App
