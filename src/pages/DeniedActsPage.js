import React from 'react'

export const DeniedActsPage = () => {
  return (
    <div className='m-16 max-w-full p-6 inline-block align-middle'>
      <div className='flex-row flex mb-4 '>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Протерміновані акти
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Період
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
            >
              Дата
            </th>
          </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}
