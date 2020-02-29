import React, { useEffect } from "react";
import API from "../../util/api";
import Table from "../../components/restaurant/Table";

const Restaurant = props => {
  useEffect(() => {
    //console.log("Hey");
  }, []);

  const handleLogout = () => {
    API.post("logout").then(res => {
      console.log(res);
      props.history.push("/login");
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
        <nav class="nav nav-underline">
          <a class="nav-link active" href="#">
            Dashboard
          </a>

          <a class="nav-link" href="#">
            Explore
          </a>
        </nav>
      </nav>

      <br />

      {/* <div className="col"> */}
      <div className="row">
        <Table type="empty" id="1" />
        <Table type="reserved" id="2" />
        <Table type="occupied" id="3" />
        <Table type="empty" id="1" />
        <Table type="reserved" id="2" />
        <Table type="occupied" id="3" />
        <Table type="empty" id="1" />
        <Table type="reserved" id="2" />
        <Table type="occupied" id="3" />
        <Table type="empty" id="1" />
        <Table type="reserved" id="2" />
        <Table type="occupied" id="3" />
      </div>
      {/* </div> */}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Restaurant;
