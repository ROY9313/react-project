import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div>
        <h2>Page not found</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dignissim lectus, eu bibendum elit condimentum congue.</p>

        <p>go to the <Link to="/">Homepage</Link> </p>
    </div>
  )
}


