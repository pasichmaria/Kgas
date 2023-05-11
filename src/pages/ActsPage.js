import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Button, Search } from '../components'
import { acts } from '../data/acts'

export const ActsPage = ({ user }) => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [actsPerPage, setActsPerPage] = useState(24)
  const [filteredActs, setFilteredActs] = useState([])

  const indexOfLastAct = currentPage * actsPerPage
  const indexOfFirstAct = indexOfLastAct - actsPerPage
  const currentActs = acts.slice(indexOfFirstAct, indexOfLastAct)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(acts.length / actsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const handleActsPerPageChange = (event) => {
    setActsPerPage(event.target.value)
    setCurrentPage(1)
  }
  const handleSearch = (searchTerm) => {
    const filtered = acts.filter((act) =>
      act.actNumber.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredActs(filtered)
  }

  return (
    <>
      <div className="m-16 max-w-full p-6 inline-block align-middle">
        <div className="flex-row flex mb-4 ">
          <div className="flex-1 mr-9">
            <Search onSearch={handleSearch} />
          </div>
          <div className="m-2 ">
            <label className="text-sm font-medium mb-1" htmlFor="actsPerPage">
              Показувати на сторінці:
            </label>
            <select
              id="actsPerPage"
              name="actsPerPage"
              value={actsPerPage}
              onChange={handleActsPerPageChange}
              className="mx-2 border rounded-md  px-4 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
          </div>
          <Button size={'sm'} variant={'primary'} onClick={() => navigate('/newAct')}>
            Новий акт
          </Button>
        </div>
        <div className="flex-row justify-center flex mb-8">
          <button
            className="mx-1 px-2 py-1 border rounded-md"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
          <div>
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`mx-1 ${
                  pageNumber === currentPage ? 'bg-blue-500 text-white' : ''
                } px-2 py-1 border rounded-md`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <button
            className="mx-1 px-2 py-1 border rounded-md"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(acts.length / actsPerPage)}
          >
            {'>'}
          </button>
        </div>
        <div className="border rounded-lg bg-gray-100">
          <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
            <thead className="py-2 bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Номер акту
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Дата, час усунення та реєстрації порушення
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Відділення/дільниця
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Вид порушення
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Статус дій по порушенню
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Типорозмір лічильника
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Область
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Місто
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Адреса, буд.
                </th>
                <th className="px-6 py-3 text-xs font-medium  tracking-wider text-left  text-gray-700 uppercase">
                  Квартира
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400 overflow-y-scroll w-full ">
              {(filteredActs.length > 0 ? filteredActs : currentActs).map((act) => (
                <tr key={act.actNumber}>
                  <td className="text-sm font-medium p-6">
                    <a href={`/acts/${act.actNumber}`}>{act.actNumber}</a>
                  </td>
                  <td className="text-sm font-medium">{act.removalAndRegistrationDate}</td>
                  <td className="text-sm font-medium">{act.violationType}</td>
                  <td className="text-sm font-medium">{act.actionStatus}</td>
                  <td className="text-sm font-medium">{act.department}</td>
                  <td className="text-sm font-medium text-center">{act.meterSize}</td>
                  <td className="text-sm font-medium">{act.region}</td>
                  <td className="text-sm font-medium">{act.city}</td>
                  <td className="text-sm font-light">{act.house}</td>
                  <td className="text-sm font-light text-center">{act.apartment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

ActsPage.propTypes = {
  user: PropTypes.shape({
    email : PropTypes.string,
    password : PropTypes.string
  }),
}
