import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Label, Input, Document } from './base/'
export const SearchDropdown = ({ acts }) => {
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    setSelectedDocument(acts.find((act) => act.actNumber.toLowerCase() === value.toLowerCase()))
  }

  return (
    <div>
      <Label className="block font-medium text-gray-500">Виберіть документ</Label>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        list="documents"
      />
      <datalist id="documents">
        {acts.map((act) => (
          <option key={act.actNumber} value={act.actNumber} />
        ))}
      </datalist>
      <div className="mt-4">
        {selectedDocument && (
          <Document
            key={acts.actNumber}
            actNumber={acts.actNumber}
            date={acts.date}
            department={acts.department}
            violationType={acts.violationType}
            status={acts.status}
            meterType={acts.meterType}
            region={acts.region}
            city={acts.city}
          ></Document>
        )}
      </div>
      <Input
        rounded="lg"
        size="lg"
        type="hidden"
        name="documentLink"
        value={selectedDocument?.link || ''}
      />
    </div>
  )
}
SearchDropdown.PropTypes = {
  acts: PropTypes.array
}
