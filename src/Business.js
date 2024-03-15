import React from 'react';

function Business(props) {
    const biz = props.biz;
  return (
    <div className="Business-tile">
      <img src={biz.food} alt='' className='Food-tile'/>
      <h2>{biz.name}</h2>
      <div className="Details">
        <ul className='Location'>
          <li>{biz.address}</li>
          <li>{biz.city}</li>
          <li>{biz.state} {biz.zipcode}</li>
        </ul>
        <ul className='Rated'>
          <li><strong>{biz.category}</strong></li>
          <li><strong>{biz.rating} stars</strong></li>
          <li>{biz.reviews} Reviews</li>
        </ul>
      </div>
    </div>
  )
}

export default Business;