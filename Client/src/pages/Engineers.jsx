import React, { useEffect, useState } from 'react'
import CardDetails from '../Component/CardDetails'
import Modal from '../Component/Modal'
import { getAllEngineers } from '../action/engineer'
import { Button } from '@mui/material'

function Engineers() {
  const [engineers, setEngineers] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEngineers()
        setEngineers(data)
      } catch (error) {
        console.error('Error fetching engineers:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 'auto',
          gap: '16px',
          paddingLeft: '60px',
        }}
      >
        {engineers.map((item) => (
          <CardDetails
            key={item._id}
            engineer={item}
           
          />
        ))}
      
      </div>
    </>
  )
}

export default Engineers
