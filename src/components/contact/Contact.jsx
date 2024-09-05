import React from "react";

import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a98dfd9d-4a75-49fe-9fb1-fbb8e1bdb617");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Sent us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form. Your feeedback is importat to us. Feel free to reach out through contact form. Your feeedback is importat to us.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />john@abv.bg</li>
                    <li><img src={phone_icon} alt="" />074385772244</li>
                    <li><img src={location_icon} alt="" />Mladost 30 Gabrovo Bulgaria</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter you mobile number" required />
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit now<img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}