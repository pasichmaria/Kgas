import { TextField } from '@mui/material'

export const SearchActsDropdown  = ({ searchValue, setSearchValue })  => {
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchValue}
      onChange={handleSearchChange}
    />
  );
}