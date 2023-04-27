import React, { useState } from 'react'
import { Button, Select } from '../components'
import { actionStatus, meterSizes, violationTypes, department } from '../data'
import { Label, Input } from '../components/'
import { axios } from '../API'
import { useNavigate } from 'react-router-dom'

export const NewActPage = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    actNumber: '',
    removalAndRegistrationDate: '',
    violationType: '',
    actionStatus: '',
    meterSize: '',
    department: '',
    region: '',
    city: '',
    house: '',
    apartment: ''
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCredentials((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const isFormValid = Object.values(credentials).every((value) => value)

  const handleFormSubmit = (event) => {
    event.preventDefault(event)
    if (isFormValid) {
      axios.post('https://jsonplaceholder.typicode.com/posts', credentials).then((response) => {
        console.log(response.data)
        navigate('/acts')
      })
    }
  }
  return (
    <>
      <h2 className={'text-5xl font-light text-center mt-6'}>Реєстрація актів порушення</h2>
      <form className="grid grid-cols-2 gap-4 p-9" onSubmit={handleFormSubmit}>
        <div className="col-span-1">
          <Label htmlFor="actNumber" className="block font-bold px-4">
            Номер акту порушення
          </Label>
          <Input
            validate
            type="number"
            name="actNumber"
            id="actNumber"
            className="w-full border rounded py-2 px-3"
            value={credentials.actNumber}
            onChange={handleInputChange}
          />
          <Label htmlFor="removalAndRegistrationDate" className="block font-bold px-4">
            Дата та час усунення, реєстрації порушення
          </Label>
          <Input
            type="datetime-local"
            name="removalAndRegistrationDate"
            id="removalAndRegistrationDate"
            className="w-full border rounded py-2 px-3"
            value={credentials.removalAndRegistrationDate}
            onChange={handleInputChange}
          />

          <Label htmlFor="department" className="block font-bold px-4">
            Відділення/дільниця
          </Label>
          <Select
            name="department"
            value={credentials.department}
            onChange={handleInputChange}
            options={department}
          />

          <Label htmlFor="violationType" className="block font-bold px-4">
            Вид порушення
          </Label>
          <Select
            className="w-full border rounded py-2 px-3"
            name="violationType"
            value={credentials.violationType}
            onChange={handleInputChange}
            options={violationTypes}
          />

          <Label htmlFor="actionStatus" className="block font-bold px-4">
            Статус дій по порушенню
          </Label>
          <Select
            className="w-full border rounded py-2 px-3"
            name="actionStatus"
            value={credentials.actionStatus}
            onChange={handleInputChange}
            options={actionStatus}
          />
          <Label htmlFor="meterSize" className="block font-bold px-4">
            Типорозмір лічильника
          </Label>
          <Select
            name="meterSize"
            value={credentials.meterSize}
            onChange={handleInputChange}
            options={meterSizes}
          />
        </div>

        <div className="col-span-1">
          <h2 className={'text-2xl font-light text-center'}>Адреса порушення</h2>

          <Input
            type="text"
            id="region"
            name="region"
            placeholder="Область"
            className="w-full border rounded py-2 px-3"
            value={credentials.region}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            id="city"
            name="city"
            placeholder="Місто"
            className="w-full border rounded py-2 px-3"
            value={credentials.city}
            onChange={handleInputChange}
            required={true}
          />
          <Input
            type="text"
            id="house"
            name="house"
            placeholder="Будинок"
            className="w-full border rounded py-2 px-3"
            value={credentials.house}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            id="apartment"
            name="apartment"
            placeholder="Квартира"
            className="w-full border rounded py-2 px-3"
            value={credentials.apartment}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button
          disabled={!isFormValid}
          className={'w-full py-2 mt-4'}
          type={'submit'}
          variant="primary"
          onClick={handleFormSubmit}
        >
          Зберегти акт
        </Button>
      </form>
    </>
  )
}
