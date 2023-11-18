import React from "react";
import ReactDOM from "react-dom/client";
import style from './main.css'

const App = (
  <div>
    <h1 className={style.h1}>Hello World</h1>
    <h2 className="h2">Hello Webpack</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
