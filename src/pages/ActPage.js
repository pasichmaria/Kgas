import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Document, Tabs } from '../components'
import { useGetAct } from '../hooks'

export const ActPage = ({ user }) => {
  const { act_number } = useParams()

  const { data , isLoading, error } = useGetAct({act_number})
  const tabs = [
    {
      label: 'Акт порушення',
      content: <Document act={data} />,
      roles: []
    },
    {
      label: 'Лабораторія з повірки ПЛГ',
      content: <h1>Лаб</h1>,
      roles: ['lab', 'admin']
    },
    {
      label: 'Комісія з розгляду актів про порушення',
      content: <h1>Комісія</h1>,
      roles: ['komisiya', 'admin']
    },
    {
      label: 'Нарахування та оплати на рахунок АТ "Експертизи"',
      content: <h1>Оплати</h1>,
      roles: ['ekspert', 'admin']
    },
    {
      label: 'Погодження рохрахунків по метрології та ВЕБ',
      content: <h1>Погодження</h1>,
      roles: ['pogodzenya', 'admin']
    },
    {
      label: 'Юридичне супроводження порушень',
      content: <h1>Юридичне супроводження</h1>,
      roles: ['yur', 'admin']
    }
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].label)
  const filteredTabs = tabs.filter((tab) => {
    if (tab.roles && tab.roles.length > 0) {
      return tab.roles.some((role) => user?.roles?.includes(role))
    }
    return true
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error loading data</div>
  }
  return (
    <main className='flex-1 bg-indigo-50'>
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='w-full inline-block align-middle'>
            <div className='overflow-hidden border rounded-lg'>
              <Tabs tabs={filteredTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

ActPage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired
}