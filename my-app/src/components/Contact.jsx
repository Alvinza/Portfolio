// Import React and necessary assets/icons
import React from 'react'
import themePattern from '../assets/theme_pattern.svg'
import locationIcon from '../assets/location_icon.svg'
import mailIcon from '../assets/mail_icon.svg'
import callIcon from '../assets/call_icon.svg'
// Import toast notifications for form submission feedback
import { toast } from 'react-toastify';

// Contact component for handling user inquiries and displaying contact information
const Contact = () => {
    // State to manage form submission status message
    const [result, setResult] = React.useState("");

  // Handle form submission
  const onSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Set loading state
    setResult("Sending....");
    // Create FormData object from form
    const formData = new FormData(event.target);

    // Add Web3Forms access key to formData
    formData.append("access_key", "ac0ea1e3-87c3-4016-8df4-9f62d0403230");

    // Submit form data to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    // Parse API response
    const data = await response.json();

    // Handle successful form submission
    if (data.success) {
      setResult("");
      toast.success("Form submitted successfully");
      event.target.reset();
    }
    // Handle form submission errors
    else {
      console.log("Error", data);
      setResult(data.message);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    // Main contact section container with ID for navigation
    <div id='contact' className='contact'>
        {/* Section title with decorative pattern */}
        <div className="contactTitle">
            <h1>Get in touch</h1>
            <img src={themePattern} alt="" />
        </div>

        {/* Main content section with two columns */}
        <div className="contactSection">
            {/* Left column - Contact information */}
            <div className="contactLeft">
                <h1>Let's talk </h1>
                <p>I'm currently available to take on new projects. </p>
                {/* Contact details with icons */}
                <div className="conatactDetails">
                    <div className="contactDetail">
                        <img src={mailIcon} alt="" /> <p>alvinzondi@gmail.com</p>
                    </div>
                    <div className="contactDetail">
                        <img src={callIcon} alt="" /> <p>067-604-9312</p>
                    </div>
                    <div className="contactDetail">
                        <img src={locationIcon} alt="" /> <p>Cape Town, South Africa</p>
                    </div>
                </div>
            </div>

            {/* Right column - Contact form */}
            <form onSubmit={onSubmit} className='contactRight'>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />

                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email' />

                <label htmlFor="">Write your message here..</label>
                <textarea name="message" rows="8" placeholder='Enter your message here'></textarea>
                {/* Submit button with dynamic text based on submission status */}
                <button className='btn btn-primary'>{result ? result : 'Send Message'}</button>
            </form>
        </div>
    </div>
  )
}

export default Contact