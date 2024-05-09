import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <p>   </p>
      <p>   </p>
      <p>   </p>
      <p>   </p>
      <h3>Explore Our New Kicks</h3>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}/>
        })}
      </div>
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default Popular
