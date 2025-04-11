import React from 'react';

const Details = ({ match, onBack }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <button className="mb-4 text-blue-500 cursor-pointer" onClick={onBack}>
        Back to Matches
      </button>
      <h3 className="text-xl font-semibold">{match.seriesName}</h3>
      <p className="text-gray-800">Date: {match.date}</p>
      <p className="text-gray-800">Status: {match.status}</p>
      <p className="text-gray-800">Status: {match.matchType}</p>
      <p className="text-gray-800">Score: {match.score[0].r}</p>
    </div>
  );
};

export default Details;