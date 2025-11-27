import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

      fetch("${apiUrl}/api/hello")
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => setMessage("Error fetching data"));
  }, []);

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>{message}</h1>
      </div>
  );
}

export default App;
