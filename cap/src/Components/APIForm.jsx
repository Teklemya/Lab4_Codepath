import PropTypes from 'prop-types'
const APIForm = ({inputs, handleChange, onSubmit}) => {
    const inputsInfo = [
        "Input a link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
        "Input which image format you would prefer for your screenshot: jpeg, png, or webp",
        "Input true or false if you would like your website screenshot to not contain any ads",
        "Input true or false if you would like your website screenshot to not contain of those annoying 'allow cookies' banners",
        "Choose the width of your screenshot (in pixels)",
        "Choose the height of your screenshot (in pixels)",
      ];
 return (
    <div>
      <h2>Select your Image Attributes:</h2>
      <form className="form-container">
        {inputs &&
          Object.entries(inputs).map(([Catagory, value], index) => (
        <li className="form" key={index}>
            <h2>{Catagory}</h2>
            <input
              type="text"
              name={Catagory}
              value={value}
              placeholder="Input this attribute"
              onChange={handleChange}
              className="textbox"
            />
            <br />
            <br />
            <br />
            <p>{inputsInfo[index]}</p>
        </li>
      ))}
      </form>
      <br />
      <button className="submit" onClick={onSubmit}>Take that Pic! 🎞</button>
    </div>
  )
}
APIForm.propTypes = {
            inputs: PropTypes.object.isRequired,
            handleChange: PropTypes.func.isRequired,
            onSubmit: PropTypes.func.isRequired
        }; 

export default APIForm
