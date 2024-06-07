import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()

  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dignissim lectus, eu bibendum elit condimentum congue. Pellentesque consequat, dui at ultrices volutpat, eros est egestas nisi, eget ornare mauris elit eu ligula.</p>
        </div>
    </div>
  )
}


// loader function 
export const careerDetailsLoader = async ({params}) => {
    const { id } = params

    const res=await fetch('http://localhost:4000/careers/' + id)

    if (!res.ok) {
        throw Error('could not find that career')
    }
    return res.json()
}