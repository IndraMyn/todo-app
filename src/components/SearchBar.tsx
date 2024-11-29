interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="border p-2 rounded w-full text-black"
      />
    </div>
  );
};

export default SearchBar;
