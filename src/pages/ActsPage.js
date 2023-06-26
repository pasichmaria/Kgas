import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button, Search } from '../components'
import { useGetActs } from '../hooks'

export const ActsPage = ({ user }) => {
  const navigate = useNavigate()
  const { perPage, setPerPage, searchValue, setSearchValue, currentPage, setCurrentPage, query } = useGetActs()

  if (query.isLoading) {
    return <div>Loading...</div>
  }
  if (query.error) {
    return <div>Error loading data</div>
  }
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const pageNumbers = Array.from({ length: Math.ceil(query.data.total / perPage) }, (_, i) => i + 1)
  const handleActsPerPageChange = (event) => {
    setPerPage(event.target.value)
    setCurrentPage(1)
  }
  const handleSearch = (searchTerm) => {
    setSearchValue(searchTerm)
    setCurrentPage(1)
  }
  const handlePreviousPage = () => {
    handlePageChange(currentPage - 1)
  }

  const handleNextPage = () => {
    handlePageChange(currentPage + 1)
  }

  return (
    <div className='m-16 max-w-full p-6 inline-block align-middle'>
      <div className='flex-row flex mb-4 '>
        <div className='flex-1 mr-9'>
          <Search onSearch={handleSearch} />
        </div>
        <div className='m-2 '>
          <label className='text-sm font-medium mb-1' htmlFor='actsPerPage'>
            Показувати на сторінці:
          </label>
          <select
            id='actsPerPage'
            name='actsPerPage'
            value={perPage}
            onChange={handleActsPerPageChange}
            className='mx-2 border rounded-md  px-4 focus:border-blue-500 focus:ring-blue-500'
          >
            <option value='12'>12</option>
            <option value='24'>24</option>
            <option value='36'>36</option>
          </select>
        </div>
        <Button
          type={'submit'}
          variant='success'
          onClick={() => {
            navigate ("/newAct")
          }}
        >
          Створити акт
        </Button>
      </div>
      <div className='flex-row justify-center flex mb-8'>
        <button
          className='mx-1 px-2 py-1 border rounded-md'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <div>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`mx-1 ${pageNumber === currentPage ? 'bg-blue-500 text-white' : ''} px-2 py-1 border rounded-md`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className='mx-1 px-2 py-1 border rounded-md'
          onClick={handleNextPage}
          disabled={currentPage === pageNumbers.length}
        >
          {'>'}
        </button>
      </div>
      <div className='border rounded-lg bg-gray-100'>
        <table className='min-w-full overflow-x-scroll divide-y divide-gray-200'>
          <thead className=' bg-gray-50'>
          <tr className=' border-b border-gray-500'>
            <th className='px-6 py-3 text-xs font-medium text-gray-700 uppercase'>
              Номер акту
            </th>
            <th className='px-6  text-xs font-medium text-gray-700 uppercase'>
              Дата, час усунення та реєстрації порушення
            </th>
            <th className='px-6  text-xs font-medium text-gray-700 uppercase'>
              Вид порушення
            </th>
            <th className='px-6  text-xs font-medium text-gray-700 uppercase'>
              Статус дій по порушенню
            </th>
            <th className='px-6  text-xs font-medium text-gray-700 uppercase'>
              Типорозмір лічильника
            </th>
            <th className='px-6  text-xs font-medium text-gray-700 uppercase'>
              Область , місто
            </th>
            <th className='px-6  text-xs font-medium text-gray-700 uppercase'>
              Відділення/дільниця
            </th>
            <th className='px-6  text-xs font-medium text-gray-700 uppercase'>
              Структурний підрозділ
            </th>
            <th className='px-6  text-xs font-medium    text-gray-700 uppercase'>
              Вид контрагента
            </th>
            <th className='px-6  text-xs  font-medium     text-gray-700 uppercase'>
              Споживач / не споживач
            </th>
          </tr>
          </thead>
          <tbody className=' divide-y divide-gray-400 overflow-y-scroll w-full'>
          {query.data && query.data.data.map((act) => (
            <tr key={act.id}>
              <td className='text-sm font-medium p-6'><Link to={`/act/${act.id}`}>{act.act_number}</Link></td>
              <td className='text-sm font-medium text-center'>{act.reg_date}</td>
              <td
                className='text-sm font-medium text-center'>{act.violation_type.violation_description + ' ' + act.violation_type.violation_name}</td>
              <td className='text-sm text-center font-medium'>{act.action_state.state}</td>
              <td className='text-sm text-center font-medium'>{act.counter_size.counter_size}</td>
              <td className='text-sm text-center font-medium'>{act.region.region_name + ' , ' + act.city.city_name}</td>
              <td className='text-sm text-center font-medium'>{act.department.department_name}</td>
              <td className='text-sm text-center font-medium'>{act.unit.unit_name}</td>
              <td className='text-sm text-center  font-medium'>{act.contractor_type.contractor_type_name}</td>
              {act.is_consumer == 1 ? <td className='text-sm text-center font-medium'>Споживач</td> :
                <td className='text-sm text-center font-medium'>Не споживач</td>}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}