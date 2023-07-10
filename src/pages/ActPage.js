import React from 'react'
import { useParams } from 'react-router-dom'

import {Box, Tab, Tabs} from '@mui/material';
import {TabContext, TabPanel} from "@material-ui/lab";

import { ViolarionAct } from '../components'
import { useGetAct } from '../hooks'
export const ActPage = ({ user }) => {
  const [value, setValue] = React.useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { id } = useParams()
  const { data, isLoading, error } = useGetAct({ id })
  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider', mt: 10, borderTop: 1 }}>
        <Tabs
          textColor='secondary'
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >

          <Tab label='Акт порушення' value='1' />
          <Tab label='Лабораторія повірки ПЛГ' value='2' />
          <Tab label='Комісія з розгляду актів про порушення' value='3' />
          <Tab label='Нарахування та оплати на рахунок АТ  Експертизи' value='4' />
          <Tab label='Погодження рохрахунків по метрології та ВЕБ' value='5' />
          <Tab label='Юридичне супроводження порушень' value='6' />
          <Tab label='tab 7 ' value = '7' />
        </Tabs>
      </Box>
      <TabPanel value='1'><ViolarionAct act={data} /> </TabPanel>
      <TabPanel value='2'>Лабораторія повірки ПЛГ</TabPanel>
      <TabPanel value='3'>Комісія з розгляду актів про порушення</TabPanel>
      <TabPanel value='4'>Нарахування та оплати на рахунок АТ Експертизи</TabPanel>
      <TabPanel value='5'>Погодження рохрахунків по метрології та ВЕБ</TabPanel>
      <TabPanel value='6'>Юридичне супроводження порушень</TabPanel>
    <TabPanel value='7'>7</TabPanel>
    </TabContext>
  );
}







