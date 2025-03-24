import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import { LASTFM_API_KEY} from "./Config";


const Home = () => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=${LASTFM_API_KEY}&format=json`);
    const data = await res.json();
    console.log(data.results);
  };

  return (
    <>
      <h1>Search for Albums</h1>
      <SearchBar value={query} onChange={(value) => {
        setQuery(value);
}}
 onSubmit={handleSearch} />
    </>
  );
};


export default Home