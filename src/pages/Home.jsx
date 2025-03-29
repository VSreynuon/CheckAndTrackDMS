import React, { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Value", inputValue);
  };
  return (
    <div className="m-5 d-flex justify-content-center " style={{ gap: "20px" }}>
      <h4>Upcoming due date of monthly-annual tax return</h4>
      <div class="card">
        <div class="card-header bg-primary text-white fw-bold">March 8 2025</div>
        <div class="card-body">
          <p class="card-text">Annaul Income Tax Return For 2025</p>
        </div>
      </div>
      <div class="card">
        <div class="card-header bg-primary text-white fw-bold">March 8 2025</div>
        <div class="card-body">
          <p class="card-text">Annaul Income Tax Return For 2025</p>
        </div>
      </div>
      <div class="card">
        <div class="card-header bg-primary text-white fw-bold">March 8 2025</div>
        <div class="card-body">
          <p class="card-text">Annaul Income Tax Return For 2025</p>
        </div>
      </div>
    </div>
  );
}
