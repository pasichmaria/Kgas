import React, { useState } from 'react'
import { useFormik } from 'formik'
import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Alert, Button
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { DateTimePicker } from '@mui/x-date-pickers'
import { MdAccountBox, MdApartment, MdBuildCircle, MdHome, MdLocalPostOffice, MdPerson } from 'react-icons/md'

import { useAddAct, useAllInfo, useCities, useStreets } from '../../hooks'
import { useDepartments } from '../../hooks/useDepartments'
import { ConfirmSaveDialog, ErrorLoad, Loading } from '../../components'

export const NewActPage = ({ user }) => {
  const { data: allInfo, isLoading: allInfoLoading, error: allInfoError } = useAllInfo()

  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }
  const alertError = () => {
    return (<Alert severity='error'>
      Cталася помилка при реєстрації акту. Перевірте правильність введених даних та спробуйте ще раз
    </Alert>)
  }
  const alertOk = () => {
    return (<Alert severity='success'>
      Акт успішно зареєстровано в системі
    </Alert>)
  }

  const { addAct, isError, isSuccess } = useAddAct({
    onAddActSuccess: (data) => {
      alertOk()
    }, onAddActError: () => {
      alertError()
    }
  })

  const formik = useFormik({
    initialValues: {
      act_number: '',
      action_state_id: '',
      app_number: '',
      city_id: '',
      company_name: '',
      contractor_type_id: '',
      counter_size_id: '',
      department_id: '',
      edrpou: '',
      fiz_name: '',
      goverment_name: '',
      house_number: '',
      is_central: false,
      is_consumer: '',
      personal_account: '',
      reg_date: '',
      region_id: '',
      street_id: '',
      unit_id: '',
      violation_type_id: ''
    }, onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        const data = {
          ...values,
          act_number: values.act_number,
          action_state_id: values.action_state_id,
          app_number: values.app_number,
          city_id: values.city_id,
          company_name: values.company_name,
          contractor_type_id: values.contractor_type_id,
          counter_size_id: values.counter_size_id,
          department_id: values.department_id,
          edrpou: values.edrpou,
          fiz_name: values.fiz_name,
          goverment_name: values.goverment_name,
          house_number: values.house_number,
          is_central: values.is_central,
          is_consumer: values.is_consumer,
          personal_account: values.personal_account,
          reg_date: values.reg_date,
          region_id: values.region_id,
          street_id: values.street_id,
          unit_id: values.unit_id,
          violation_type_id: values.violation_type_id
        }
        addAct(data)
        setSubmitting(false)
      }, 400)
    }
  })
  const { departments, isDepartmentsLoading } = useDepartments({
    regionId: formik.values.region_id
  })
  const { cities, isCitiesLoading, setSearch_city, search_city } = useCities({
    search_city: formik.values.search_city, department_id: formik.values.department_id
  })
  const { streets, isStreetsLoading, setSearch_Street, search_street } = useStreets({
    search_street: formik.values.search_street, city_id: formik.values.city_id
  })
  if (allInfoLoading) {
    return <Loading />
  }
  if (allInfoError) {
    return <ErrorLoad />
  }
  return (
    <Box
    sx={{ mt: 10, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <form onSubmit={formik.handleSubmit}>
    <Grid container justify='flex-end'>
      <Breadcrumbs aria-label='breadcrumb' maxItems={4}>
        <Link  to='/'>
          Головна
        </Link>
        <Link to='/acts'>
          Акти
        </Link>
        <Typography color='text.primary'>Реєстрація акту</Typography>


        <Button color='primary' variant='contained' type='submit' fullWidth>
          Зберегти
        </Button>
      </Breadcrumbs>
    </Grid>

    <Typography variant='h4' component='div' gutterBottom>
      Реєстрація акту
    </Typography>
      {isError && alertError()}
      { isSuccess && alertOk()}
    <Grid container spacing={6} columns={18}>



      <Grid item xs={6}>
        <Grid item xs>
          <InputLabel id='act_number'>Номер акту порушення </InputLabel>
          <TextField id='act_number' label='Номер акту' variant='outlined' fullWidth value={formik.values.act_number}
                     onChange={formik.handleChange}
                     error={formik.touched.act_number && Boolean(formik.errors.act_number)}
                     helperText={formik.touched.act_number && formik.errors.act_number} />
        </Grid>
        <Grid item xs>
          <DateTimePicker value={formik.values.reg_date} label='Введіть дату  та час реєстрації акту'
                          onChange={(date) => formik.setFieldValue('reg_date', date)}
                          ampm={false}
                          inputFormat='dd/M HH:mm'
                          fullWidth
                          renderInput={(params) => (<TextField
                            {...params} fullWidth
                            value={formik.values.reg_date ? (formik.values.reg_date) : ''} />)} />
        </Grid>
        <Grid item xs>
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
            {allInfo.unit.map((unit) => (<MenuItem key={unit.id} value={unit.id}>
              {unit.unit_name}
            </MenuItem>))}
          </Select>
          <FormControlLabel
            value={formik.values.is_central}
            control={<Checkbox />}
            label='Центральний підрозділ' />
        </Grid>

        <Grid item xs>
          <InputLabel id='violation_type_id'>Вид порушення</InputLabel>
          <Select
            labelId='violation_type_id'
            id='violation_type_id'
            name='violation_type_id'
            value={formik.values.violation_type_id}
            onChange={formik.handleChange}
            fullWidth
          >
            <MenuItem value=''>
              <em>Оберіть підрозділ</em>
            </MenuItem>
            {allInfo.violationType.map((violationType) => (<MenuItem key={violationType.id} value={violationType.id}>
              {violationType.violation_description + ' ' + violationType.violation_name}
            </MenuItem>))}
          </Select>
        </Grid>

        <Grid item xs>
          <InputLabel id='counter_size_id'>Типорозмір лічильника</InputLabel>
          <Select
            labelId='counter_size_id'
            id='counter_size_id'
            name='counter_size_id'
            value={formik.values.counter_size_id}
            onChange={formik.handleChange}
            fullWidth
          >
            <MenuItem value=''>
              <em>Оберіть розмір</em>
            </MenuItem>
            {allInfo.counterType.map((counterSize) => (<MenuItem key={counterSize.id} value={counterSize.id}>
              {counterSize.counter_size}
            </MenuItem>))}
          </Select>
        </Grid>

        <Grid item xs>
          <InputLabel id='action_state_id'>Статус дій по порушенню</InputLabel>
          <Select
            labelId='action_state_id'
            id='action_state_id'
            name='action_state_id'
            value={formik.values.action_state_id}
            onChange={formik.handleChange}
            fullWidth
          >
            <MenuItem value=''>
              <em>Оберіть статус дій</em>
            </MenuItem>
            {allInfo.actionStates.map((actionState) => (<MenuItem key={actionState.id} value={actionState.id}>
              {actionState.state}
            </MenuItem>))}
          </Select>
        </Grid>
      </Grid>


      <Grid item>
        <Typography variant='subtitle1' align='center'>Дільниця реєстрації</Typography>
        <Grid item xs>
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
            {allInfo.regions.map((region) => (<MenuItem key={region.id} value={region.id}>
              {region.region_name}
            </MenuItem>))}
          </Select>
        </Grid>

        {formik.values.region_id && !isDepartmentsLoading && departments && (<Grid item>

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
            {departments.map((department) => (<MenuItem key={department.id} label='Відділення' value={department.id}>
              {department.department_name}
            </MenuItem>))}
          </Select>
        </Grid>)}

        {formik.values.department_id && (<Grid item xs>
          <Autocomplete
            clearOnEscape={true}
            loading={!cities && isCitiesLoading}
            id='city_id'
            name='city_id'
            options={cities}
            getOptionLabel={(city) => city.city_name}
            value={formik.values.city_id}
            fullWidth
            onChange={(e, value) => {
              formik.setFieldValue('city_id', value?.id || '')

            }}
            inputValue={search_city}
            onInputChange={(e, newInputValue) => {
              if (newInputValue && newInputValue !== 'undefined') setSearch_city(newInputValue)
            }}
            renderInput={(params) => <TextField {...params} label='Місто' />} />
        </Grid>)}


        {formik.values.city_id && (<Grid item xs>
          <Autocomplete
            clearOnEscape={true}
            loading={!streets && isStreetsLoading}
            id='street_id'
            name='street_id'
            options={streets}
            getOptionLabel={(street) => street.street_name}
            value={formik.values.street_id}
            fullWidth
            onChange={(e, value) => {
              formik.setFieldValue('street_id', value?.id || '')

            }}
            inputValue={search_street}
            onInputChange={(e, newInputValue) => {
              if (newInputValue && newInputValue !== 'undefined') setSearch_Street(newInputValue)
            }}
            renderInput={(params) => <TextField {...params} label='Вулиця' />} />
        </Grid>)}


        <Grid item>

          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid item xs={5}>
              <TextField id='house_number' label='Номер будинку' variant='outlined' fullWidth
                         value={formik.values.house_number}
                         onChange={formik.handleChange}
                         error={formik.touched.house_number && Boolean(formik.errors.house_number)}
                         helperText={formik.touched.house_number && formik.errors.house_number}
                         InputProps={{
                           startAdornment: (<InputAdornment position='start'>
                             <MdHome />
                           </InputAdornment>)
                         }} />
            </Grid>

            <Grid item xs={5}>
              <TextField id='app_number' label='Номер квартири' variant='outlined' fullWidth
                         value={formik.values.app_number}
                         onChange={formik.handleChange}
                         error={formik.touched.app_number && Boolean(formik.errors.app_number)}
                         helperText={formik.touched.app_number && formik.errors.app_number}
                         InputProps={{
                           startAdornment: (<InputAdornment position='start'>
                             <MdApartment />
                           </InputAdornment>)
                         }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      <Grid item xs={6}>
        <Typography variant='subtitle1' align='center'>Тип контрагента </Typography>

        <Grid item>
          <Grid item xs>
            <InputLabel id='contractorTypeLabel'>Вид контрагента </InputLabel>
            <Select
              fullWidth
              labelId='contractorTypeLabel'
              id='contractor_type_id'
              name='contractor_type_id'
              value={formik.values.contractor_type_id}
              onChange={formik.handleChange}
            >
              <MenuItem value=''>Оберіть тип контрагента</MenuItem>
              {allInfo.contractorType.map((type) => (<MenuItem key={type.id} value={type.id}>
                {type.contractor_type_name}
              </MenuItem>))}
            </Select>
          </Grid>


          {formik.values.contractor_type_id && (<Grid item>
            <InputLabel id='is_consumerLabel'>Тип споживача</InputLabel>
            <Select
              fullWidth
              labelId='is_consumerLabel'
              id='is_consumer'
              name='is_consumer'
              value={formik.values.is_consumer}
              onChange={formik.handleChange}
            >
              <MenuItem value=''>Оберіть тип споживача</MenuItem>
              {allInfo.personType.map((type) => (<MenuItem key={type.id} value={type.id}>
                {type.type_name}
              </MenuItem>))}
            </Select>
          </Grid>)}


          {formik.values.is_consumer === 1 && formik.values.contractor_type_id === 1 && (<>
            <Grid item xs={6}>
              <TextField
                id='fiz_name'
                name='fiz_name'
                label='ПІБ'
                value={formik.values.fiz_name}
                onChange={formik.handleChange}
                error={formik.touched.fiz_name && Boolean(formik.errors.fiz_name)}
                helperText={formik.touched.fiz_name && formik.errors.fiz_name}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdPerson />
                  </InputAdornment>)
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='personal_account'
                name='personal_account'
                label='Особовий рахунок'
                value={formik.values.personal_account}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdAccountBox />
                  </InputAdornment>)
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='goverment_name'
                name='goverment_name'
                label='Назва установи \ Органу місцевого самоврядування'
                fullWidth
                value={formik.values.goverment_name}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdBuildCircle />
                  </InputAdornment>)
                }}
              />
            </Grid>
          </>)}
          {formik.values.is_consumer === 2 && formik.values.contractor_type_id === 1 && (<>
            <Grid item xs={12}>
              <TextField
                id='fiz_name'
                name='fiz_name'
                label='ПІБ'
                fullWidth
                value={formik.values.fiz_name}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdPerson />
                  </InputAdornment>)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='goverment_name'
                name='goverment_name'
                label='Назва установи \ Органу місцевого самоврядування'
                fullWidth
                value={formik.values.goverment_name}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdBuildCircle />
                  </InputAdornment>)
                }}
              />
            </Grid>
          </>)}
          {formik.values.is_consumer === 3 && formik.values.contractor_type_id === 1 && (<Grid item xs={12}>
              <TextField
                id='goverment_name'
                name='goverment_name'
                label='Назва установи \ Органу місцевого самоврядування'
                fullWidth
                value={formik.values.goverment_name}
                onChange={formik.handleChange}
                error={formik.touched.goverment_name & 123 & Boolean(formik.errors.goverment_name)}
                helperText={formik.touched.goverment_name && formik.errors.goverment_name}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdBuildCircle />
                  </InputAdornment>)
                }}
              />
            </Grid>

          )}

          {formik.values.contractor_type_id === 2 && formik.values.is_consumer === 1 && (<>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='company_name'
                name='company_name'
                label='Назва юридичної особи'
                value={formik.values.company_name}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdLocalPostOffice />
                  </InputAdornment>)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='edrpou'
                name='edrpou'
                label='ЕДРПО'
                value={formik.values.edrpou}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdLocalPostOffice />
                  </InputAdornment>)
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id='personal_account'
                name='personal_account'
                label='Особовий рахунок'
                value={formik.values.personal_account}
                onChange={formik.handleChange}
                error={formik.touched.personal_account && Boolean(formik.errors.personal_account)}
                helperText={formik.touched.personal_account && formik.errors.personal_account}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdAccountBox />
                  </InputAdornment>)
                }}
              />
            </Grid>
          </>)}
          {formik.values.contractor_type_id === 2 && formik.values.is_consumer === 2 && (<>
            <Grid item xs={12}>
              <TextField
                id='company_name'
                name='company_name'
                label='Назва юридичної особи'
                fullWidth
                value={formik.values.company_name}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdLocalPostOffice />
                  </InputAdornment>)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='edrpou'
                name='edrpou'
                label='ЕДРПО'
                fullWidth
                value={formik.values.edrpou}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (<InputAdornment position='start'>
                    <MdLocalPostOffice />
                  </InputAdornment>)
                }}
              />
            </Grid>
          </>)}
        </Grid>
      </Grid>
    </Grid>
    </form>
  </Box>)
}

