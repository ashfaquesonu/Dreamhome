import React from 'react';
import CardDetails from '../Component/CardDetails';

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
    </div>
  );
}

export default Architectures;
