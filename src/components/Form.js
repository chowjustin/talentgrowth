import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import InputPhone from "./InputPhoneBox";
import InputDate from "./InputDateBox";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    if (!/^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(name)) {
      setError("Name should contain only alphabets and spaces");
      return false;
    }
    if (!/^\d+$/.test(phone)) {
      setError("Phone number should contain only numbers");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Email must be in a valid format");
      return false;
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
      setError("Date should be in the format DD/MM/YYYY");
      return false;
    }
    if (!/^[https://www.linkedin.com/in/][^\s@]+$/.test(linkedin)) {
      setError("LinkedIn Profile link must be in a valid format");
      return false;
    }
    if (!/^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(address)) {
      setError("Address should contain only alphabets");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = () => {
    if (validate()) {
      dispatch(
        setFormData({
          name,
          phone: `${countryCode}${phone}`,
          date,
          email,
          linkedin,
          address,
        })
      );
      navigate("/summary");
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setCountryCode("+1");
    setDate("");
    setEmail("");
    setLinkedin("");
    setAddress("");
    setError("");
  };

  return (
    <div className="bg-purple-100 flex flex-col items-center justify-center min-h-screen max-md:px-4">
      <div className="font-poppins w-1/2 max-xl:w-3/4 max-sm:w-full max-md:p-6 p-12 h-full bg-white text-gray-900 rounded-xl">
        <div className="flex justify-between text-purple-500 max-md:text-center max-md:flex-col">
          <h1 className="text-4xl max-xl:text-xl font-bold md:mb-6 text-purple-600 max-sm:text-lg">
            Form
          </h1>
          <Link
            to="/"
            className="text-sm max-lg:text-xs max-md:mb-3 hover:text-purple-800 duration-300"
          >
            Back to home
          </Link>
        </div>
        {error && <p className="text-red-600 max-md:text-xs">{error}</p>}
        <div className="flex max-md:flex-col gap-4">
          <div className="md:w-1/2">
            <InputBox
              title="Name"
              placeholder="Example: John"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputPhone
              title="Phone"
              placeholder="Example: 812657981"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              countryCode={countryCode}
              onCountryCodeChange={(e) => setCountryCode(e.target.value)}
            />
            <InputBox
              title="Email"
              placeholder="Example: john@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 max-md:-mt-4">
            <InputDate
              title="Date of Birth"
              value={date}
              onChange={(e) => setDate(e)}
            />
            <InputBox
              title="LinkedIn Profile Link"
              placeholder="https://www.linkedin.com/in/john"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <InputBox
              title="Address"
              placeholder="Example: Orchard Road"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <button
            className="bg-purple-500 text-white px-6 sm:py-2 max-sm:text-xs max-sm:px-2 rounded-lg shadow hover:bg-purple-700 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="bg-purple-500 text-white px-6 py-2 max-sm:text-xs max-sm:px-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
