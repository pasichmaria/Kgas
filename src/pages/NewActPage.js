import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Input, Select } from '../components'
import { actionStatus, department, meterSizes, structure, violationTypes } from '../data'
import { axios } from '../API'

export const NewActPage = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      actNumber: '',
      removalAndRegistrationDate: '',
      department: '',
      meterSize: '',
      violationType: '',
      actionStatus: '',
      region: '',
      structureType: '',
      city: '',
      house: '',
      apartment: '',
      tsentral_pidrozdil: false,
      osoba_type: '',
      PIB: '',
      PIB_predstavnyka: '',
      spozyvachtype: '',
      nazva_yuridichna_osoba: '',
      EDRPO: '',
      field1: '',
      field2: '',
      field3: ''
    }, onSubmit: values => {
      const data = {
        actNumber: values.actNumber,
        removalAndRegistrationDate: values.removalAndRegistrationDate,
        department: values.department,
        meterSize: values.meterSize,
        violationType: values.violationType,
        actionStatus: values.actionStatus,
        region: values.region,
        structureType: values.structureType,
        city: values.city,
        house: values.house,
        apartment: values.apartment,
        tsentral_pidrozdil: values.tsentral_pidrozdil,
        contragent: values.osoba_type === 'Physical_person' ? {
          osoba_type: values.osoba_type,
          PIB: values.PIB,
          PIB_predstavnyka: values.PIB_predstavnyka,
          spozyvachtype: values.spozyvachtype
        } : values.osoba_type === 'Legal_person' ? {
          osoba_type: values.osoba_type, nazva_yuridichna_osoba: values.nazva_yuridichna_osoba, EDRPO: values.EDRPO
        } : {
          osoba_type: values.osoba_type, field1: values.field1, field2: values.field2, field3: values.field3
        }
      }
      axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then((responce) => {
          navigate('/acts')
          console.log(data, responce)
        })
        .catch((error) => {
          console.log(error)
        })
    }, validationSchema: Yup.object({
        actNumber: Yup.number('Номер акту не може містити букви').positive('Номер акту не може бути відємним числом').integer('Номер повинен бути цілим числом').required('Введіть номер акту'),
        tsentral_pidrozdil: Yup.boolean().required('Оберіть варіант'),
        removalAndRegistrationDate: Yup.string().required('Введіть дату'),
        department: Yup.string().required('Виберіть відділ'),
        meterSize: Yup.string().required('Виберіть типорозмір лічильника'),
        violationType: Yup.string().required('Виберіть тип порушення'),
        actionStatus: Yup.string().required('Виберіть статус дій'),
        region: Yup.string().required('Введіть область'),
        structureType: Yup.string().required('Виберіть структурний підрозділ'),
        city: Yup.string().required('Введіть місто'),
        contragent: Yup.object().shape({
          osoba_type: Yup.string().required('Виберіть тип контрагента')
        })
      }
    )
  })

  const { tsentral_pidrozdil } = formik.values.tsentral_pidrozdil

  return (<div className='w-10/12  mx-auto'>
    <h2 className={'text-5xl font-light text-center m-10'}>Реєстрація актів порушення</h2>
    <form className='grid grid-cols-3 grid-rows-2 gap-12' onSubmit={formik.handleSubmit}>
      <div className='p-4'>
        <h2 className={'text-2xl font-light text-center'}>Акт порушення</h2>
        <Input
          placeholder='Номер акту'
          name='actNumber'
          id='actNumber'
          type='number'
          className='w-full border rounded py-4'
          value={formik.values.actNumber}
          onChange={formik.handleChange}
          error={formik.errors.actNumber}
          errorText={formik.errors.actNumber}
        />
        <Input
          name='removalAndRegistrationDate'
          id='removalAndRegistrationDate'
          type='datetime-local'
          className='w-full border rounded py-4 mb-4'
          value={formik.values.removalAndRegistrationDate}
          onChange={formik.handleChange}
          error={formik.errors.removalAndRegistrationDate}
          errorText={formik.errors.removalAndRegistrationDate}
        />
        {formik.touched.removalAndRegistrationDate && formik.errors.removalAndRegistrationDate}
        <Select
          name='department'
          value={formik.values.department}
          onChange={formik.handleChange}
          options={department}
          error={formik.errors.department}
          errorText={formik.errors.department}
        />
        <Select
          name='structureType'
          value={formik.values.structureType}
          onChange={formik.handleChange}
          options={structure}
          error={formik.errors.structureType}
          errorText={formik.errors.structureType}
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
      <div className='p-4'>
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
      </div>

      <div className='p-4'>
        <h2 className={'text-2xl font-light text-center'}>Адреса порушення</h2>
        <Input
          className='w-full border rounded py-4'
          type='text'
          id='region'
          name='region'
          placeholder='Область'
          value={formik.values.region}
          onChange={formik.handleChange}
          error={formik.errors.region}
          errorText={formik.errors.region}
        />
        <Input
          className='w-full border rounded py-4'
          type='text'
          id='city'
          name='city'
          placeholder='Місто'
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
          errorText={formik.errors.city}
        />
        <Input
          className='w-full border rounded py-4'
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
          className='w-full border rounded py-4'
          type='text'
          id='apartment'
          name='apartment'
          placeholder='Квартира'
          value={formik.values.apartment}
          onChange={formik.handleChange}
          error={formik.errors.apartment}
          errorText={formik.errors.apartment} />
      </div>

      <div className='p-4'>
        <h2 className={'text-2xl font-light text-center mb-4'}>Оберіть вид контрагента</h2>
        <Select
          name='osoba_type'
          value={formik.values.osoba_type}
          options={[{ value: 'Physical_person', label: 'Фізична особа' }, {
            value: 'Legal_person', label: 'Юридична особа'
          }, { value: 'No_identified_person', label: 'Не встановлена особа' }]}
          onChange={formik.handleChange}
          error={formik.errors.osoba_type}
          errorText={formik.errors.osoba_type}
        />
        {formik.values.osoba_type === 'Physical_person' && (<div className='mt-6'>
          <Select
            name='spozyvachtype'
            value={formik.values.spozyvachtype}
            options={[{ value: 'Spozyvach', label: 'Споживач' }, { value: 'Ne_spozyvach', label: 'Не споживач' }]}
            onChange={formik.handleChange}
            error={formik.errors.spozyvachtype}
            errorText={formik.errors.spozyvachtype}
          />
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='PIB'
            label='ПІБ'
            value={formik.values.PIB}
            onChange={formik.handleChange}
            error={formik.errors.PIB}
            errorText={formik.errors.PIB}
          />
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='PIB_predstavnyka'
            label='ПІБ представника'
            value={formik.values.PIB_predstavnyka}
            onChange={formik.handleChange}
            error={formik.errors.PIB_predstavnyka}
            errorText={formik.errors.PIB_predstavnyka}
          />
        </div>)}
        {formik.values.osoba_type === 'Legal_person' && (<div className='mt-6'>
          <Select
            name='spozyvachtype'
            value={formik.values.spozyvachtype}
            options={[{ value: 'Spozyvach', label: 'Споживач' }, { value: 'Ne_spozyvach', label: 'Не споживач' }]}
            onChange={formik.handleChange}
            error={formik.errors.spozyvachtype}
            errorText={formik.errors.spoyvachtype}
          />
          <Input
            className='w-full border rounded py-4'
            type='number'
            id='EDRPO'
            label='ЕДРПО'
            value={formik.values.EDRPO}
            onChange={formik.handleChange}
            error={formik.errors.EDRPO}
            errorText={formik.errors.EDRPO}
          />
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='nazva_yuridichna_osoba'
            label='Назва юридичної особи'
            value={formik.values.nazva_yuridichna_osoba}
            onChange={formik.handleChange}
            error={formik.errors.nazva_yuridichna_osoba}
            errorText={formik.errors.nazva_yuridichna_osoba}
          />
        </div>)}
        {formik.values.osoba_type === 'No_identified_person' && (<>
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='field1'
            label='field1'
            value={formik.values.field1}
            onChange={formik.handleChange}
          />
          <Input
            className='w-full border rounded py-4 '
            type='text'
            id='field2'
            label='field2'
            value={formik.values.field2}
            onChange={formik.handleChange}
          />
          <Input
            className='w-full border rounded py-4'
            type='text'
            id='field3'
            label='field3'
            value={formik.values.field3}
            onChange={formik.handleChange}
          />
        </>)}
        <Button
          className={'w-full py-2 mt-4'}
          type={'submit'}
          variant='primary'
          onClick={formik.handleSubmit}
          isDisabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Збереження данних...' : 'Зберегти акт'}
        </Button>
      </div>
    </form>
  </div>)
}
