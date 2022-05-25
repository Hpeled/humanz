import React, { useEffect, useState } from "react";
import "./App.css";
import { Clients } from "./components/clients";
function App() {
  const [clients, setClients] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("in fetchdata");
        let clientsResponse = await fetch("/api/clients?page=0", {
          mode: "cors",
        });
        let clientsResults = await clientsResponse.json();
        setClients(clientsResults);
        console.log(clients);
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        {clients.clients && clients.clients.data ? (
          <Clients clients={clients}></Clients>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
