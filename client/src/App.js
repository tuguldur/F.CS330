import React, { useState } from "react";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [state, setState] = useState(null);
  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("content", state);
          axios.post("/api/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (data) => {
              //Set the progress value to show the progress bar
              console.log(Math.round((100 * data.loaded) / data.total));
            },
          });
        }}
      >
        <label>
          Upload a file:
          <input
            type="file"
            name="file"
            accept="video"
            onChange={(e) => {
              setState(e.target.files[0]);
            }}
          />
        </label>

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default App;
