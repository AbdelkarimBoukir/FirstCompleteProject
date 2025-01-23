import React, { useEffect, useState } from 'react'
import whey from '../images/wheyey.jpg';
import bcaa from '../images/bcaa.png';
import Glutamine from '../images/Glutamine.jpg';
import creatine from '../images/creatine.jpg';
import magenisium from '../images/magenisium.png'; 
import barProteine from '../images/barProteine.jpg';
import omega3 from '../images/omega3.png';
import preWorkout from '../images/preworkout.png';
import './Complement.css';
import { Link } from 'react-router-dom';

export const ListComplement=[
    {id:1,name:'Creatine',prix:'45$',source:creatine},
    {id:2,name:'Whey Proteine',prix:'70$',source:whey},
    {id:3,name:'Pre-Workout',prix:'30$',source:preWorkout},
    {id:4,name:'Omega-3',prix:'25$',source:omega3},
    {id:5,name:'Glotamine',prix:'20$',source:Glutamine},
    {id:6,name:'Proteine-bar',prix:'5$',source:barProteine},
    {id:7,name:'Magnesiume',prix:'25$',source:magenisium},
    {id:8,name:'BCAA',prix:'30$',source:bcaa}
]

function Complement() {

      const [filterUser,setfilterUser]=useState(ListComplement)
      const [inputValue,setInputValue]=useState('')

      useEffect(()=>{
        const filter=ListComplement.filter((users)=>
          users.name.toLowerCase().includes(inputValue)
        )
        setfilterUser(filter)
      },[inputValue])

      const handleChange=(e)=>{
          setInputValue(e.target.value)
      }
  return (
    <div className='Complement'>


      <div className='input_class' >
      <input type='text' id='search' name='search' placeholder='Search For Your Product.....' onInput={handleChange} />
      </div>
        <div className='all-product'>
          {filterUser.map((product)=>(
              <div key={product.id}  className='product'>
                      <div className='product-container'>
                            <img src={product.source} id='productImg'/>
                            <h1 className='product-name' >{product.name}</h1>
                            <h3 className='product-price'>{product.prix}</h3>
                            <button className='product-button' ><Link to={`/details/${product.id}`}>show more details</Link></button>
                      </div>
              </div>
            ))
          }
        </div>  
    </div>
  )
}

export default Complement
