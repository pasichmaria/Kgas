import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Input, Loading, SearchSelect, Select } from '../components'
import { actionStatus, meterSizes, region, structure, violationTypes } from '../data'
import { useAddAct, useCities, useDepartments, useStreets , useAllInfo} from '../hooks'
export const NewActPage = () => {
  const { addAct } = useAddAct({
    onAddActSuccess: (data) => {

      console.log('newActData - ', data)
    }
  })
  const { data , isLoading ,error } = useAllInfo()

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
      user_id: ''
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
        user_id: values.user_id
      }
      addAct(data)
      console.log(data)
      setIsSubmitting(false)
    },
    validationSchema: Yup.object({
        act_number: Yup.number('Номер акту не може містити букви').positive('Номер акту не може бути відємним числом').integer('Номер повинен бути цілим числом').required('Введіть номер акту'),
        reg_date: Yup.date().required('Введіть дату реєстрації акту'),
        violation_type_id: Yup.string().required('Виберіть тип порушення'),
        action_state_id: Yup.string().required('Виберіть стан акту'),
        counter_size_id: Yup.string().required('Виберіть розмір лічильника'),
        department_id: Yup.string().required('Виберіть дільницю'),
        unit_id: Yup.string().required('Виберіть підрозділ'),
        is_central: Yup.boolean(),
        region_id: Yup.string().required('Виберіть область'),
        city_id: Yup.string().required('Виберіть місто'),
        street_id: Yup.string().required('Виберіть вулицю'),
        house_number: Yup.string().required('Введіть номер будинку'),
        contactor_type_id: Yup.string().required('Виберіть тип контрагента'),
        is_consumer: Yup.string().required('Виберіть тип споживача'),
        fiz_name: Yup.string().required('Введіть ПІБ фізичної особи'),
        goverment_name: Yup.string().required('Введіть назву юридичної особи'),
        personal_account: Yup.string().required('Введіть особовий рахунок'),
        edrpou: Yup.string().required('Введіть ЄДРПОУ'),
        user_id: Yup.string().required('Виберіть користувача')
      }
    )
  })

  const { is_central } = formik.values.is_central

  const { cities, isCitiesLoading, errorCities } = useCities({ regionId: formik.values.region_id })
  const { streets, isStreetsLoading, errorStreets } = useStreets({ requestedStreet: searchQuery, cityId: city_id })

  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <div>error</div>
  }
  return (
    <div className='w-10/12  mx-auto'>
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
          {formik.touched.reg_date && formik.errors.reg_date}
          <Select
            name='unit_id'
            value={formik.values.unit_id}
            onChange={formik.handleChange}
            options={ data.unit.map((unit) => ({ value: unit.id, label: unit.name })) }
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

          <Select {/* Область */}
            name='region_id'
            value={formik.values.region_id}
            onChange={formik.handleChange}
            options={data.regions.map((region) => ({
              value: region.id,
              label: region.region_name,
            }))}
            error={formik.errors.region_id}
            errorText={formik.errors.region_id}
          />
          <Select {/* Дільниця */}
            name='department'
            value={formik.values.department}
            onChange={formik.handleChange}
            options={data.department.map((department) => ({ value: department.id, label: department.name }))}
            error={formik.errors.department_id}
            errorText={formik.errors.department_id}
          />
          <Select
            name='city'
            value={formik.values.city_id}
            onChange={formik.handleChange}
            options={cities.data.map((city) => ({ value: city.id, label: city.name }))}
            error={formik.errors.city_id}
          />
          <SearchSelect
            name='street'
            value={formik.values.street}
            onChange={formik.handleChange}
            options={streets.data.map((street) => ({ value: street.id, label: street.name }))}
            error={formik.errors.street_id}
            errorText={formik.errors.street_id}
          />
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
          </div>
        </div>

        <div className='flex flex-col space-y-4'>
          <h2 className={'mt-4 text-2xl font-light text-center'}>Вид порушення</h2>
          <Select
            name='violationType'
            value={formik.values.violationType}
            onChange={formik.handleChange}
            options={violationTypes}
            error={formik.errors.violationType}
            errorText={formik.errors.violationType}
          />
          <Select
            name='meterSize'
            value={formik.values.meterSize}
            onChange={formik.handleChange}
            options={meterSizes}
            error={formik.errors.meterSize}
            errorText={formik.errors.meterSize}
          />
          <Select
            name='actionStatus'
            value={formik.values.actionStatus}
            onChange={formik.handleChange}
            options={actionStatus}
            error={formik.errors.actionStatus}
            errorText={formik.errors.actionStatus}
          />

          <div className='flex flex-col space-y-4'>
            <h2 className={'text-2xl font-light text-center'}>Оберіть вид контрагента</h2>
            <Select
              name='osoba_type'
              value={formik.values.osoba_type}
              options={[
                { value: '', label: 'Оберіть варіант' },
                { value: 'Physical_person', label: 'Фізична особа' },
                { value: 'Legal_person', label: 'Юридична особа' },
                { value: 'No_identified_person', label: 'Не встановлена особа' }]}
              onChange={formik.handleChange}
              error={formik.errors.osoba_type}
              errorText={formik.errors.osoba_type}
            />
            {formik.values.osoba_type === 'Physical_person' && (

              <div className='flex flex-col space-y-4'>
                <Select
                  name='spozyvach_Type'
                  value={formik.values.spozyvach_Type}
                  options={[
                    { value: 'Spozyvach', label: 'Споживач' },
                    { value: 'Ne_spozyvach', label: 'Не споживач' }
                  ]}
                  onChange={formik.handleChange}
                  error={formik.errors.spozyvach_Type}
                  errorText={formik.errors.spozyvach_Type}
                />
                <Input
                  type='text'
                  id='PIB'
                  label='ПІБ'
                  value={formik.values.PIB}
                  onChange={formik.handleChange}
                  error={formik.errors.PIB}
                  errorText={formik.errors.PIB}
                />
                <Input
                  type='text'
                  id='PIB_predstavnyka'
                  label='ПІБ представника'
                  value={formik.values.PIB_predstavnyka}
                  onChange={formik.handleChange}
                  error={formik.errors.PIB_predstavnyka}
                  errorText={formik.errors.PIB_predstavnyka}
                />
              </div>)}
            {formik.values.osoba_type === 'Legal_person' && (
              <div className='flex flex-col space-y-4'>
                <Select
                  name='spozyvach_Type'
                  value={formik.values.spozyvach_Type}
                  options={[{ value: 'Spozyvach', label: 'Споживач' }, { value: 'Ne_spozyvach', label: 'Не споживач' }]}
                  onChange={formik.handleChange}
                  error={formik.errors.spozyvach_Type}
                  errorText={formik.errors.spozyvach_Type}
                />
                <Input
                  type='number'
                  id='EDRPO'
                  label='ЕДРПО'
                  value={formik.values.EDRPO}
                  onChange={formik.handleChange}
                  error={formik.errors.EDRPO}
                  errorText={formik.errors.EDRPO}
                />
                <Input
                  type='text'
                  id=''
                  label='Назва юридичної особи'
                  value={formik.values.}
                  onChange={formik.handleChange}
                  error={formik.errors.}
                  errorText={formik.errors.}
                />
              </div>)}
          </div>

          <Button
            className={'w-full py-2 mt-4'}
            type={'submit'}
            variant='success'
            isDisabled={formik.isSubmitting || formik.values.osoba_type === ''}
          >
            {formik.isSubmitting || isSubmitting ? <Loading size={'sm'} variant={'success'} /> : 'Зберегти дані акту'}
          </Button>
        </div>
      </form>
    </div>)
}