import React from 'react'
import PropTypes from 'prop-types'

export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className='border-b border-gray-200'>
      <nav className='flex' aria-label='Tabs'>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`${
              activeTab === tab.label
                ? 'bg-gray-100 border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } group relative min-w-0 flex-1 overflow-hidden bg-white py-4 text-sm font-medium text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            onClick={() => setActiveTab(tab.label)}
          >
            <span>{tab.label}</span>
            <span
              className={`${
                activeTab === tab.label ? 'bg-indigo-500' : 'bg-transparent'
              } absolute inset-x-0 bottom-0 h-0.5`}
              aria-hidden='true'
            />
          </button>
        ))}
      </nav>
      <div>
        {tabs.map(
          (tab) =>
            activeTab === tab.label && (
              <div key={tab.label}>{tab.content}</div>
            )
        )}
      </div>
    </div>
  )
}
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired
}
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}