import "./navbar.css";
import logo from "../../assets/all_Img/etcMetarial/logo.png";
const Navbar = () => {
  return (
    <div className="header">
      <nav className="nav-container  ">
        <input type="checkbox" name="" id="check" />
        <div className="lg:logo-container flex-1">
          <img
            width={300}
            height={300}
            src={logo}
            alt="logo"
             
          />
        </div>
        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ "--i": " .85s" }}>
                <a href="#">
                  Plan
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                {/* <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Roadmap</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Token</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">About Us</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div> */}
              </li>
              <li className="nav-link" style={{ "--i": " 1.1s" }}>
                <a href="#">
                  App
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                {/* <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Patient Records</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Add New Patient</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Search Patients</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div> */}
              </li>
              <li className="nav-link" style={{ "--i": "1.40s" }}>
                <a href="#">
                  Roadmap
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                {/* <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Lab Tests</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Test Results</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Add New Test</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div> */}
              </li>
              <li className="nav-link" style={{ "--i": "1.88s" }}>
                <a href="#">
                  Token
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                {/* <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Doctor Profiles</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Add New Doctor</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Search Doctors</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div> */}
              </li>
              <li className="nav-link" style={{ "--i": " 2.2s" }}>
                <a href="#">
                  About Us
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                {/* <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Generate Invoices</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Payment History</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Financial Reports</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div> */}
              </li>
              <li className="nav-link" style={{ "--i": "2.45s" }}>
                <a href="#">
                  App
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                {/* <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Manage Inventory</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Stock Status</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Order Supplies</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div> */}
              </li>
            </ul>
          </div>
          <div className="log-sign w-full   " style={{ "--i": "3.27s" }}>
            <button className="  rounded-full px-6 py-2 border font-light text-white border-gray-500">
              Start Trading  
            </button>

            <button className=" bg-gradient-to-tl to-[#31F6FC] from-[#0AA2C8]  rounded-full px-6 py-2  font-light text-white border-opacity-10">
              {" "}
              Contact 
            </button>
          </div>
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