//  let value = { ...values , violation_type_id: values.violation_type_id ,
//           counter_size_id: values.counter_size_id ,
//           action_state_id: values.action_state_id
//         };
//
//         if (value.is_consumer === 1 && value.contractor_type_id === 1) {
//           value = {
//             ...value,
//             fiz_name: value.fiz_name,
//             goverment_name: value.goverment_name,
//             personal_account: value.personal_account,
//             edrpou: '',
//             company_name: '',
//           };
//         } else if (value.is_consumer === 2 && value.contractor_type_id === 1) {
//           value = {
//             ...value,
//             fiz_name: value.fiz_name,
//             goverment_name: value.goverment_name,
//             personal_account: '',
//             edrpou: '',
//             company_name: '',
//           };
//         } else if (value.is_consumer === 3 && value.contractor_type_id === 1) {
//           value = {
//             ...value,
//             fiz_name: '',
//             goverment_name: value.goverment_name,
//             personal_account: '',
//             edrpou: '',
//             company_name: '',
//           };
//         } else if (value.is_consumer === 1 && value.contractor_type_id === 2) {
//           value = {
//             ...value,
//             fiz_name: '',
//             goverment_name: '',
//             personal_account: value.personal_account,
//             edrpou: value.edrpou,
//             company_name: value.company_name,
//           };
//         } else if (value.is_consumer === 2 && value.contractor_type_id === 2) {
//           value = {
//             ...value,
//             fiz_name: '',
//             goverment_name: '',
//             personal_account: '',
//             edrpou: value.edrpou,
//             company_name: value.company_name,
//           };
//         } else if (value.is_consumer === 3 && value.contractor_type_id === 2) {
//           value = {
//             ...value,
//             fiz_name: '',
//             goverment_name: '',
//             personal_account: '',
//             edrpou: '',
//             company_name: '',
//           };
//         }