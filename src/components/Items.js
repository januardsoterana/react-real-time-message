import React, { useEffect, useState } from 'react'
import Item from './Item'
import { io } from 'socket.io-client'

export default function Items() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const socket = io('ws://localhost:8000')

    socket.on('connnection', () => {
      console.log('connected to server');
    })

    socket.on('items-added', (data) => {
      if (data && data.length) {
        setItems(data);
      }
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnecting');
    })

  }, [])
  
  return (
    <div className='items-list'>
      {items && items.map(item => {
        return <div key={item.title}> <Item item={item}/> </div>
      })}
    </div>
  )
}
