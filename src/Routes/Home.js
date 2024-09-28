import React from "react";

const Home = () => {
  return (
    <div className="content-Layout">
      <div className="imgContainer">
        <img
          className="Homeimg"
          src="https://media.istockphoto.com/id/1227400166/photo/data-protection-and-secure-online-payments-cyber-internet-security-technologies-and-data.jpg?s=1024x1024&w=is&k=20&c=d2bKaKJFGtVFPCH7J1-qiYycXs29KK5enuG8uZ4U_fQ="
        />
      </div>
      <div className="TextContainer">
        <h2>Login</h2>
        <form className="loginform">
          <label>Enter UserName</label>
          <input type="text" />
          <label>Enter Password</label>
          <input type="password" />

          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
