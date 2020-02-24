import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function App() {
  const [log, setLog] = useState(null);

  async function fetchData() {
    axios.get("https://api.exchangeratesapi.io/latest").then(res => {
      const log = res.data;
      setLog({ log });
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {log != null &&
        Object.keys(log.log.rates).map(content => (
          <div>
            {content}
            {log.log.rates[content]}
            {console.log(log)}
          </div>
        ))}
    </div>
  );
}

export default App;
