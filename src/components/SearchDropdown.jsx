import Input from "./base/Input";
import React from "react";
import {useState} from "react";
import {Document} from "./base/Document";
const documents = [

    // link : `/document/${id}`

    { id: 1, name: "Акт 1", link: "/document-1" },
    { id: 2, name: "Акт 2", link: "/document-2" },
    { id: 3, name: "Акт 3", link: "/document-3" },
    { id: 4, name: "Акт 4", link: "/document-4" },
    { id: 5, name: "Акт 5", link: "/document-5" },
    { id: 6, name: "Акт 6", link: "/document-6" },
    { id: 7, name: "Акт 7", link: "/document-7" },
    { id: 8, name: "Акт 8", link: "/document-8" },
];
export const SearchDropdown = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false)

    const Dropdown = ({ documents }) => (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg">
            {documents.map((doc) => (
                <Document key={doc.id} name={doc.name} link={doc.link} />
            ))}
        </div>
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setDropdownVisible(true);
    };

    const filteredDocuments = documents.filter((document) =>
        document.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative">
            <Input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
            />
            {dropdownVisible && (
                <Dropdown documents={filteredDocuments}/>
            )}
        </div>
    );
};