import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Document, Tabs } from '../components'
import { acts } from '../data'
import { NotFoundPage } from './NotFoundPage'

export const ActPage = ({ user }) => {
user.role === 'admin' ? console.log('admin') : console.log('user')

  const { actNumber } = useParams()
  const [act] = useState(acts.find((act) => act.actNumber === actNumber))

  if (!act) {
    return <NotFoundPage />
  }
  const tabs = [
    {
      label: 'Акт порушення',
      content: <Document act={act} />
    },
    {
      label: 'Лабораторія з повірки ПЛГ',
      content: <h1>Лаб</h1>
    },
    {
      label: 'Комісія з розгляду актів про порушення',
      content:<h1>Комісія</h1>
    },
    {
      label: 'Нарахування та оплати на рахунок АТ "Експертизи"',
      content:<h1>Оплати</h1>
    },
    {
      label: 'Погодження рохрахунків по метрології та ВЕБ',
      content: <h1>Погодження</h1>
    },
    {
      label: 'Юридичне супроводження порушень',
      content:<h1>Юридичне супроводження</h1>
    }
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].label)
  return (
    <main className='flex-1 bg-indigo-100'>
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='w-full inline-block align-middle'>
            <div className='overflow-hidden border rounded-lg'>
              <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
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
    password: PropTypes.string
  })
}