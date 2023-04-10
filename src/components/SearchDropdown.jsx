import React, {useState} from "react";
import {Document} from "./base";
import Label from "./base/Label";
import {Input} from "./base/Input";

export const SearchDropdown = ({documents}) => {
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleDocumentChange = (doc) => {
        setSelectedDocument(doc);
        setSearchTerm(doc.name);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setSelectedDocument(
            documents.find((doc) => doc.name.toLowerCase() === value.toLowerCase())
        );
    };

    return (
        <div>
            <Label className="block font-medium text-gray-500">
                Виберіть документ
            </Label>
            <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                list="documents"
            />
            <datalist id="documents">
                {documents.map((doc) => (
                    <option key={doc.id} value={doc.name}/>
                ))}
            </datalist>
            <div className="mt-4">
                {selectedDocument && (
                    <Document
                        name={selectedDocument.name}
                        link={selectedDocument.link}
                        className="mt-2"
                    />
                )}
            </div>
            <Input
                rounded="lg"
                size="lg"
                type="hidden"
                name="documentLink"
                value={selectedDocument?.link || ""}/>
        </div>
    );
}