import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Input, Loading, Search, SearchSelect, Select } from '../components'
import { useAddAct, useAllInfo, useCities, useStreets } from '../hooks'
import { useDepartments } from '../hooks/useDepartments'

export const NewActPage = ({ user }) => {
  const { addAct } = useAddAct({
    onAddActSuccess: (data) => {
    }
  })
  const { data: allInfo, isLoading: allInfoLoading, error: allInfoError } = useAllInfo()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formik = useFormik({
    initialValues: {
      act_number: '',
      reg_date: '',
      violation_type_id: '',
      action_state_id: '',
      counter_size_id: '',
      department_id: '',
      unit_id: '',
      is_central: false,
      region_id: '',
      city_id: '',
      street_id: '',
      house_number: '',
      app_number: '',
      contactor_type_id: '',
      is_consumer: '',
      fiz_name: '',
      goverment_name: '',
      personal_account: '',
      company_name: '',
      edrpou: '',
      user_id: '',
      personType: '',
      contractorType: ''
    },
    onSubmit: async (values) => {
      setIsSubmitting(true)

      await new Promise((resolve) => setTimeout(resolve, 600))
      const data = {
        act_number: values.act_number,
        reg_date: values.reg_date,
        violation_type_id: values.violation_type_id,
        action_state_id: values.action_state_id,
        counter_size_id: values.counter_size_id,
        department_id: values.department_id,
        unit_id: values.unit_id,
        is_central: values.is_central,
        region_id: values.region_id,
        city_id: values.city_id,
        street_id: values.street_id,
        house_number: values.house_number,
        app_number: values.app_number,
        contactor_type_id: values.contactor_type_id,
        is_consumer: values.is_consumer,
        fiz_name: values.fiz_name,
        goverment_name: values.goverment_name,
        personal_account: values.personal_account,
        edrpou: values.edrpou,
        user_id: values.user_id,
        personType: values.personType,
        contractorType: values.contractorType
      }
      addAct(data)
      console.log("ADD ACT" , data)
      setIsSubmitting(false)
    }, validationSchema: Yup.object({
      act_number: Yup.number('Номер акту не може містити букви').positive('Номер акту не може бути відємним числом').integer('Номер повинен бути цілим числом').required('Введіть номер акту'),
      reg_date: Yup.date().required('Введіть дату реєстрації акту')
    })
  })

  const { is_central } = formik.values.is_central

  const { departments, isDepartmentsLoading, errorDepartments } = useDepartments({
    regionId: formik.values.region_id
  })
  const { cities, isCitiesLoading, errorCities } = useCities({
    department_id: formik.values.department_id, search_city: formik.values.city_id
  })
  const { streets, isStreetsLoading, errorStreets } = useStreets({
    search_street: formik.values.street_id, cityId: formik.values.city_id
  })
  if (allInfoLoading) {
    return <h1>Loading</h1>
  }
  if (allInfoError) {
    return (<div>Error load</div>)
  }
  return (<div className='w-10/12  mx-auto'>
    <h2 className={'text-5xl font-light text-center m-10'}>Реєстрація актів порушення</h2>
    <form className='grid grid-cols-3 grid-rows-2 gap-12' onSubmit={formik.handleSubmit}>
      <div className='flex flex-col space-y-4'>
        <h2 className={'text-2xl mt-8 font-light text-center'}>Акт порушення</h2>
        <Input
          placeholder='Номер акту'
          name='act_number'
          id='act_number'
          type='number'
          value={formik.values.act_number}
          onChange={formik.handleChange}
          error={formik.errors.act_number}
          errorText={formik.errors.act_number}
        />
        <Input
          name='reg_date'
          id='reg_date'
          type='datetime-local'
          value={formik.values.reg_date}
          onChange={formik.handleChange}
          error={formik.errors.reg_date}
          errorText={formik.errors.reg_date}
        />
        <Select
          name='unit_id'
          value={formik.values.unit_id}
          onChange={formik.handleChange}
          options={allInfo.unit.map((unit) => ({
            value: unit.id, label: unit.unit_name
          }))}
          error={formik.errors.unit_id}
          errorText={formik.errors.unit_id}
        />
        <div className='mt-4 flex items-center'>
          <input
            type='checkbox'
            id='is_central'
            name='is_central'
            checked={is_central}
            onChange={formik.handleChange}
            className='h-4  w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
          />
          <label htmlFor='is_central' className='ml-2 block text-sm text-gray-900'>
            Центральний підрозділ
          </label>
        </div>
      </div>

      <div className='flex flex-col space-y-4'>
        <h2 className={'text-2xl mt-8 font-light text-center'}>Дільниця реєстрації порушення</h2>

        <Select
          label='Оберіть область'
          name='region_id'
          value={formik.values.region_id}
          onChange={formik.handleChange}
          options={allInfo.regions.map(region => ({
            value: region.id, label: region.region_name
          }))}
          error={formik.errors.region_id}
          errorText={formik.errors.region_id}
        />
        {formik.values.region_id && !isDepartmentsLoading && departments && (
          <Select
            label='Оберіть дільницю'
            name='department_id'
            value={formik.values.department_id}
            onChange={formik.handleChange}
            options={departments.map((department) =>
              ({
                value: department.id,
                label: department.department_name
              }))}
            error={formik.errors.department_id}
            errorText={formik.errors.department_id}
          />)}

        {formik.values.department_id && !isCitiesLoading && cities && (
          <SearchSelect
            label='Оберіть місто'
            name='city_id'
            value={formik.values.city_id}
            onChange={formik.handleChange}
            options={cities.map((city) => ({
              value: city.id,
              label: city.city_name
            }))}
            error={formik.errors.city_id}
            errorText={formik.errors.city_id}
          />
        )}
        {console.log( 'city_id' , formik.values.city_id   ) }

        {formik.values.city_id && !isStreetsLoading && streets && (
          <SearchSelect
            label='Оберіть вулицю'
            name='street_id'
            value={formik.values.street_id}
            onChange={formik.handleChange}
            options={streets.map((street) =>
              ({
                value: street.id,
                label: street.street_name
              }))}
            error={formik.errors.street_id}
            errorText={formik.errors.street_id}

          />
        )}
      </div>



      <div className='flex flex-col space-y-4'>
        <h2 className={'text-2xl font-light text-center'}>Адреса порушення</h2>
        <Input
          type='text'
          id='house_number'
          name='house_number'
          placeholder='Будинок'
          value={formik.values.house_number}
          onChange={formik.handleChange}
          error={formik.errors.house_number}
          errorText={formik.errors.house_number}
        />
        <Input
          type='text'
          id='app_number'
          name='app_number'
          placeholder='Квартира'
          value={formik.values.app_number}
          onChange={formik.handleChange}
          error={formik.errors.app_number}
          errorText={formik.errors.app_number} />

        <h2 className={'mt-4 text-2xl font-light text-center'}>Вид порушення</h2>
        <Select
          name='violation_type_id'
          value={formik.values.violation_type_id}
          onChange={formik.handleChange}
          options={allInfo.violationType.map((violationType) => ({
            value: violationType.id, label: violationType.violation_name
          }))}
          error={formik.errors.violation_type_id}
          errorText={formik.errors.violation_type_id}
        />
        <Select
          name='counter_size_id'
          label='Розмір лічильника'
          value={formik.values.counter_size_id}
          onChange={formik.handleChange}
          options={allInfo.counterSize.map((counterSize) => ({
            value: counterSize.id, label: counterSize.counter_size
          }))}
          error={formik.errors.unit_id}
          errorText={formik.errors.unit_id}
        />
        <Select
          name='action_state_id'
          value={formik.values.action_state_id}
          onChange={formik.handleChange}
          options={allInfo.actionStates.map((actionStates) => ({
            value: actionStates.id, label: actionStates.state
          }))}
          error={formik.errors.action_state_id}
          errorText={formik.errors.action_state_id}
        />
      </div>

      <div className='flex flex-col space-y-4'>
        <h2 className={'text-2xl font-light text-center'}>Оберіть вид контрагента</h2>
        <Select
          name='personType'
          label='Оберіть тип споживача'
          value={formik.values.personType}
          onChange={formik.handleChange}
          options={allInfo.personType.map((personType) => ({
            value: personType.id, label: personType.type_name
          }))}
          error={formik.errors.personType}
          errorText={formik.errors.personType}
        />
        <Select
          name='contractorType'
          label='Оберіть тип контрагента'
          value={formik.values.contractorType}
          onChange={formik.handleChange}
          options={allInfo.contractorType.map((contractorType) => ({
            value: contractorType.id, label: contractorType.contractor_type_name
          }))}
          error={formik.errors.contractorType}
          errorText={formik.errors.contractorType}
        />
        <Button
          className='w-40 py-2'
          type='submit'
          variant='success'
          isDisabled={formik.isSubmitting}
        >
          {formik.isSubmitting || isSubmitting ? <Loading size='sm' variant='success' /> : 'Зберегти дані акту'}
        </Button>
      </div>
    </form>
  </div>)
}


// http://172.21.90.252/api/allInfo