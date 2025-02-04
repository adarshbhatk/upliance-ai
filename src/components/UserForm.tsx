import React, { useState, useEffect } from "react";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isUnsaved, setIsUnsaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsUnsaved(true);
  };

  // Generate id and save data to localStorage

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUserData = {
      ...formData,
      id: Date.now().toString(), // Auto-generate unique user ID using current date & time
    };
    localStorage.setItem("userData", JSON.stringify(newUserData));
    setFormData(newUserData);
    setIsUnsaved(false);
    alert("Data saved!");
  };

  // Warning the user of unsaved changes if they try to close the browser/tab

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isUnsaved) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isUnsaved]);

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <button type="submit">Save Data</button>
    </form>
  );
};

export default UserForm;
