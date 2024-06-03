import { useState } from 'react';
import './BookADemo.css';

const BookADemo = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.service);
    console.log(phoneNumber);
  };

  const [formData,setFormData] = useState({
    name: "",
    email: "",
    service: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(formData=>({...formData,[name]:value}))
   }

  const [country, setCountry] = useState({
    countryName: "uk",
    number: "+44"
  });

  const [phoneNumber, setPhoneNumber] = useState(country.number);

  const countryHandler = (event) => {
    let newNumber = "";
    switch(event.target.value) {
      case "uk":
        newNumber = "+44";
        break;
      case "usa":
        newNumber = "+1";
        break;
      case "ind":
        newNumber = "+91";
        break;
      case "others":
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
    <div className='book-a-demo'>
      <div className="book-head">
        <h1>Book a free demo</h1>
        <p>We really encourage you to try VaugeSync as a communication channel to sell, market and support more efficiently</p>
      </div>

      <form action="">
        {/* name */}
        <div className=" demo-form form-name">
          <label className='book-label' htmlFor="name">Name :</label>
          <input name='name' onChange={onChangeHandler} value={formData.name} placeholder='Please enter your name' type="text" />
        </div>

        <div className="demo-form form-email">
          {/* email */}
          <label className='book-label' htmlFor="email">Email :</label>
          <label htmlFor="" className='small-label'>*To book your 1 on 1 demo use your business email.</label>
          <input name='email' onChange={onChangeHandler} value={formData.email} placeholder='email@gmail.com' type="text" />
        </div>

        <div className="demo-form form-help">
          {/* help */}
          <label className='book-label' htmlFor="">How can we help you :</label>
          <select name='service' onChange={onChangeHandler} className='select-help'>
            <option value="please-select">Please select</option>
            <option value="bulk-broadcast">Bulk broadcast</option>
            <option value="chatbot-automation">Chatbot automation</option>
            <option value="customer-support">Customer support</option>
            <option value="others">Others</option>
          </select>
        </div>
        
        {/* phone */}
        <div className="demo-form form-phone">
          <label className='book-label' htmlFor="">Phone No. :</label>
          <div className="phone-and-select-country">
            <select onChange={countryHandler} className='select-help'>
              <option value="uk">UK</option>
              <option value="usa">USA</option>
              <option value="ind">IND</option>
              <option value="others">Others</option>
            </select>
            <input
              placeholder='000-00-000'
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          </div>
        </div>

        <button onClick={handleSubmit} className='submit-button' action="submit">Schedule demo</button>
      </form>
    </div>
  );
}

export default BookADemo;
