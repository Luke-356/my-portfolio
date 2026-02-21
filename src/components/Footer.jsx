import { Link } from "react-scroll";
import linkedin from "../Images/linkedin.svg";
import facebook from "../Images/facebook.svg";
import github from "../Images/github.svg";
import arrowRight from "../Images/arrowRight.svg";
import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      let data = {};
      try {
        data = await res.json(); // parse response
      } catch {
        data = { message: "Server returned invalid response" };
      }

      setSuccess(data.message);
      if (res.ok) {
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      setSuccess("Failed to send message. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className="bg-[#505050] mt-36 lg6:mt-20 flex justify-around py-14 lg6:gap-20 lg6:flex-col lg6:items-center sm1:flex-col sm1:px-4">
      
      {/* Navigation */}
      <div className="lg6:text-center sm1:text-center">
        <h2 className="text-[26px] text-[#f1f1f1] sm1:text-xl">Navigate To</h2>
        <div className="flex flex-col mt-8 gap-6">
          {["hero", "projects", "about", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-xl cursor-pointer text-[#f1f1f1] sm1:text-base"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Social Media & Contact Details */}
      <div className="sm1:w-full">
        <div className="lg6:text-center sm1:text-center">
          <h2 className="text-[26px] text-[#f1f1f1] sm1:text-xl">Social Media</h2>
          <div className="flex gap-5 mt-8 lg6:justify-center sm1:justify-center">
            <a href="https://www.linkedin.com/in/nyinyilwin" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="cursor-pointer sm1:w-6 sm1:h-6" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="cursor-pointer sm1:w-6 sm1:h-6" />
            </a>
            <a href="https://github.com/nyinyilwin" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="cursor-pointer sm1:w-6 sm1:h-6" />
            </a>
          </div>
        </div>

        <div className="mt-12 lg6:text-center sm1:text-center sm1:mt-8">
          <h2 className="text-[26px] text-[#f1f1f1] sm1:text-xl">Contact Details</h2>
          <div className="flex flex-col mt-8 gap-6">
            <a href="mailto:nyinyilwin356@gmail.com" className="text-xl text-[#f1f1f1] sm1:text-base">
              nyinyilwin356@gmail.com
            </a>
            <a href="tel:+13475360536" className="text-xl text-[#f1f1f1] sm1:text-base">
              +13475360536
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-64 sm1:w-full">
        <h2 className="text-[26px] text-[#f1f1f1] lg6:text-center sm1:text-center sm1:text-xl">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
          <div>
            <label htmlFor="email" className="text-xl text-[#f1f1f1] text-left sm1:text-base sm1:block">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 h-12 w-full bg-[#7A7A7A] rounded-[9px] pl-2 border-transparent border-2 focus:outline-none focus:border-lightblue focus:border-2 focus:ring-1"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="text-xl text-[#f1f1f1] sm1:text-base sm1:block">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="20"
              rows="7"
              className="mt-2 w-full bg-[#7A7A7A] rounded-[9px] pl-2 pt-2 border-transparent border-2 focus:outline-none focus:border-lightblue focus:border-2 focus:ring-1 sm1:text-sm"
              required
            ></textarea>

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="flex gap-4 bg-lightblue text-xl text-white pl-8 pr-4 py-3 rounded-xl sm1:text-base sm1:px-4 sm1:py-2"
              >
                Submit <img src={arrowRight} alt="arrowRight" className="sm1:w-4 sm1:h-4" />
              </button>
            </div>

            {success && <p className="mt-2 text-white">{success}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;