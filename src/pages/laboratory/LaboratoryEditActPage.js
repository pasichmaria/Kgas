import { Box, Breadcrumbs, TextField, Link, Grid, Typography, Select, MenuItem, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { validateLaboratoryAct } from '../../formik/formik'
import { ConfirmSaveDialog, FileUpload } from '../../components'
import { DateTimePicker } from '@mui/x-date-pickers'

export const LaboratoryEditActPage = ({ act }) => {
  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      date_arrived_to_SC: '',
      meter_type_size: '',
      meter_brand: '',
      actual_expertise_date: '',
      expertise_report_issue_date: '',
      manufacturing_year: '',
      meter_serial_number: '',
      meter_readings_on_expertise_date: '',
      expertise_result: '',
      expertise_report_number: '',
      consumer_presence_at_the_commission: '',
      invalidity_certificate: '',
      power_of_attorney: '',
      video_and_photo_of_expertise: '',
      document_confirming_the_call_for_expertise: ''
    }, validationSchema: validateLaboratoryAct, onSubmit: (values) => {
      console.log(values),
        <Link to={`/act/${act.id}/laboratory`} />

    }
  })
  return (<Box sx={{
      mt: 18,
      m: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      mb: 15
    }}
               component='form'
               onSubmit={formik.handleSubmit}
    >
      <Typography variant='h4' component='h2' gutterBottom>
        Лабораторія ПЛГ
      </Typography>
      <Grid container justify='flex-end'>
        <Breadcrumbs aria-label='breadcrumb' maxItems={3}>
          <Link
            sx={{ display: 'flex', alignItems: 'center', color: activeTab === 0 ? 'blue' : 'inherit' }}
            underline='hover'
            onClick={() => handleTabClick(0)} to='/acts'
          >
            Акти порушень
          </Link>
          <Link
            sx={{ display: 'flex', alignItems: 'center', color: activeTab === 1 ? 'blue' : 'inherit' }}
            underline='hover'
            onClick={() => handleTabClick(1)}
            to={-1}
          >Лабораторія ПЛГ
          </Link>
          <ConfirmSaveDialog submit={formik.handleSubmit} />
        </Breadcrumbs>
      </Grid>
      <Grid container spacing={6} columns={18}>


        <Grid item xs={6}>
          <Grid item xs>
            <InputLabel id='meter_type_size'>Типорозмір</InputLabel>
            <Select
              fullWidth
              id='meter_type_size'
              name='meter_type_size'
              label='Тип та розмір лічильника'
              value={formik.values.meter_type_size}
              onChange={formik.handleChange}
              error={formik.touched.meter_type_size && Boolean(formik.errors.meter_type_size)}
              helperText={formik.touched.meter_type_size && formik.errors.meter_type_size}
            >
              <MenuItem value=''>
                <em>Оберіть типорозмір</em>
              </MenuItem>
              <MenuItem value={10}>Тип 1</MenuItem>
              <MenuItem value={20}>Тип 2</MenuItem>
              <MenuItem value={30}>Тип 3</MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <InputLabel id='meter_brand'>Марка лічильника</InputLabel>
            <Select
              fullWidth
              id='meter_brand'
              name='meter_brand'
              label='Марка лічильника'
              value={formik.values.meter_brand}
              onChange={formik.handleChange}
              error={formik.touched.meter_brand && Boolean(formik.errors.meter_brand)}
              helperText={formik.touched.meter_brand && formik.errors.meter_brand}
            >
              <MenuItem value=''>
                <em>Оберіть марку</em>
              </MenuItem>
              <MenuItem value={10}>Марка 1</MenuItem>
              <MenuItem value={20}>Марка 2</MenuItem>
              <MenuItem value={30}>Марка 3</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <TextField
              id='manufacturing_year'
              name='manufacturing_year'
              label='Рік виготовлення'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.manufacturing_year}
            />
          </Grid>
          <Grid item>
            <TextField
              id='meter_serial_number'
              name='meter_serial_number'
              label='Заводський номер лічильника'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.meter_serial_number}
            />
          </Grid>
          <Grid item>
            <TextField
              id='meter_readings_on_expertise_date'
              name='meter_readings_on_expertise_date'
              label='Показники лічильника на дату проведення експертизи'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.meter_readings_on_expertise_date}
            />
          </Grid>
        </Grid>
        <Grid item xs={4}>

          <Grid item>
            <DateTimePicker
              label='Фактична дата проведення експертизи'
              value={formik.values.actual_expertise_date}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item>
            <DateTimePicker
              label='Дата видачі експертного висновку'
              value={formik.values.expertise_report_issue_date}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs>
            <DateTimePicker
              fullWidth
              id='date_arrived_to_SC'
              name='date_arrived_to_SC'
              label='Дата надходження акту до СЦ'
              value={formik.values.date_arrived_to_SC}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item sx={{ mt: 4 }}>
            <FileUpload
              type='file'
              accept={'file/*'}
              buttonText={'Підтвердження виклика на експертизу'}
              value={formik.values.video_and_photo_of_expertise}
              onChange={(event) => {
                formik.setFieldValue('video_and_photo_of_expertise'), event.target.files[0]
              }}
            />
          </Grid>
        </Grid>


        <Grid item xs={6}>
          <Grid item>
            <InputLabel id='expertise_result'>Результат експертизи</InputLabel>
            <Select
              fullWidth
              id='expertise_result'
              name='expertise_result'
              label='Результат експертизи'
              value={formik.values.expertise_result}
              onChange={formik.handleChange}
            >
              <MenuItem value=''>
                <em>Оберіть результат</em>
              </MenuItem>
              <MenuItem value={10}>Результат 1</MenuItem>
              <MenuItem value={20}>Результат 2</MenuItem>
              <MenuItem value={30}>Результат 3</MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <InputLabel id='consumer_presence_at_the_commission'>Присутність споживача</InputLabel>
            <Select
              fullWidth
              label='Присутність споживача'
              id='consumer_presence_at_the_commission'
              name='consumer_presence_at_the_commission'
              value={formik.values.consumer_presence_at_the_commission}
              onChange={formik.handleChange}
            >
              <MenuItem value=''>
                <em>Оберіть тип</em>
              </MenuItem>
              <MenuItem value={10}>Присутній</MenuItem>
              <MenuItem value={20}>Відсутній</MenuItem>
            </Select>
          </Grid>


          <Grid item>
            <TextField
              id='expertise_report_number'
              name='expertise_report_number'
              label='Номер експертного висновку'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.expertise_report_number}
            />
          </Grid>


          <Grid sx={{ mt: 5 }}>
            <FileUpload

              type='file'
              accept={'image/*'}
              buttonText={'Довідка про непридатність'}
              value={formik.values.invalidity_certificate}
              onChange={(event) => {
                formik.setFieldValue('invalidity_certificate', event.target.files[0])
              }}
            />
          </Grid>

            <Grid xs={8} item sx={{ mt: 4 }}>
              <FileUpload
                type='file'
                accept={'file/*'}
                buttonText={'Довіреність'}
                value={formik.values.power_of_attorney}
                onChange={(event) => {
                  formik.setFieldValue('power_of_attorney'), event.target.files[0]
                }}
              />
            </Grid>
          <Grid xs={8} item sx={{ mt: 4 }}>
              <FileUpload
                type='file'
                accept={'file/*'}
                buttonText={'Підтвердження виклика на експертизу'}
                value={formik.values.video_and_photo_of_expertise}
                onChange={(event) => {
                  formik.setFieldValue('video_and_photo_of_expertise'), event.target.files[0]
                }}
              />
            </Grid>
        </Grid>

            <Grid item sx={{ mt: 4 }}>
          </Grid></Grid>

    </Box>


  )
}