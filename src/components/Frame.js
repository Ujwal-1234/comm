// components/Frame.js

import React, { useRef, useState } from 'react';
import { FiMinimize2 } from 'react-icons/fi';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { CgMaximizeAlt } from 'react-icons/cg';
import Draggable from 'react-draggable';

export default function Frame({ element, topic, width, height }) {
  const [wid, setWid] = useState(width); // Initial width
  const [heig, setHeig] = useState(height); // Initial height
  const nodeRef = useRef(null); // Create a ref for the draggable node

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        <div className="bg-slate-600 flex justify-between text-white p-2">
          <span className=" sticky top-0">{(topic).substring(0, 8)}...</span>
          <ul className="w-24 flex justify-between p-1">
            <li onClick={() => { setHeig('h-10'); }} className="cursor-pointer">
              <FaRegWindowMinimize />
            </li>
            <li onClick={() => { setWid('w-64'); setHeig('h-55'); }} className="cursor-pointer">
              <FiMinimize2 />
            </li>
            <li onClick={() => { setWid('w-96'); setHeig('h-96'); }} className="cursor-pointer">
              <FaRegWindowMaximize />
            </li>
            <li onClick={() => { setWid('w-screen'); setHeig('h-screen'); }} className="cursor-pointer">
              <CgMaximizeAlt />
            </li>
          </ul>
        </div>
        <div className={`border border-white ${wid} ${heig} m-2 overflow-hidden`}>
          {element}
          {/* Render the passed element */}
        </div>
      </div>
    </Draggable>
  );
}
