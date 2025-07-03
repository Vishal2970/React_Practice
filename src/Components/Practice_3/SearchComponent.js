import React, { useState, useEffect } from "react";
import useDebouncedValue from "./useDebouncedValue";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching data for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <input type="text" placeholder="Search..."  value={query}  onChange={(e) => setQuery(e.target.value)} />
  );
}
export default SearchComponent;