import { BackButton, Document } from '../components'
import React from 'react'
import { acts } from '../data'
import { useParams } from 'react-router-dom'

export const ActPage = ({ user }) => {
  const { actNumber } = useParams()

  // Фильтруем массив acts по номеру акта
  const act = acts.find((act) => act.actNumber === actNumber)

  if (!act) {
    return <div>Документ не найден</div>
  }

  return (
    <main className="flex-1 bg-indigo-100">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle mt-16">
            <div className="overflow-hidden border rounded-lg">
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
    </main>
  )
}
