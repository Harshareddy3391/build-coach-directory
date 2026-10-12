
import { useState, useEffect } from 'react';
import  List_data from './componets_data/c_list';
import Coach_data from './componets_data/c_detail';
import './App.css';









function App() {
  const [coaches, setCoaches] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchCoaches() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Failed to load coaches');
        }

        const data = await response.json();
        setCoaches(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCoaches();
  }, []);

  const filteredCoaches = coaches.filter((coach) =>
    coach.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Coach directory details</h1>

      <input
        type="text"
        placeholder="search coaches by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>loading coaches...</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : filteredCoaches.length === 0 ? (
        <p>no data.</p>
      ) : (
        <List_data
          coaches={filteredCoaches}
          onSelectCoach={setSelectedCoach}
        />
      )}

      <Coach_data
        coach={selectedCoach}
        onClose={() => setSelectedCoach(null)}
      />
    </div>
  );
}

export default App;
