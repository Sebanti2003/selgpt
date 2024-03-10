import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gender, login } from "./slices/authslice";
import store from "./store";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [info, setinfo] = useState({ name: "", email: "" });
  const [male, setmale] = useState(true);
  const dispatch = useDispatch();
  const authslice = useSelector((store) => store.authslice);
  const handlesubmit = () => {
    console.log(info);
    dispatch(login(info.name, info.email));
    setinfo((e) => {
      return { ...e, name: "", email: "", male: true };
    });
    navigate('/home')
  };
  console.log(authslice);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950">
      <div className="font-mono bg-gradient-blueish w-full max-w-md max-md:w-[95%] max-md:mx-auto p-8 rounded-lg bg-blue-900 shadow-lg">
        <h2 className="text-3xl font-semibold text-blue-200  mb-6">Login</h2>
        <div className="mb-4 text-slate-200">
          <label htmlFor="email" className=" block mb-2">
            Username
          </label>
          <input
            type="text"
            id="text"
            value={info.name}
            onChange={(e) => {
              setinfo((ei) => {
                return { ...ei, name: e.target.value };
              });
            }}
            className="w-full px-3 text-black py-2 border-2 border-white rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 text-slate-200">
          <label htmlFor="email" className=" block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={info.email}
            onChange={(e) => {
              setinfo((ei) => {
                return { ...ei, email: e.target.value };
              });
            }}
            className="w-full px-3 py-2 border-2 text-black border-white rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 text-slate-200">
          <label className=" block mb-2">Gender:</label>
          <div className="flex items-center">
            <input
              type="radio"
              checked={male}
              id="male"
              name="male"
              onChange={() => {
                dispatch(gender(true));
                setmale(true);
              }}
              className="mr-2"
            />
            <label htmlFor="male" className="">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              name="female"
              checked={!male}
              onChange={() => {
                dispatch(gender(false));
                setmale(false);
              }}
              className="mr-2"
            />
            <label htmlFor="female" className="">
              Female
            </label>
          </div>
        </div>
        <button
          onClick={() => handlesubmit()}
          className="bg-green-600 text-white p-2 border-2 border-black"
        >
          Login
        </button>

        {/* Add other input fields or buttons as needed */}
      </div>
    </div>
  );
};

export default Login;
