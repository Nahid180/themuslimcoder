// importing necessary modules

import { useState } from 'react';
import './components/css/navbar.css'
import { Link } from 'react-router-dom';



function Navbar() {
  //creating a state for subscribe form (if it is visible or not)
  const [visible, setVisible] = useState(false);
  //creating a state for subscribe button which will change on click. "writingVisible"=primary  "loadingVisible" to show preloader and anything else to show done
  const [subcribeState, setsubcribeState] = useState('writingVisible');
  //creating state for email form value which change in "onChange" event
  const [formvalue, setformvalue] = useState("");
  //settin the form value in "onchange" event
  const getEmail = (e) => {
    setformvalue(e.target.value);
  }
  //changing subscribe button state according to backend response
  let handleSubmission = (response) => {
    (response) ? (
      setsubcribeState("success")
    ) : (
      setsubcribeState("failed")
    )
  }
  //a function to add the subscriber in database
  const CreateSubscriber = () => {
    //setting the subscribe button state to loading because creatin process has started
    setsubcribeState('loadingVisible')
    //sending a post method to backend using "formvalue" state and fetch api
    fetch('https://articlesaboutcoding-end.herokuapp.com/create_subscriber', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emailId: formvalue,
      })
    }).then(
      //converting response to JSON
      res => res.json()
    ).then(
      //getting the response and storing it to data varible
      data => {
        //passing the response to "handleSubmission" to change the state of subcribe button to "Done" or "Failed"
        handleSubmission(data.response);
        //removing the form from window and setting it to it's default condition
        setTimeout(() => {
          setVisible(false)
          setsubcribeState('writingVisible');
          setformvalue("");
        }, 2000);
      }
    )
  }
  //the frontend
  //<input type="submit" onClick={() => { CreateSubscriber() }} value="Subscribe" className="subscribe" />
  return (
    <div>
      {
        (visible) ? (
          <div>
            <section className="wrapper">
              <div className="container">
                <div className="close-btn">
                  <i className='fa-solid fa-xmark' onClick={() => setVisible(false)}></i>
                </div>
                <div className="content">
                  <h1 className="title">Let's Keep In Touch</h1>
                  <p className="subtitle">Subscribe to get monthly free coding resources straight to your inbox!</p>
                  <input type="email" onChange={getEmail} value={formvalue} id='sub-email' className="mail" placeholder="Your Email Address" name="mail" required />
                  {
                    (subcribeState === "writingVisible") ? (

                      <button className="save-btn" onClick={() => { CreateSubscriber() }}>Subscribe</button>
                      
                    ) : (subcribeState === "loadingVisible") ? (
                      <button className="save-btn"><div className="btn-loader"></div></button>
                      
                    ):(subcribeState === "success")?(
                      <button className="save-btn  success-btn">Thanks for subscribing!</button>
                    ):(
                      <button className="save-btn failed-btn">Sorry something went wrong!</button>
                      
                    )
                  }
                  <p className="text">We won't send you spam. Unsubscribe at any time.</p>
                </div>
              </div>
            </section>
          </div>
        ) : null
      }
      <nav className='Navigation'>
        <input type="checkbox" id="check" />
        <label htmlFor='check' className="checkbtn">
          <i className='fas fa-bars'></i>
        </label>
        <label className='nav-label'><Link to={'/'}>The Muslim Coder</Link></label>
        <ul className='nav-links'>
          <li><Link to='/'><span>Home</span></Link></li>
          <li><Link to='/about'><span>About</span></Link></li>
          <li><Link to='/contact/02492493943'><span>Contact</span></Link></li>
          <li><Link to='/about'><span>Blog</span></Link></li>
          <li><span className='sub' id='sub-id' onClick={() => setVisible(true)}>Subscribe</span></li>
        </ul>
        <ul className='sub-search'>
          <li><i className="fa-solid fa-magnifying-glass search"></i></li>
          <li><span id='sub-id' onClick={() => setVisible(true)}>Subscribe</span></li>
        </ul>
      </nav><div className='spacer'></div>
      <i className="fa-solid fa-magnifying-glass search-mob"></i>
    </div>
  );
}

export default Navbar;
