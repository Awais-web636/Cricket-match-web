import React from 'react';

const Card = ({ match, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={onClick}>
      <h3 className="text-lg font-semibold">Name: {match.name}</h3>
      <p className="text-gray-800">Data: {match.date}</p>
      <p className="text-gray-600">Status: {match.status}</p>

    </div>
  );
};

export default Card;