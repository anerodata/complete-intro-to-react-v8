import React from "react"
import { createRoot } from "react-dom"
const tShirt = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, `${props.label} - ${props.color} - ${props.size}`),
  ])
}
const App = () => {
  return React.createElement(
    'div',
    {}, 
    [
      React.createElement('h1', {}, 'Adopt me!'),
      React.createElement(tShirt, {
        label: "Nike",
        color: "Grey",
        size: "Large"
      }),
      React.createElement(tShirt, {
        label: "Tribord",
        color: "Black",
        size: "Extra large"
      }),
      React.createElement(tShirt, {
        label: "Reebok",
        color: "Red",
        size: "Medium"
      })
    ]
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(React.createElement(App))
