import React, { useState } from 'react'

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

const emptyForm = {
  email: "",
  fullName: "",
  address: "",
  address2: "",
  city: "",
  province: "",
  postalCode: "",
  agree: false,
};

export default function DataEntryForm() {
  // values currently typed into the form
  const [form, setForm] = useState(emptyForm);
  // copy of the values taken when Submit is pressed
  const [submitted, setSubmitted] = useState(null);

  // one change handler for every input, using the input's name attribute
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    setSubmitted({ ...form });
  };

  return (
    <div className="container">
      <form className="entry-form" onSubmit={handleSubmit}>
        <h1>Data Entry Form</h1>

        <div className="row">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Enter email"
              value={form.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="fullName">Name</label>
            <input id="fullName" name="fullName" type="text" placeholder="Full Name"
              value={form.fullName} onChange={handleChange} />
          </div>
        </div>

        <div className="field">
          <label htmlFor="address">Address</label>
          <input id="address" name="address" type="text" placeholder="1234 Main St"
            value={form.address} onChange={handleChange} />
        </div>

        <div className="field">
          <label htmlFor="address2">Address 2</label>
          <input id="address2" name="address2" type="text" placeholder="Apartment, studio, or floor"
            value={form.address2} onChange={handleChange} />
        </div>

        <div className="row three">
          <div className="field">
            <label htmlFor="city">City</label>
            <input id="city" name="city" type="text"
              value={form.city} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="province">Province</label>
            <select id="province" name="province" value={form.province} onChange={handleChange}>
              <option value="">Choose...</option>
              {provinces.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="postalCode">Postal Code</label>
            <input id="postalCode" name="postalCode" type="text"
              value={form.postalCode} onChange={handleChange} />
          </div>
        </div>

        <div className="check">
          <input id="agree" name="agree" type="checkbox"
            checked={form.agree} onChange={handleChange} />
          <label htmlFor="agree">Agree Terms &amp; Condition?</label>
        </div>

        <button type="submit" className="btn-submit">Submit</button>
      </form>

      {/* Part II - show the entered data below the form after Submit */}
      {submitted && (
        <div className="output">
          <p><span className="key">Email:</span> {submitted.email}</p>
          <p><span className="key">Full Name:</span> {submitted.fullName}</p>
          <p><span className="key">Address:</span> {submitted.address}{submitted.address2 && `, ${submitted.address2}`}</p>
          <p><span className="key">City:</span> {submitted.city}</p>
          <p><span className="key">Province:</span> {submitted.province}</p>
          <p><span className="key">Postal Code:</span> {submitted.postalCode}</p>
        </div>
      )}
    </div>
  );
}