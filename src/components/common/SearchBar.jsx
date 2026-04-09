function SearchBar({ value, onChange, placeholder = "Search companies..." }) {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-transparent"
      />
    </div>
  );
}

export default SearchBar;