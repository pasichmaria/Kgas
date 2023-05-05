import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Document } from '../components'
import { acts } from '../data'
export const ActPage = ({ user }) => {
  const { actNumber } = useParams()
  const act = acts.find((act) => act.actNumber === actNumber)
  if (!act) {
    return <div>Документ не найден</div>
  }
  return (<main className='flex-1 bg-indigo-100'>
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='p-1.5 w-full inline-block align-middle mt-16'>
            <div className='overflow-hidden border rounded-lg'>
              <Document
                key={act.actNumber}
                actNumber={act.actNumber}
                removalAndRegistrationDate={act.removalAndRegistrationDate}
                violationType={act.violationType}
                actionStatus={act.actionStatus}
                meterSize={act.meterSize}
                department={act.department}
                city={act.city}
                region={act.region}
                house={act.house}
              ></Document>
            </div>
          </div>
        </div>
      </div>
    </main>)
}
ActPage.propTypes = {
  user: PropTypes.shape({
    email : PropTypes.string,
    password : PropTypes.string
  }),
}