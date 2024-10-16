import React, { useEffect, useState } from 'react';
import { getData } from './apiService';

const ApiDataComponent: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      //Fetch data from endpoints
      const endpoints = ['bookings', 'users', 'parcs'];
      try {
        const results = await Promise.all(endpoints.map(endpoint => getData(endpoint)));
        const combinedData = {
          bookings: results[0],
          users: results[1],
          parcs: results[2],
        };
        setData(combinedData);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    //Display data or error
    <div>
      <h1>Backend Data</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
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
};

export default ApiDataComponent;
