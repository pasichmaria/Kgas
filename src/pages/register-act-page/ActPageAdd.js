import { useFormik } from 'formik'
import React, { useState } from 'react'
import { DateTimePicker } from '@mui/x-date-pickers'
import { Box, Breadcrumbs, Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField, Typography, Button } from '@mui/material'

import { ConfirmSaveDialog, FileUpload } from '../../components'
import { validateAdditionalInfo } from '../../formik/formik'
import { Link, useNavigate } from 'react-router-dom'

export const ActPageAdd = ( {act}) => {
  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }
const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      photo_passport_user: '',
      photo_indef_user: '',
      photo_violation: '',
      pasport_na_zvt: '',
      act_znyattya_zvt: '',
      act_vidklychennya_objecta: '',
      tech_pasport_objecta: '',
      act_obst: '',
      passport_GSO: '',
      video_violation: '',

      storona_ZVT: '',
      date_vidpravky_ZVT: '',
      date_ostannogo_povirky: '',
      counter_type: '',
      isIntrusion: false,
      conter_number: ''

    }, validateAdditionalInfo,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleAgree = () => {
    setOpen(false)
  }
  const handleDisagree = () => {
    setOpen(false)
  }

  const handleIntrusionChange = (event) => {
    formik.setFieldValue('isIntrusion', event.target.checked)
  }

  return (
    <>
  <Box
      sx={{mt : 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        m: 8,
        rowGap: '60px'
      }}
      component='form'
      onSubmit={formik.handleSubmit}
    >
      <Typography variant='h4' component='h2' gutterBottom>
        Додаткова інформація про акт порушення
      </Typography>
    <Grid container justify="flex-end">
    <Breadcrumbs aria-label='breadcrumb' maxItems={2}>
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
    >Акт порушення
    </Link>
      <ConfirmSaveDialog  submit={formik.handleSubmit} />

  </Breadcrumbs>
    </Grid>
      <Grid container spacing={6} columns={16}>
        <Grid item xs={6}>
          <Grid item spacing={6} columns={16}>
            <Grid item xs sx={{ mt: 4 }}>
              <FileUpload
                type='file'
                accept={'image/*'}
                buttonText={'Фото паспорта споживача'}
                value={formik.values.photo_passport_user}
                onChange={(event) => {
                  formik.setFieldValue('photo_passport_user', event.target.files[0])
                }}
              />
            </Grid>
            <Grid item xs={4} sx={{ mt: 4 }}>
              <FileUpload
                type='file'
                accept={'image/*'}
                buttonText={'Фото ІК споживача'}
                value={formik.values.photo_indef_user}
                onChange={(event) => {
                  formik.setFieldValue('photo_indef_user'), event.target.files[0]
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs sx={{ mt: 4 }}>
            <FileUpload
              type='file'
              accept={'image/*'}
              buttonText={'Фото фіксація порушення'}
              value={formik.values.photo_violation}
              onChange={(event) => {
                formik.setFielValue('photo_violation'), event.target.files[0]
              }}
            />
          </Grid>
          <Grid item xs sx={{ mt: 4 }}>
            <FileUpload
              type='file'
              accept={'file/*'}
              buttonText={'Паспорт на ЗВТ'}
              value={formik.values.pasport_na_zvt}
              onChange={(event) => {
                formik.setFieldValue('pasport_na_zvt'), event.target.files[0]
              }}
            />
          </Grid>
          <Grid item xs sx={{ mt: 4 }}>
            <FileUpload
              type='file'
              accept={'file/*'}
              buttonText={'Акт зняття/ встановлення на держповірку'}
              value={formik.values.act_znyattya_zvt}
              onChange={(event) => {
                formik.setFieldValue('act_znyattya_zvt'), event.target.files[0]
              }}
            />
          </Grid>
          <Grid item xs sx={{ mt: 4 }}>
            <FileUpload
              buttonText={'Акт відключення об\'єкта'}
              type='file'
              accept={'file/*'}
              value={formik.values.act_vidklychennya_objecta}
              onChange={(event) => {
                formik.setFieldValue('act_vidklychennya_objecta'), event.target.files[0]
              }}
            />
          </Grid>


        </Grid>


        <Grid item xs={4}>
          <Grid item xs sx={{ mt: 4 }}>
            <FileUpload
              type='file'
              accept={'mp4/*'}
              buttonText={'Відео фіксація порушення'}
              value={formik.values.video_violation}
              onChange={(event) => {
                formik.setFieldValue('video_violation'), event.target.files[0]
              }}
            />
          </Grid>
          <Grid item xs sx={{ mt: 4 }}>
            <FileUpload
              type='file'
              accept={'file/*'}
              buttonText={'Технічний паспорт на об\'єкт спож.'}
              value={formik.values.tech_pasport_objecta}
              onChange={(event) => {
                formik.setFieldValue('video_violation'), event.target.files[0]
              }}
            />
          </Grid>
          <Grid item xs sx={{ mt: 4 }}>
            <FileUpload
              type='file'
              accept={'file/*'}
              buttonText={'Акт обстеження'}
              value={formik.values.act_obst}
              onChange={(event) => {
                formik.setFieldValue('act_obst'), event.target.files[0]
              }}
            />
          </Grid>
          <Grid item xs sx={{ mt: 4 }}>
            <FileUpload
              type='file'
              accept={'file/*'}
              buttonText={'Паспорт ГСО'}
              value={formik.values.passport_GSO}
              onChange={(event) => {
                formik.setFieldValue('passport_GSO'), event.target.files[0]
              }} />
          </Grid>

        </Grid>


        <Grid item xs sx={{ mt: 4 }}>
          <FormControlLabel
            control={<Checkbox
              checked={formik.values.isIntrusion}
              onChange={handleIntrusionChange}
            />}
            label='Чи було втручання в работу ЗВТ?'
          />

          {formik.values.isIntrusion === true && (<>
            <TextField
              fullWidth
              id='storona_ZVT'
              name='storona_ZVT'
              label='Сторона, відповідальна за доставку ЗВТ на експертизу'
              type='text'
              value={formik.values.storona_ZVT}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
            <Grid item xs sx={{ mt: 4 }}>
              <DateTimePicker
                id='date_vidpravky_ZVT'
                name='date_vidpravky_ZVT'
                label='Дата відправлення ЗВТ на експертизу'
                value={formik.values.date_vidpravky_ZVT}
                onChange={formik.handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs sx={{ mt: 4 }}>
              <DateTimePicker
                id='date_ostannogo_povirky'
                name='date_ostannogo_povirky'
                label='Дата останньої повірки'
                value={formik.values.date_ostannogo_povirky}
                onChange={formik.handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item xs sx={{ mt: 4 }}>
              <Select
                fullWidth
                id='counter_type'
                name='counter_type'
                label='Тип лічильника'
                value={formik.values.counter_type}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs sx={{ mt: 4 }}>
              <TextField
                fullWidth
                id='counter_number'
                name='counter_number'
                label='Номер лічильника'
                type='text'
                value={formik.values.counter_number}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </>)}
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
      </Box>
    </Box>
  </>)
}