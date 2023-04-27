import React from 'react'

export const Document = (props) => {
  const {
    actNumber,
    removalAndRegistrationDate,
    violationType,
    actionStatus,
    department,
    meterSize,
    region,
    city,
    house
  } = props

  return (
    <div>
      <h2 className="text-4xl text-center font-light m-4">Акт № {actNumber}</h2>
      <div className="p-20 grid grid-cols-2 gap-10">
        <div>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium">Дата та час реєстрації порушення:</p>
            <p className="text-lg font-medium">{removalAndRegistrationDate}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium">Відділення/дільниця:</p>
            <p className="text-lg">{department}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium">Вид порушення:</p>
            <p className="text-lg">{violationType}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium">Статус дій по порушенню:</p>
            <p className="text-lg">{actionStatus}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium">Типорозмір лічильника:</p>
            <p className="text-lg">{meterSize}</p>
          </div>
        </div>
        <div className="ml-16 grid grid-cols-2 gap-10">
          <div className="flex flex-col justify-between mb-4">
            <p className="text-lg font-medium">Область:</p>
            <p className="text-lg">{region}</p>
          </div>
          <div className="flex flex-col justify-between mb-4">
            <p className="text-lg font-medium">Місто:</p>
            <p className="text-lg">{city}</p>
          </div>
          <div className="flex flex-col justify-between mb-4">
            <p className="text-lg font-medium">Адреса:</p>
            <p className="text-lg">{house}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
