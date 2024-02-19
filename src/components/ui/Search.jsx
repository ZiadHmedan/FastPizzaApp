import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <>
      <form>
        <input
          placeholder="Search order #"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </>
  );
}
