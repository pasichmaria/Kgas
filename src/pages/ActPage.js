import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Document, Tabs } from '../components'
import { acts } from '../data'
import { NotFoundPage } from './NotFoundPage'

export const ActPage = ({ user }) => {
  const { actNumber } = useParams()
  const act = acts.find((act) => act.actNumber === actNumber)
  if (!act) {
    return <NotFoundPage />
  }
  const tabs = [
    {
      label: 'Акт порушення',
      content: <Document act={act} />,
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


  const filteredTabs = tabs.filter((tab) => {
    if (tab.roles && tab.roles.length > 0) {
      return tab.roles.some((role) => user?.roles?.includes(role))
    }
    return true
  })

  const [activeTab, setActiveTab] = useState(
    filteredTabs.length > 0 ? filteredTabs[0].label : tabs[0].label
  )

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
    roles: PropTypes.array
  })
}