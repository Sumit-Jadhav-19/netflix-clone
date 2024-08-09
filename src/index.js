import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NetflixHeader from "./components/NetflixHeader";
import NetflixMain from "./components/NetflixMain";
import NetflixRegister from "./components/NetflixRegister";
import NetflixSecond from "./components/NetflixSecond";
import NetflixThirdSection from "./components/NetflixThirdSection";
import NetflixFourth from "./components/NetflixFourth";
import NetflixFifth from "./components/NetflixFifth";
import NetflixFAQ from "./components/NetflixFAQ";
import Netflixfooter from "./components/Netflixfooter.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container-fluid netMain">
      <div className="backDiv"></div>
      <div className="container pt-4">
        <header>
          <NetflixHeader />
        </header>
        <section>
          <main className="h-83vh d-flex justify-content-center align-items-center flex-column gap-2">
            <NetflixMain />
            <NetflixRegister />
          </main>
        </section>
      </div>
    </div>
    <section>
      <NetflixSecond />
    </section>
    <section>
      <NetflixThirdSection />
    </section>
    <section>
      <NetflixFourth/>
    </section>
    <section>
      <NetflixFifth/>
    </section>
    <section>
      <NetflixFAQ/>
    </section>
    <footer>
      <Netflixfooter/>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
