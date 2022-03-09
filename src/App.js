import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [nameList, setNameList] = useState([]);
  const [name, setName] = useState('');

  const addNameToList = (name) => {
    const currentNameList = [...nameList];
    currentNameList.push(name);
    setNameList(currentNameList);
    setName('');
  };

  const deleteName = (index) => {
    const currentNameList = [...nameList];
    currentNameList.splice(index, 1);
    setNameList(currentNameList);
  };

  return (
    <div>
      <input
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button
        onClick={() => {
          addNameToList(name);
        }}
      >
        Add
      </button>
      <div>
        {nameList &&
          nameList.map((username, i) => {
            return (
              <div key={i}>
                {username}
                <button
                  onClick={() => {
                    deleteName(i);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
