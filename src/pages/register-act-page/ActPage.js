import React , {useState} from 'react'
import { useParams } from 'react-router-dom'

import { Box,   Tab, Tabs } from '@mui/material'
import {TabContext, TabPanel} from "@material-ui/lab";

import { ErrorLoad, Loading, ViolationAct } from '../../components'
import { useGetAct   } from '../../hooks'
import { LaboratoryActPage } from '../laboratory'
export const ActPage = ({ user }) => {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { id } = useParams()
  // const { data : labData , isLoading:  isLabLoading , isError:  isLabError } = useGetPLGAct({id})
  const { data, isLoading, error } = useGetAct({ id })
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorLoad error={error} />
  }
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider', mt:12, borderTop: 1 }}>
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
          <Tab label='Нарахування АТ  Експертизи' value='4' />
          <Tab label='Метрологія та ВЕБ' value='5' />
          <Tab label='Юридичне супроводження порушень' value='6' />
        </Tabs>
      </Box>
      <TabPanel value='1'><ViolationAct act={data}/></TabPanel>
      <TabPanel value='2'><LaboratoryActPage act={data}/></TabPanel>
      <TabPanel value='3'>Комісія з розгляду актів про порушення</TabPanel>
      <TabPanel value='4'>Нарахування  АТ Експертизи</TabPanel>
      <TabPanel value='5'>Метрологія та ВЕБ</TabPanel>
      <TabPanel value='6'>Юридичне супроводження порушень</TabPanel>
    </TabContext>
  );
}







