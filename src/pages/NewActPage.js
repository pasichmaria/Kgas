import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Select, Input, Checkbox } from '../components'
import { actionStatus, meterSizes, violationTypes, department, structure } from '../data'
import { axios } from '../API'

export const NewActPage = () => {
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({})
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }))
  }
  const handleSelectChange = (event) => {
    const { name, value } = event.target
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }))
  }
  const requiredFields = ['actNumber']
  const isFormValid = requiredFields.every(field => Boolean(credentials[field]))
  const handleFormSubmit = (event) => {
    const data = {
      actNumber: credentials.actNumber,
      removalAndRegistrationDate: credentials.removalAndRegistrationDate,
      department: credentials.department,
      meterSize: credentials.meterSize,
      violationType: credentials.violationType,
      actionStatus: credentials.actionStatus,
      region: credentials.region,
      city: credentials.city,
      house: credentials.house,
      apartment: credentials.apartment,
      pidrozdil: credentials.pidrozdil ? true : false,
      contragent:
        credentials.osoba_type === 'Physical_person' ?
          {
            osoba_type: credentials.osoba_type,
            PIB: credentials.PIB,
            PIB_predstavnyka: credentials.PIB_predstavnyka,
            spozyvachtype: credentials.spozyvachtype
          }
          :
          credentials.osoba_type === 'Legal_person' ? {
              osoba_type: credentials.osoba_type,
              nazva_yuridichna_osoba: credentials.nazva_yuridichna_osoba,
              EDRPO: credentials.EDRPO
            } :
            {
              osoba_type: credentials.osoba_type,
              field1: credentials.field1,
              field2: credentials.field2,
              field3: credentials.field3
            }
    }

    event.preventDefault()
    if (isFormValid) {
      axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then((response) => {
          console.log(data)
          navigate('/acts')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const actNumberRegex = /^[1-9]\d*$/
  const isActNumberValid = actNumberRegex.test(credentials.actNumber)
  return (
    <div className='w-10/12  mx-auto'>
      <h2 className={'text-5xl font-light text-center m-10'}>Реєстрація актів порушення</h2>
      <form className='grid grid-cols-3 grid-rows-2 gap-12' onSubmit={handleFormSubmit}>

        <div className='p-4'>
          <h2 className={'text-2xl font-light text-center'}>Акт порушення</h2>
          <Input
            error={!isActNumberValid}
            required={true}
            errorText={'Введіть номер акту у вірному форматі'}
            isNumberActValid={isActNumberValid}
            placeholder='Номер акту'
            className='w-full border rounded py-4'
            type='number'
            name='actNumber'
            id='actNumber'
            value={credentials.actNumber}
            onChange={handleInputChange}
          />
          <Input
            className='w-full border rounded py-4 mb-4'
            type='datetime-local'
            name='removalAndRegistrationDate'
            id='removalAndRegistrationDate'
            value={credentials.removalAndRegistrationDate}
            onChange={handleInputChange}
          />
          <Select
            name='department'
            value={credentials.department}
            onChange={handleInputChange}
            options={department}
          />
          <Select
            name='structureType'
            value={credentials.structureType}
            onChange={handleInputChange}
            options={structure}
          />
          <Checkbox
            label='Центральний підрозділ'
            name='pidrozdil'
            value={credentials.pidrozdil}
            checked={isChecked}
            onChange={handleInputChange}
          />
        </div>

        <div className='p-4'>
          <h2 className={'mt-4 text-2xl font-light text-center'}>Вид порушення</h2>
          <Select
            name='violationType'
            value={credentials.violationType}
            onChange={handleInputChange}
            options={violationTypes}
          />
          <Select
            name='meterSize'
            value={credentials.meterSize}
            onChange={handleInputChange}
            options={meterSizes}
          />
          <Select
            name='actionStatus'
            value={credentials.actionStatus}
            onChange={handleInputChange}
            options={actionStatus}
          />
        </div>

        <div className='p-4'>
          <h2 className={'text-2xl font-light text-center'}>Адреса порушення</h2>
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='region'
            name='region'
            placeholder='Область'
            value={credentials.region}
            onChange={handleInputChange}
            required={true}
          />
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='city'
            name='city'
            placeholder='Місто'
            value={credentials.city}
            onChange={handleInputChange}
            required={true}
          />
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='house'
            name='house'
            placeholder='Будинок'
            value={credentials.house}
            onChange={handleInputChange}
            required
          />
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='apartment'
            name='apartment'
            placeholder='Квартира'
            value={credentials.apartment}
            onChange={handleInputChange}
            required />
        </div>

        <div className='p-4'>
          <h2 className={'text-2xl font-light text-center mb-4'}>Оберіть вид контрагента</h2>
          <Select
            name='osoba_type'
            value={credentials.osoba_type}
            options={[{ value: 'Physical_person', label: 'Фізична особа' }, {
              value: 'Legal_person',
              label: 'Юридична особа'
            }, { value: 'No_identified_person', label: 'Не встановлена особа' }]}
            onChange={handleSelectChange}
          />
          {credentials.osoba_type === 'Physical_person' && (<div className='mt-6'>
            <Select
              name='spozyvachtype'
              value={credentials.spozyvachtype}
              options={[{ value: 'Spozyvach', label: 'Споживач' }, { value: 'Ne_spozyvach', label: 'Не споживач' }]}
              onChange={handleInputChange}
            />
            <Input
              className='w-full border rounded py-4'
              type='text'
              id='PIB'
              label='ПІБ'
              value={credentials.PIB}
              onChange={handleInputChange}
            />
            <Input
              className='w-full border rounded py-4'
              type='text'
              id='PIB_predstavnyka'
              label='ПІБ представника'
              value={credentials.PIB_predstavnyka}
              onChange={handleInputChange}
            />
          </div>)}
          {credentials.osoba_type === 'Legal_person' && (<div className='mt-6'>
            <Select
              name='spozyvachtype'
              value={credentials.spozyvachtype}
              options={[{ value: 'Spozyvach', label: 'Споживач' }, { value: 'Ne_spozyvach', label: 'Не споживач' }]}
              onChange={handleInputChange}
            />
            <Input
              className='w-full border rounded py-4'
              type='number'
              id='EDRPO'
              label='ЕДРПО'
              value={credentials.EDRPO}
              onChange={handleInputChange}
            />
            <Input
              className='w-full border rounded py-4'
              type='text'
              id='nazva_yuridichna_osoba'
              label='Назва юридичної особи'
              value={credentials.nazva_yuridichna_osoba}
              onChange={handleInputChange}
            />
          </div>)}
          {credentials.osoba_type === 'No_identified_person' && (<>
            <Input
              className='w-full border rounded py-4'
              type='text'
              id='field1'
              label='field1'
              value={credentials.field1}
              onChange={handleInputChange}
            />
            <Input
              className='w-full border rounded py-4 '
              type='text'
              id='field2'
              label='field2'
              value={credentials.field2}
              onChange={handleInputChange}
            />
            <Input
              className='w-full border rounded py-4'
              type='text'
              id='field3'
              label='field3'
              value={credentials.field3}
              onChange={handleInputChange}
            />
          </>)}
          <Button
            disabled={!isFormValid}
            className={'w-full py-2 mt-4'}
            type={'submit'}
            variant='primary'
            onClick={handleFormSubmit}
          >
            Зберегти акт
          </Button>
        </div>
      </form>
    </div>)
}