import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom app !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   // Children: ' Click me to visit google'
// };

const anotherUser = "chai aur react"

const AnotherUser = "roy"

// const AnotherElement = (

//   <a href='https://google.com' target='_blank'>Visit google</a>
// )

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser,
  AnotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)

