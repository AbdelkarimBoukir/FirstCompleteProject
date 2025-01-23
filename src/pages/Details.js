import React from 'react'
import { useParams } from 'react-router-dom'
import './Details.css';


function Details({ListComplement}) {

    const {id}=useParams()
    const ShowProduct=ListComplement.find((item)=>item.id===parseInt(id))
  return (
    <div className='DetailsContainer'>
      <img src={ShowProduct.source} alt={ShowProduct.name} id='DImage'/>
      <h1 className="DName"> {ShowProduct.name} </h1>
      <h3 className="DPrix"> {ShowProduct.prix} </h3>
      <p>Description: This is a great product for your needs!</p>
    </div>
  )
}

export default Details
