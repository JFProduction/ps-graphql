import React from "react"
import ReactDOM from "react-dom"

let App = () => (
  React.createElement("div", null, "Hello from react")
)

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
)