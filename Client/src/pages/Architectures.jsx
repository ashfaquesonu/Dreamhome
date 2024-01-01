import React from 'react';
import CardDetails from '../Component/CardDetails';
import Modal from '../Component/Modal';

function Architectures() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'auto', gap: '16px', paddingLeft:'60px' }}>
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <Modal/>

    </div>
  );
}

export default Architectures;
