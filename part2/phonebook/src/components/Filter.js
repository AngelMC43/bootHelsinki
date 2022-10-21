export default function Filter({ newSearch, handleSearch }) {
  return (
    <>
      <div>
        Filter shown with
        <input type="search" onChange={handleSearch} value={newSearch} />
      </div>
    </>
  );
}
