import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from 'micro_frontend_login/Header';
import Footer from 'micro_frontend_login/Footer';

const App = () => (
  <>
  <Header title={"Product page"}/>
  <div className=" bg-gray-300 mt-10 text-3xl mx-auto max-w-6xl">
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    Content
  </div>
  </div>
    <Footer title={"Product page"}/>
  </>

);
ReactDOM.render(<App />, document.getElementById("app"));
