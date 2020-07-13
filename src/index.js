// import React from "react";
// import ReactDOM from "react-dom";
// import Routes from "@/routes/Routes";
// import "./global.less";

// ReactDOM.render(
//   <React.StrictMode>
//     <Routes />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import dva from "dva";
const createHistory = require("history").createHashHistory;

//1.Initialize
const app = dva({
  history: createHistory(),
});

//2.Plugins
//app.use({});

//3.Model
app.model(require('./pages/DutyAdmin/model').default);

//4.Router
app.router(require("./routes/Routes").default);

//5.Start
app.start("#root");
