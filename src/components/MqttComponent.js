import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const MqttConnection = () => {
  const hostname = "techpradnya.xyz"
  const port = 8083
  const username = "techpradnya"
  const password = "techpradnya"
  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState('Disconnected');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const mqttOptions = {
      port: port || 9001, // Default WebSocket port
      username: username,
      password: password,
      protocol: 'ws', // Use 'wss' for secure WebSocket connections
    };

    const mqttClient = mqtt.connect(`ws://${hostname}:${port}`, mqttOptions);
    setClient(mqttClient);

    mqttClient.on('connect', () => {
      setConnectStatus('Connected');
      console.log('Connected to MQTT broker');

      // Example subscription
      mqttClient.subscribe('test/topic', (err) => {
        if (err) {
          console.error('Subscribe error:', err);
        }
      });
    });

    mqttClient.on('message', (topic, message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { topic, message: message.toString() },
      ]);
    });

    mqttClient.on('error', (err) => {
      console.error('Connection error:', err);
      setConnectStatus('Disconnected');
      mqttClient.end();
    });

    mqttClient.on('reconnect', () => {
      setConnectStatus('Reconnecting');
    });

    return () => {
      mqttClient.end();
    };
  }, [hostname, port, username, password]);

  return (
    <div>
      <h1>MQTT Connection</h1>
      <p>Status: {connectStatus}</p>
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>Topic:</strong> {msg.topic} <br />
              <strong>Message:</strong> {msg.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MqttConnection;
