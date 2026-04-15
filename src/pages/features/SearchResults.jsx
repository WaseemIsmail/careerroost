import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!value.trim()) return;
    navigate(`/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search companies..."
        className="flex-1 border rounded-xl px-4 py-2"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 rounded-xl"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;