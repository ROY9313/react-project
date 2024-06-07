import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About(){

    const [user, setUser] = useState('mario')


    if(!user){
        return <Navigate to='/' replace={true}/>
    }

    return(
        <div className="about">
            <h2>About Us</h2>
            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}