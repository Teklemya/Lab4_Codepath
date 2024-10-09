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
  const Access_key = import.meta.env.APIFLASH_KEY;
  const submitForm = () => {
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    }; 
    if (inputs.url === "" || inputs.url == " ") {
    alert("Please enter a URL")
  } else {
    for (const [key, value] of Object.entries(inputs)) {
      if (value == "") {
        inputs[key] = defaultValues[key]
      }
    }
  } 
  const makeQuery = () => {
  let wait_until = "network_idle";
  let response_type = "json";
  let fail_on_status = "400%2C404%2C500-511";
  let url_starter = "https://";
  let fullURL = url_starter + inputs.url;
  let query = `https://api.apiflash.com/v1/urltoimage?access_key=${Access_key}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
  callAPI(query).catch(console.error);}
  };

  const [currentImage, setCurrentImage] = useState(null);

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json.url == null) {
      alert("Oops! Something went wrong with that query, let's try again!")
        }
    else {
      setCurrentImage(json.url);
    }
  }
  


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
