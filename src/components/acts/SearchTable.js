import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../theme/theme';
import { MdClear, MdSearch } from 'react-icons/md';
import { Button } from '@mui/material/';

export default function SearchAppBar({ searchValue, setSearchValue }) {
  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <Search>
      <SearchIconWrapper>
        <MdSearch />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Знайти акт…"
        inputProps={{ 'aria-label': 'search' }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleClearSearch}
          className="clear-button"
        >
          <MdClear />
        </Button>
      )}
    </Search>
  );
}
