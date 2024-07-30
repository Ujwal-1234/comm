import React from 'react';
import { Rnd } from 'react-rnd';

const DraggableResizableComponent = () => {
  return (
    <div>
      <Rnd
        default={{
          x: 100,
          y: 100,
          width: 200,
          height: 200,
        }}
        minWidth={100}
        minHeight={100}
        bounds="parent"
        style={{ border: '1px solid black', background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        Draggable and Resizable
      </Rnd>
      <Rnd
        default={{
          x: 350,
          y: 100,
          width: 300,
          height: 300,
        }}
        minWidth={150}
        minHeight={150}
        bounds="parent"
        style={{ border: '1px solid black', background: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        Another Component
      </Rnd>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#f0f0f0' }}>
      <DraggableResizableComponent />
    </div>
  );
};

export default App;
