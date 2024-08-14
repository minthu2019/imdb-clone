// import Results from '@/components/Results';

// const API_KEY = process.env.API_KEY;

// export default async function Home({ searchParams }) {
//   const genre = searchParams.genre || 'fetchTrending';
//   const res = await fetch(
//     `https://api.themoviedb.org/3${
//       genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
//     }?api_key=${API_KEY}&language=en-US&page=1`,
//     { next: { revalidate: 10000 } }
//   );

//   const data = await res.json();
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const results = data.results;
//   return (
//     <div>
//       <Results results={results} />
//     </div>
//   );
// }
'use client'
import Results from '../../components/Results';
import { useState, useEffect } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home({ searchParams }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genre = searchParams.genre || 'fetchTrending';
        const url = `https://api.themoviedb.org/3${
          genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
        }?api_key=${API_KEY}&language=en-US&page=1`;

        console.log("Fetching data from URL:", url);  // Log URL for debugging

        const res = await fetch(url);

        console.log("Response status:", res.status);
        console.log("Response status text:", res.statusText);
        console.log("Response headers:", [...res.headers]);

        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Response data:", data);  // Log response data for debugging
        setResults(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
