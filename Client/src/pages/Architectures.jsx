import React, { useEffect, useState } from 'react';
import CardDetails from '../Component/CardDetails';
import Modal from '../Component/Modal';
import { getAllArchitectures } from '../action/engAndArc';

function Architectures() {
  const [architectures,setArchitectures] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllArchitectures()
        setArchitectures(data)
      } catch (error) {
        console.error('Error fetching engineers:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'auto', gap: '16px', paddingLeft:'60px' }}>
   {architectures.map((item) => (
          <CardDetails
            key={item._id}
            engineer={item}
           setArchitectures={setArchitectures}
          />
        ))}
      

    </div>
  );
}

export default Architectures;
