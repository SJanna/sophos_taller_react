import React, { useState, useEffect } from "react";
import CircularPhoto from "./CircularPhoto";
import HeaderText from "./HeaderText";
import IconList from "./IconList";
import "./styles/App.css";

const App =()=> {
const [data, setData] = useState(null);
const [state, setState] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results[0]);
        setState({isActive: "profile", text: "My name is", data: data.results[0].name.first + " " + data.results[0].name.last});
      }
    );
  }, []);


 const handleChange = (e) => {
    if (e.currentTarget.name === "profile"){
      setState({isActive: "profile", text: "My name is", data: data.name.first + " " + data.name.last});
    }
    else if (e.currentTarget.name === "mail"){
      setState({isActive: "mail", text: "My email address is", data: data.email});
    }
    else if (e.currentTarget.name === "calendar"){
      setState({isActive: "calendar", text: "My date of birth is", data: data.dob.date});
    }
    else if (e.currentTarget.name === "map"){
      setState({isActive: "map", text: "I'm from", data: data.location.city + ", " + data.location.state + ", " + data.location.country});
    }
    else if (e.currentTarget.name === "phone"){
      setState({isActive: "phone", text: "My phone number is", data: data.phone });
    }
    else if (e.currentTarget.name === "lock"){
      setState({isActive: "lock", text: "My username is", data: data.login.username});
    }
  };

    return (
      <div className="main-container">
        <div className="Layout-header">
          <div className="photo-container">
            <CircularPhoto
              src={data?.picture.large}
              alt="Avatar"
            />
          </div>
        </div>
        <div className="Layout-main">
          <div className="Layout-main-header">
            <HeaderText info={state}/>
          </div>
          <div className="Layout-main-content">
            <IconList onChange={handleChange} info={state}/>
          </div>
        </div>
      </div>
    );
  }
export default App;
