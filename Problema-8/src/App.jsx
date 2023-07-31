import React, { useState } from 'react';

function App() {
  const [columns, setColumns] = useState(0);

  const columnsRender = () => {
    const columnRender = [];
    for (let i = 0; i < columns; i++) {
      columnRender.push(
        <div className='col-sm-3 mb-4' key={i}>
          <div className="card">
            <img src="https://placekitten.com/g/200/300" alt="" />
          </div>
        </div>
      );
    }
    return columnRender;
  };

  return (
    <div className='container'>
      <div className='d-flex flex-column mt-4'>
        <span className='text-secondary'>Numero de columnas: </span>
        <input
          className="form-control"
          type='number'
          min="0"
          max="15"
          onChange={e => setColumns(e.target.value > 15 ? "15" : e.target.value )}
        />
        <div className='row g-4 mt-4'>
          {columns > 0 && columnsRender()}
        </div>
      </div>
    </div>
  );
}

export default App;

