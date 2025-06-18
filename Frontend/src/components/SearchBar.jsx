const SearchBar = ({ search, setSearch }) => (
    <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search by name..."
        className="w-full mb-6 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200"
    />
);

export default SearchBar;
