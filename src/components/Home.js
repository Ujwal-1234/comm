import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import Graphs from './Graphs';
import MqttComponent from './MqttComponent';
import { fetchData, postData, updateData, deleteData, setAuthToken } from '../service/apiservice';
import { handleLogout } from './LogoutHelper';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import Frame from './Frame';
import Todo from '../pages/Todo';
import Notification from './Notification';

import Draggable from 'react-draggable';
import LiveStream from './LiveStream';
import ViewLiveStream from './ViewLiveStream';
import ViewRecordedStream from './ViewRecordedStream';

export default function Home() {
  
  return (
    <div className=' bg-white'>
      <div className="flex font-mono custom-scrollbar bg-[#05363D] overflow-auto h-screen">
          <div>
            <Draggable>
              <div>
                <Frame element={<Todo />} topic={"Activity List"} width={"w-auto"} height={"h-auto"} />
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable>
              <div>
                <Frame element={<Graphs />} topic={"Graph"} width={"w-auto"} height={"h-auto"} />
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable>
              <div>
                <Frame element={<Notification />} topic={"Notification"} width={"w-auto"} height={"h-auto"} />
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable>
              <div>
                <Frame element={<LiveStream />} topic={"Live Streaming"} width={"w-auto"} height={"h-auto"} />
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable>
              <div>
                <Frame element={<ViewRecordedStream />} topic={"Video Streaming"} width={"w-auto"} height={"h-auto"} />
              </div>
            </Draggable>
          </div>
          
          <div>
            <Draggable>
              <div>
                <Frame element={<ViewLiveStream />} topic={"Video Streaming"} width={"w-auto"} height={"h-auto"} />
              </div>
            </Draggable>
          </div>
      </div>
    </div>
  );
}
