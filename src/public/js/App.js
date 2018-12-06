import React from "react"
import ReactDOM from "react-dom"

let App = () => (
  React.createElement("div", null, "Hello from react webpack loading nao")
)

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
)