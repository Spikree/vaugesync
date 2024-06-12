import { useState } from "react";
import axios from "axios";
import "./BookADemo.css";

const BookADemo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      phoneNumber: phoneNumber
    };

    axios.post('http://localhost:5000/submit', data)
      .then(response => {
        console.log('Form submitted successfully');
        setFormData({
          name: "",
          email: "",
          service: "",
        });
        setPhoneNumber(country.number);
      })
      .catch(error => {
        alert('Error submitting form');
        console.error(error);
      });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const [country, setCountry] = useState({
    countryName: "uk",
    number: "+44",
  });

  const [phoneNumber, setPhoneNumber] = useState(country.number);

  const countryHandler = (event) => {
    let newNumber = "";
    switch (event.target.value) {
      case "uk":
        newNumber = "+44";
        break;
      case "usa":
        newNumber = "+1";
        break;
      case "ind":
        newNumber = "+91";
        break;
      case "aus":
        newNumber = "+61";
        break;
      case "can":
        newNumber = "+1";
        break;
      case "fra":
        newNumber = "+33";
        break;
      case "ger":
        newNumber = "+49";
        break;
      case "ita":
        newNumber = "+39";
        break;
      case "jpn":
        newNumber = "+81";
        break;
      case "chn":
        newNumber = "+86";
        break;
      case "bra":
        newNumber = "+55";
        break;
      case "rsa":
        newNumber = "+27";
        break;
      case "mex":
        newNumber = "+52";
        break;
      case "arg":
        newNumber = "+54";
        break;
      case "esp":
        newNumber = "+34";
        break;
      case "rus":
        newNumber = "+7";
        break;
      case "ksa":
        newNumber = "+966";
        break;
      case "uae":
        newNumber = "+971";
        break;
      case "kor":
        newNumber = "+82";
        break;
      case "others":
        newNumber = "";
        break;
      default:
        newNumber = "";
        break;
    }
    setCountry({ countryName: event.target.value, number: newNumber });
    setPhoneNumber(newNumber); // Update phone number with the new country code
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="book-a-demo">
      <div className="book-head">
        <h1>Book a free demo</h1>
        <p>
          We really encourage you to try VaugeSync as a communication channel to
          sell, market and support more efficiently
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className=" demo-form form-name">
          <label className="book-label" htmlFor="name">
            Name :
          </label>
          <input
            name="name"
            onChange={onChangeHandler}
            value={formData.name}
            placeholder="Please enter your name"
            type="text"
          />
        </div>

        <div className="demo-form form-email">
          {/* email */}
          <label className="book-label" htmlFor="email">
            Email :
          </label>
          <label htmlFor="" className="small-label">
            *To book your 1 on 1 demo use your business email.
          </label>
          <input
            name="email"
            onChange={onChangeHandler}
            value={formData.email}
            placeholder="email@gmail.com"
            type="text"
          />
        </div>

        <div className="demo-form form-help">
          {/* help */}
          <label className="book-label" htmlFor="">
            How can we help you :
          </label>
          <select
            name="service"
            onChange={onChangeHandler}
            className="select-help"
          >
            <option value="please-select">Please select</option>
            <option value="bulk-broadcast">Bulk broadcast</option>
            <option value="chatbot-automation">Chatbot automation</option>
            <option value="customer-support">Customer support</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* phone */}
        <div className="demo-form form-phone">
          <label className="book-label" htmlFor="">
            Phone No. :
          </label>
          <div className="phone-and-select-country">
            <select onChange={countryHandler} className="select-help">
              <option value="uk">UK</option>
              <option value="usa">USA</option>
              <option value="ind">IND</option>
              <option value="aus">Australia</option>
              <option value="can">Canada</option>
              <option value="fra">France</option>
              <option value="ger">Germany</option>
              <option value="ita">Italy</option>
              <option value="jpn">Japan</option>
              <option value="chn">China</option>
              <option value="bra">Brazil</option>
              <option value="rsa">South Africa</option>
              <option value="mex">Mexico</option>
              <option value="arg">Argentina</option>
              <option value="esp">Spain</option>
              <option value="rus">Russia</option>
              <option value="ksa">Saudi Arabia</option>
              <option value="uae">United Arab Emirates</option>
              <option value="kor">South Korea</option>
              <option value="others">Others</option>
            </select>

            <input
              placeholder="000-00-000"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          </div>
        </div>

        <button
          className="submit-button"
          type="submit"
        >
          Schedule demo
        </button>
      </form>
    </div>
  );
};

export default BookADemo;
