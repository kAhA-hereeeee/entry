import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
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

  return (
    <div style={{ padding: "30px", }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Studio Rental Application
      </h2>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        style={{
          display: "grid",
          gap: "12px",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          background: "#f9f9f9"
        }}
      >
        <input placeholder="Organization" {...register("organization")} />
        <input placeholder="First name" {...register("firstName")} />
        <input placeholder="Last name" {...register("lastName")} />
        <input placeholder="Email" type="email" {...register("email")} />
        <textarea placeholder="Description" {...register("description")} />
        <label>Start date:</label>
        <input type="date" {...register("startDate")} />
        <label>End date:</label>
        <input type="date" {...register("endDate")} />

        <button 
          type="submit" 
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />
      <h3 style={{ textAlign: "center" }}>Applications list</h3>
      <table 
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px"
        }}
      >
        <thead style={{ background: "#eee" }}>
          <tr>
            <th style={{ border: "1px solid #FFFF", padding: "8px" }}>Organization</th>
            <th style={{ border: "1px solid #FFFF", padding: "8px" }}>First</th>
            <th style={{ border: "1px solid #FFFF", padding: "8px" }}>Last</th>
            <th style={{ border: "1px solid #FFFF", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #FFFF", padding: "8px" }}>Description</th>
            <th style={{ border: "1px solid #FFFF", padding: "8px" }}>Start</th>
            <th style={{ border: "1px solid #FFFF", padding: "8px" }}>End</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.organization}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.firstName}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.lastName}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.email}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.description}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.startDate}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
