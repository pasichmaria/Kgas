import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Input, Loading, SearchSelect, Select } from '../components'
import { actionStatus, meterSizes, region, structure, violationTypes } from '../data'
import { useAddAct, useCities, useDepartments, useStreets } from '../hooks'

export const NewActPage = () => {
  const { addAct } = useAddAct({
    onAddActSuccess: (data) => {
      localStorage.setItem('data', data)
    }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formik = useFormik({
    initialValues: {
      actNumber: '',
      removalAndRegistrationDate: '',
      region: '',
      department: '',
      city: '',
      street: '',
      house: '',
      apartment: '',
      violationType: '',
      meterSize: '',
      actionStatus: '',
      structureType : '',
      tsentral_pidrozdil: false,
      osoba_type: '',
      PIB: '',
      PIB_predstavnyka: '',
      spozyvach_Type: '',
      nazva_yuridichna_osoba: '',
      EDRPO: '',
    },
    onSubmit: async (values) => {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 600))
      const data = {
        actNumber: values.actNumber,
        removalAndRegistrationDate: values.removalAndRegistrationDate,
        region: values.region,
        department: values.department,
        city: values.city,
        street: values.street,
        house: values.house,
        apartment: values.apartment,
        violationType: values.violationType,
        meterSize: values.meterSize,
        actionStatus: values.actionStatus,
        structureType: values.structureType,
        tsentral_pidrozdil: values.tsentral_pidrozdil,
        contragent:
          (values.osoba_type === 'Physical_person') ? {
            osoba_type: values.osoba_type,
            spozyvach_Type: values.spozyvach_Type,
            PIB: values.PIB,
            PIB_predstavnyka: values.PIB_predstavnyka
          } : (values.osoba_type === 'Legal_person') ? {
            osoba_type: values.osoba_type,
            spozyvach_Type: values.spozyvach_Type,
            nazva_yuridichna_osoba: values.nazva_yuridichna_osoba,
            EDRPO: values.EDRPO
          } : {
            osoba_type: values.osoba_type
          }
      }
      addAct(data)
      console.log(data)
      setIsSubmitting(false)
    },
    validationSchema: Yup.object({
        actNumber: Yup.number('Номер акту не може містити букви').positive('Номер акту не може бути відємним числом').integer('Номер повинен бути цілим числом').required('Введіть номер акту'),
        tsentral_pidrozdil: Yup.boolean().required('Оберіть варіант'),
        removalAndRegistrationDate: Yup.string().required('Введіть дату'),
        department: Yup.string().required('Виберіть відділ'),
        meterSize: Yup.string().required('Виберіть типорозмір лічильника'),
        violationType: Yup.string().required('Виберіть тип порушення'),
        actionStatus: Yup.string().required('Виберіть статус дій'),
        region: Yup.string().required('Введіть область'),
        city: Yup.string().required('Введіть місто'),
        osoba_type: Yup.string().required('Виберіть вид контрагента'),
        house: Yup.number(' Номер будинку не може містити букви').positive('Номер будинку не може бути відємним числом').integer('Номер будинку бути цілим числом').required('Введіть номер будинку'),
      }
    )
  })

  const { tsentral_pidrozdil } = formik.values.tsentral_pidrozdil
  const { departments, isDepartmentsLoading, errorDepartment } = useDepartments(formik.values.region)
  const { cities, isCitiesLoading, errorCities } = useCities(formik.values.department)
  const { streets, isStreetsLoading, errorStreets } = useStreets(formik.values.city)

  return (
    <div className='w-10/12  mx-auto'>
      <h2 className={'text-5xl font-light text-center m-10'}>Реєстрація актів порушення</h2>
      <form className='grid grid-cols-3 grid-rows-2 gap-12' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col space-y-4'>
          <h2 className={'text-2xl mt-8 font-light text-center'}>Акт порушення</h2>
          <Input
            placeholder='Номер акту'
            name='actNumber'
            id='actNumber'
            type='number'
            value={formik.values.actNumber}
            onChange={formik.handleChange}
            error={formik.errors.actNumber}
            errorText={formik.errors.actNumber}
          />
          <Input
            name='removalAndRegistrationDate'
            id='removalAndRegistrationDate'
            type='datetime-local'
            value={formik.values.removalAndRegistrationDate}
            onChange={formik.handleChange}
            error={formik.errors.removalAndRegistrationDate}
            errorText={formik.errors.removalAndRegistrationDate}
          />
          {formik.touched.removalAndRegistrationDate && formik.errors.removalAndRegistrationDate}
          <Select
            name='structureType'
            value={formik.values.structureType}
            onChange={formik.handleChange}
            options={structure}
          />
          <div className='mt-4 flex items-center'>
            <input
              type='checkbox'
              id='tsentral_pidrozdil'
              name='tsentral_pidrozdil'
              checked={tsentral_pidrozdil}
              onChange={formik.handleChange}
              className='h-4  w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
            />
            <label htmlFor='tsentral_pidrozdil' className='ml-2 block text-sm text-gray-900'>
              Центральний підрозділ
            </label>
          </div>
        </div>

        <div className='flex flex-col space-y-4'>
          <h2 className={'text-2xl mt-8 font-light text-center'}>Дільниця реєстрації порушення</h2>
          <Select
            name='region'
            value={formik.values.region}
            onChange={formik.handleChange}
            options={region}
            error={formik.errors.region}
            errorText={formik.errors.region}
          />
          {departments && (
            <>
              {isDepartmentsLoading ? (
                <p>Завантаження відділень...</p>
              ) : errorDepartment ? (
                <p>Error: {errorDepartment.message}</p>
              ) : (
                <Select
                  name='department'
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  options={departments}
                  error={formik.errors.department}
                  errorText={formik.errors.department}
                />
              )}
            </>
          )}
          {cities && (
            <>
              {isCitiesLoading ? (
                <p>Завантаження міст...</p>
              ) : errorCities ? (
                <p>Error: {errorCities.message}</p>
              ) : (
                <Select
                  name='city'
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  options={cities}
                  error={formik.errors.city}
                />
              )}
            </>
          )}
          {streets && (
          <>
            {isStreetsLoading ? (
              <p>Завантаження відділень...</p>
            ) : errorStreets ? (
              <p>Error: {errorStreets.message}</p>
            ) : (
              <SearchSelect
                name='street'
                value={formik.values.street}
                onChange={formik.handleChange}
                options={streets}
                error={formik.errors.street}
                errorText={formik.errors.street}
              />
            )}
          </>
        )}

        <div className='flex flex-col space-y-4'>
          <h2 className={'text-2xl font-light text-center'}>Адреса порушення</h2>
          <Input
            type='text'
            id='house'
            name='house'
            placeholder='Будинок'
            value={formik.values.house}
            onChange={formik.handleChange}
            error={formik.errors.house}
            errorText={formik.errors.house}
          />
          <Input
            type='text'
            id='apartment'
            name='apartment'
            placeholder='Квартира'
            value={formik.values.apartment}
            onChange={formik.handleChange}
            error={formik.errors.apartment}
            errorText={formik.errors.apartment} />
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
                  id='nazva_yuridichna_osoba'
                  label='Назва юридичної особи'
                  value={formik.values.nazva_yuridichna_osoba}
                  onChange={formik.handleChange}
                  error={formik.errors.nazva_yuridichna_osoba}
                  errorText={formik.errors.nazva_yuridichna_osoba}
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