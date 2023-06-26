import React from 'react';
import { useQuery } from 'react-query';

export const SearchS = ({ searchTerm, searchId, searchData }) => {
  const { data: searchResults, isLoading, isError } = useQuery(['search', searchTerm, searchId], () =>
    searchData({ search_term: searchTerm, search_id: searchId })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      <select name="searchResult" value={searchId} onChange={handleSearchIdChange}>
        {searchResults.map((result) => (
          <option key={result.id} value={result.id}>
            {result.name}
          </option>
        ))}
      </select>
    </div>
  );
};
