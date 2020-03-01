import React from "react";
import API from "../../util/api";
import Table from "../../components/restaurant/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faPercentage,
  faChartLine,
  faChair,
  faFileInvoice,
  faTag
} from "@fortawesome/free-solid-svg-icons";

const Restaurant = props => {
  const handleLogout = () => {
    API.post("logout").then(res => {
      props.history.push("/login");
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
        <nav className="nav nav-underline">
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </nav>
      </nav>

      <div className="row">
        <div className="col-xs-12 col-md-3">
          <div className="my-3 p-3 bg-white rounded shadow-sm">
            <ul class="nav flex-column nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <FontAwesomeIcon icon={faTag} /> Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faFileInvoice} /> Reservations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faChair} /> Tables
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faUtensils} /> Menu and Food
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faPercentage} /> Discounts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faChartLine} /> Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-md-9">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Tables</h6>

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

          <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Served</h6>
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
