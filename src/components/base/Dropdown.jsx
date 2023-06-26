import React from 'react'

import { ViolarionAct } from './ViolarionAct'

export const Dropdown = ({ documents, visible }) => (
  <div
    className={`absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg ${
      visible ? 'block' : 'hidden'
    }`}
  >
    {documents.map((doc) => (
      <ViolarionAct key={doc.id} name={doc.name} link={doc.link} />
    ))}
  </div>
)
