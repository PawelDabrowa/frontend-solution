import React, { useEffect, useState } from 'react';
import { getData } from './apiService';

function App() {
  const [data, setData] = useState<any>({ bookings: null, users: null, parcs: null });
  const [error, setError] = useState<Error | null>(null);
// Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookings = await getData('bookings');
        const users = await getData('users');
        const parcs = await getData('parcs');

        // Update state with fetched data
        setData({ bookings, users, parcs });
      } catch (error: any) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    //Return API data on Frontend
    <div className="App">
      <h1>Backend Data From Database</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error.message}</p>
      ) : (
        <div>
          <h2>Bookings</h2>
          <pre>{JSON.stringify(data.bookings, null, 2)}</pre>
          
          <h2>Users</h2>
          <pre>{JSON.stringify(data.users, null, 2)}</pre>
          
          <h2>Parcs</h2>
          <pre>{JSON.stringify(data.parcs, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
