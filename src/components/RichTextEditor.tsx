import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState("");

  // Load data from localStorage if available

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const userData = JSON.parse(savedData);
      setContent(`<h2>${userData.name}</h2><p>${userData.address}</p><p>${userData.email}</p><p>${userData.phone}</p>`);
    }
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto" }}>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
    </div>
  );
};

export default RichTextEditor;
