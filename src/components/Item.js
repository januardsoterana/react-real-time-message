import React from 'react'

export default function Item(props) {
  const {item} = props
  return (
    <div className='item'>
        <p>{item.title} : {item.timestamp}</p>
    </div>
  )
}
