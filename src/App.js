import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [nameList, setNameList] = useState([]);
  const [name, setName] = useState('');

  const addNameToList = (name) => {
    console.log('addNameToList');
    const currentNameList = [...nameList];
    const newNameList = currentNameList.push(name);
    console.log(newNameList);
    // setNameList(newNameList);
    // setName("");
  };

  return (
    <div>
      <input
        name="name"
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
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
          nameList.map((username) => {
            return <div>{username}</div>;
          })}
      </div>
    </div>
  );
}
