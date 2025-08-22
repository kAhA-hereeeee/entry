import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function App() {
  const { register, handleSubmit, reset , formState: {errors} } = useForm({
    mode: "onChange",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://68a442edc123272fb9b1fe70.mockapi.io/Form")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const onSubmit = (formData) => {
    axios.post("https://68a442edc123272fb9b1fe70.mockapi.io/Form", formData)
      .then(res => {
        setData([data, res.data]);
        reset();
      })
      .catch(err => console.log(err));
  };
  console.log(errors)

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-red-500">
          Get in touch
        </h2>
        <p className="text-center font-bold text-red-500 mb-2">
          love to hear from you.
        </p>
        <p className="text-center text-gray-600 text-sm mb-6">
          Let's talk about your project, ideas, or anything you want to discuss. 
          Please fill out the form below.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} 
        style={{ display: "grid", gap: "12px", maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #FFFF", borderRadius: "10px", background: "#FFFF"
        }} className="space-y-4">

          <div className="flex justify-around gap-3">
        <input className="w-full rounded-md border border-pink-400 px-3 py-2 text-sm" placeholder="First Name" {...register("FirstName" , {required: "Поле обязательно для заполнения",maxLength: {value: 20,message: "Максимум 20 символов"}})} />
        <input className="w-full rounded-md border border-pink-400 px-3 py-2 text-sm" placeholder="Last Name" {...register("Lastname", {required: "Поле обязательно для заполнения",maxLength: {value: 20,message: "Максимум 20 символов"}})}/>
          {errors.firstName && (<h1 style={{ color: "red", fontSize: "14px" }}>{errors.firstName.message}</h1>)}
          </div>
        <input className="w-full rounded-md border border-pink-400 px-3 py-2 text-sm" placeholder="Email*" {...register("email")} />
        <input className="w-full rounded-md border border-pink-400 px-3 py-2 text-sm" placeholder="Phone*" type="phone" {...register("phone")} />
        <textarea className="w-full rounded-md border border-pink-400 px-3 py-2 text-sm" placeholder="Message" {...register("description")} />
        <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-md">
              Submit Now
        </button>
        </form>
      </div>
    </div>
    </>
  );
}
