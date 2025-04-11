import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Details from './Components/Details';
import Card from './Components/Card';

const App = () => {
  const [matches, setMatches] = useState([]); // Array to hold multiple matches
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null); // State to hold the selected match

  // Function to fetch commentary
  const fetchCommentary = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await axios.get('https://api.cricapi.com/v1/currentMatches?apikey=b30c6b19-cdca-4352-833f-3ce4a718ff40&offset=0');

      console.log(response.data);

      // Assuming the actual matches are inside response.data.data
      if (response.data && Array.isArray(response.data.data)) {
        setMatches(response.data.data); // Set the matches if they are in the expected structure
      } else {
        throw new Error('Matches data is not in the expected format');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommentary(); // Fetch data on component mount
  }, []);

  const handleCardClick = (match) => {
    setSelectedMatch(match); // Set the selected match when a card is clicked
  };

  const handleBack = () => {
    setSelectedMatch(null); // Reset the selected match to null to go back to the list
  };

  const handleReload = () => {
    fetchCommentary(); // Fetch updated data when the reload button is clicked
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Live Matches</h2>
      <button
        onClick={handleReload}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
      >
        Reload Matches
      </button>
      {selectedMatch ? (
        <Details match={selectedMatch} onBack={handleBack} /> // Show details if a match is selected
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <Card key={index} match={match} onClick={() => handleCardClick(match)} />
            ))
          ) : (
            <p>No matches available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;