import React from "react";
import API from "../../util/api";
import Table from "../../components/restaurant/Table";
import Sidebar from "../../components/restaurant/Sidebar";

const Restaurant = props => {
  const handleLogout = () => {
    API.post("/user/logout").then(res => {
      props.history.push("/login");
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-primary shadow-sm">
        <nav className="nav nav-underline">
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </nav>
      </nav>

      <div className="row dashboard">
        <div className="col-xs-12 col-md-12 col-lg-3">
          <Sidebar />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9">
          <div className="my-3 p-3 bg-white rounded shadow-sm">
            <h6 className="border-bottom border-gray pb-2 mb-0">Tables</h6>

            <div className="row mt-2 p-2">
              <Table type="Empty" id="1" />
              <Table type="Reserved" id="2" />
              <Table type="Occupied" id="3" />
              <Table type="Empty" id="4" />
              <Table type="Empty" id="5" />
              <Table type="Empty" id="6" />
              <Table type="Empty" id="7" />
              <Table type="Empty" id="8" />
            </div>
          </div>

          <div className="my-3 p-3 bg-white rounded shadow-sm">
            <h6 className="border-bottom border-gray pb-2 mb-0">Served</h6>
            <div className="media text-muted pt-3">
              <svg
                class="bd-placeholder-img mr-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 32x32"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                  32x32
                </text>
              </svg>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
              </p>
            </div>

            <div class="media text-muted pt-3">
              <svg
                class="bd-placeholder-img mr-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 32x32"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                  32x32
                </text>
              </svg>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
              </p>
            </div>

            <div class="media text-muted pt-3">
              <svg
                class="bd-placeholder-img mr-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 32x32"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                  32x32
                </text>
              </svg>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
