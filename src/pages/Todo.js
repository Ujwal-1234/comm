import React, { useState } from 'react';
import Plan from './Plan';
export default function Todo() {
  // Using useState for managing state
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Handle adding new items
  const handleAdd = () => {
    if (text !== "") {
      setItems([...items, text]);
      setText("");
    }
  };

  // Handle deleting items
  const handleDelete = (id) => {
    const newItems = items.filter((_, i) => i !== id);
    setItems(newItems);
  };

  return (
    <div className=' text-slate-200 p-2'>
      <div className=''>
        <div className=''>
          <h2 className=' '>Create List</h2>
          <div className=''>
            <div className=' mb-2'>
              <input
                type="text"
                className=' w-full p-2 rounded-lg bg-inherit border border-white'
                placeholder='Activity Title'
                value={text}
                onChange={handleChange}
              />
            </div>
            <div className=''>
              <button className=' border shadow-inner w-full hover:bg-slate-500 shadow-white border-white text-slate-200 p-2 rounded-lg' onClick={handleAdd}>
                + ADD
              </button>
            </div>
            <div className=''>
              <ul className=''>
                {items.map((value, i) => (
                  <Plan key={i} id={i} value={value} sendData={handleDelete} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
