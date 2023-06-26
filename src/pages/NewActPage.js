import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  Autocomplete,
  Box,
  Button,
  Checkbox, debounce,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { MdApartment, MdHome, MdLocalPostOffice, MdNumbers, MdPerson } from 'react-icons/md'

import { useAddAct, useAllInfo, useCities, useStreets } from '../hooks'
import { useDepartments } from '../hooks/useDepartments'

export const NewActPage = ({ user }) => {
  const { addAct } = useAddAct({
    onAddActSuccess: (data) => {
      console.log('ADD ACT SUCCESS', data)
    }
  })
  const { data: allInfo, isLoading: allInfoLoading, error: allInfoError } = useAllInfo()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formik = useFormik({
    initialValues: {
      act_number: '',
      reg_date: '',
      reg_date_date: '',
      reg_date_time: '',
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
      contractorType: '',
    },
    onSubmit: async (values) => {
      setIsSubmitting(true)

      await new Promise((resolve) => setTimeout(resolve, 600))
      const data = {
        act_number: values.act_number,
        reg_date: values.reg_date_date + ' ' + values.reg_date_time,
        violation_type_id: values.violation_type_id,
        action_state_id: values.action_state_id,
        unit_id: values.unit_id,
        is_central: values.is_central,
        department_id: values.department_id,
        region_id: values.region_name,
        city_id: values.city_id,
        street_id: values.street_id,
        house_number: values.house_number,
        app_number: values.app_number,
        counter_size_id: values.counter_size,
        contactor_type_id: values.contractor_type_name,
        is_consumer: values.is_consumer,
        fiz_name: values.fiz_name,
        goverment_name: values.goverment_name,
        person_type_id: values.type_name,
        personal_account: values.personal_account,
        edrpou: values.edrpou,
        user_id: values.user_id,
      }
      addAct(data)
      console.log('ADD ACT', data)
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
  const { cities, isCitiesLoading, errorCities, setSearch_city } = useCities({
    search_city: formik.values.search_city, department_id: formik.values.department_id
  })
  const { streets, isStreetsLoading, errorStreets  } = useStreets({
    search_street: formik.values.search_street, cityId: formik.values.city_id
  })
  if (allInfoLoading) {
    return <h1>Loading</h1>
  }
  if (allInfoError) {
    return (<div>Error load</div>)
  }


  return (
    <Box sx={{
      height: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      m: 8
    }}>
      <form handleSubmit={formik.handleSubmit}>
        <Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h4' component='div' gutterBottom>
                Реєстрація акту
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Typography variant='subtitle1' align='center'>Акт порушення</Typography>
                  <InputLabel id='act_number'>Номер акту порушення </InputLabel>
                  <TextField id='act_number' label='Номер акту' variant='outlined' fullWidth
                             value={formik.values.act_number}
                             onChange={formik.handleChange}
                             error={formik.touched.act_number && Boolean(formik.errors.act_number)}
                             helperText={formik.touched.act_number && formik.errors.act_number}
                  />
                  <Grid container columnSpacing={2} sx={{ justifyContent: 'space-between' }}>
                    <Grid item xs={5}>
                      <DatePicker value={formik.values.reg_date_date} label='Оберіть дату' />
                    </Grid>
                    <Grid item xs={5}>
                      <TimePicker value={formik.values.reg_date_time} label='Час реєстрації ' />
                    </Grid>
                  </Grid>
                  <Grid sx={{ mt: 4 }}>
                    <InputLabel variant='standard' id='unit_id'>
                      Підрозділ
                    </InputLabel>
                    <Select
                      labelId='unit_id'
                      id='unit_id'
                      name='unit_id'
                      value={formik.values.unit_id}
                      onChange={formik.handleChange}
                      fullWidth
                    >
                      <MenuItem value=''>
                        <em>Оберіть підрозділ</em>
                      </MenuItem>
                      {allInfo.unit.map((unit) => (
                        <MenuItem key={unit.id} value={unit.id}>
                          {unit.id} - {unit.unit_name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormControlLabel
                      value={formik.values.is_central}
                      control={<Checkbox defaultChecked />}
                      label='Центральний підрозділ' />
                  </Grid>
                </Grid>

                <Grid sx={{ spacing: 2 }} item xs={6}>
                  <Typography variant='subtitle1' align='center'>Дільниця реєстрації</Typography>
                  <Grid container spacing={2} marginTop={3}>
                    <Grid item xs={12}>
                      <InputLabel id='region_id'>Область</InputLabel>
                      <Select
                        labelId='region_id'
                        id='region_id'
                        name='region_id'
                        value={formik.values.region_id}
                        onChange={formik.handleChange}
                        fullWidth
                      >
                        <MenuItem value=''>
                          <em>Оберіть область</em>
                        </MenuItem>
                        {allInfo.regions.map((region) => (
                          <MenuItem key={region.id} value={region.id}>
                            {region.region_name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    {formik.values.region_id && !isDepartmentsLoading && departments && (
                      <Grid item xs={12}>
                        <InputLabel id='department_id'>Відділення</InputLabel>
                        <Select
                          labelId='department_id'
                          id='department_id'
                          name='department_id'
                          value={formik.values.department_id}
                          onChange={formik.handleChange}
                          fullWidth
                        >
                          <MenuItem value=''>
                            <em>Оберіть відділення</em>
                          </MenuItem>
                          {departments.map((department) => (
                            <MenuItem key={department.id} value={department.id}>
                              {department.department_name}
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                    )}

                    {formik.values.department_id && !isCitiesLoading && cities && (
                      <Grid item xs={12}>
                        <Autocomplete
                          id='city_id'
                          name='city_id'
                          options={cities}
                          getOptionLabel={(city) => city.city_name}
                          value={formik.values.city_id}
                          fullWidth
                          onChange={(e, value) => {
                            if (value) {
                              formik.setFieldValue('city_id', value.id || '')
                            }
                            else {
                              formik.setFieldValue('city_id', '')
                            }

                            console.log('on change value', value, 'val.id', value.id, 'formik.values.id', formik.values.city_id)
                          }}

                          onInputChange={(e, newInputValue) => {
                            if (newInputValue) {
                            setSearch_city(newInputValue)
                              console.log('setsearchcity ', newInputValue)
                            }
                          }}

                          renderInput={(params) =>
                            <TextField {...params} label='Город' />
                          }
                        />
                      </Grid>
                    )}


                    {formik.values.city_id && !isStreetsLoading && streets && (
                      <Grid item xs={12}>
                        <Autocomplete
                          id='street_id'
                          name='street_id'
                          options={streets}
                          getOptionLabel={(street) => street.street_name}
                          onChange={(e, value) => formik.setFieldValue('street_id', value?.id || '')}
                          fullWidth
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              margin='normal'
                              label='Street'
                              fullWidth
                              value={formik.values.street_id}
                              variant='outlined'
                              error={formik.touched.street_id && Boolean(formik.errors.street_id)}
                              helperText={formik.touched.street_id && formik.errors.street_id}
                            />
                          )}
                        />
                      </Grid>
                    )}
                  </Grid>


                  <Grid item marginTop={6}>
                    <Typography variant='subtitle1'>Адреса порушення </Typography>

                    <Grid columnSpacing={2} container sx={{ justifyContent: 'space-between' }}>
                      <Grid item xs={5}>
                        <TextField id='house_number' label='Номер будинку' variant='outlined' fullWidth
                                   value={formik.values.house_number}
                                   onChange={formik.handleChange}
                                   error={formik.touched.house_number && Boolean(formik.errors.house_number)}
                                   helperText={formik.touched.house_number && formik.errors.house_number}
                                   InputProps={{
                                     startAdornment: (
                                       <InputAdornment position='start'>
                                         <MdHome />
                                       </InputAdornment>
                                     )
                                   }}
                        />
                      </Grid>

                      <Grid item xs={5}>
                        <TextField id='app_number' label='Номер квартири' variant='outlined' fullWidth
                                   value={formik.values.app_number}
                                   onChange={formik.handleChange}
                                   error={formik.touched.app_number && Boolean(formik.errors.app_number)}
                                   helperText={formik.touched.app_number && formik.errors.app_number}
                                   InputProps={{
                                     startAdornment: (
                                       <InputAdornment position='start'>
                                         <MdApartment />
                                       </InputAdornment>
                                     )
                                   }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid sx={{ spacing: 2 }} item xs={6}>
                  <Typography variant='subtitle1' align='center'>Тип порушення </Typography>
                  <Grid container spacing={2} marginTop={5}>

                    <Grid item xs={12}>
                      <InputLabel id='violation_type_id'>Вид порушення</InputLabel>
                      <Select
                        labelId='violation_type_id'
                        id='violation_type_id'
                        value={formik.values.violation_name}
                        onChange={formik.handleChange}
                        fullWidth
                      >
                        <MenuItem value=''>
                          <em>Оберіть підрозділ</em>
                        </MenuItem>
                        {allInfo.violationType.map((violationType) => (
                          <MenuItem key={violationType.id} value={violationType.id}>
                            {violationType.violation_description + ' ' + violationType.violation_name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    <Grid item xs={6}>
                      <InputLabel id='counter_size'>Типорозмір лічильника</InputLabel>
                      <Select
                        labelId='counter_size'
                        id='counter_size'
                        value={formik.values.counter_size}
                        onChange={formik.handleChange}
                        fullWidth
                      >
                        <MenuItem value=''>
                          <em>Оберіть розмір</em>
                        </MenuItem>
                        {
                          allInfo.counterSize.map((counterSize) => (
                            <MenuItem key={counterSize.id} value={counterSize.id}>
                              {counterSize.counter_size}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </Grid>

                    <Grid item xs={6}>
                      <InputLabel id='actionStates'>Статус дій по порушенню</InputLabel>
                      <Select
                        labelId='action_state_id'
                        id='action_state_id'
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        fullWidth
                      >
                        <MenuItem value=''>
                          <em>Оберіть статус дій</em>
                        </MenuItem>
                        {
                          allInfo.actionStates.map((actionState) => (
                            <MenuItem key={actionState.id} value={actionState.id}>
                              {actionState.state}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid sx={{ spacing: 2 }} item xs={6}>
                  <Typography variant='subtitle1' align='center'> Вид контрагента </Typography>
                  <Grid container spacing={2} marginTop={5}>

                    <Grid item xs={12}>
                      <InputLabel id='contactor_type_id'>Тип контрагента</InputLabel>
                      <Select
                        labelId='contactor_type_id'
                        id='contactor_type_id'
                        value={formik.values.contractor_type_name}
                        onChange={formik.handleChange}
                        fullWidth
                      >
                        <MenuItem value=''>
                          <em>Оберіть контрагента</em>
                        </MenuItem>
                        {
                          allInfo.contractorType.map((contractorType) => (
                            <MenuItem key={contractorType.id} value={contractorType.id}>
                              {contractorType.contractor_type_name}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </Grid>

                    <Grid item xs={6}>
                      <InputLabel id='person_type_id'>Тип споживач / не споживач</InputLabel>
                      <Select
                        labelId='person_type_id'
                        id='person_type_id'
                        value={formik.values.type_name}
                        onChange={formik.handleChange}
                        fullWidth
                      >
                        <MenuItem value=''>
                          <em>Оберіть споживача</em>
                        </MenuItem>
                        {
                          allInfo.personType.map((personType) => (
                            <MenuItem key={personType.id} value={personType.id}>
                              {personType.type_name}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </Grid>


                    {formik.values.contactor_type_id === 1 && (
                      <>
                        <Grid item xs={12}>
                          <TextField fullWidth
                                     label='ПІБ' id='fiz_name' value={formik.values.fiz_name} InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <MdPerson />
                              </InputAdornment>
                            )
                          }} />

                        </Grid>
                        <Grid item xs={12}>
                          <TextField fullWidth
                                     label='Рахунок' id='personal_account' value={formik.values.personal_account}
                                     InputProps={{
                                       startAdornment: (
                                         <InputAdornment position='start'>
                                           <MdHome />
                                         </InputAdornment>
                                       )
                                     }} />
                        </Grid>
                      </>
                    )}


                    {formik.values.contactor_type_id === 2 && (
                      <>
                        <Grid item xs={12}>
                          <TextField fullWidth
                                     label='Назва юр.особи' id='company_name' value={formik.values.company_name}
                                     InputProps={{
                                       startAdornment: (
                                         <InputAdornment position='start'>
                                           <MdLocalPostOffice />
                                         </InputAdornment>
                                       )
                                     }} />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField fullWidth
                                     label='ЕДРПО' id='edrpou' value={formik.values.edrpou} InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <MdNumbers />
                              </InputAdornment>
                            )
                          }} />
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ mt: 10 }} variant='body2' color='text.secondary' align='center'>
            <Button variant='contained' color='primary' type='submit'>Зберегти</Button>
          </Typography>
        </Grid>
      </form>
    </Box>
  )
}

