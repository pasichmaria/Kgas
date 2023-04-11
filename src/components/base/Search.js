import {useState} from "react";
export const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value)
    };
    return (
        <div className="w-full flex justify-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Знайти акт..."
                />
            </div>
    );
};
