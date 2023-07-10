import React from 'react'
import {Table, TableHead, TableRow, TableCell, TableBody, Box, Container} from '@mui/material';

const data = [
  {
    id : 1, report : 'Звіт 01.01.2020', period : 'Звітний період 2020 рік', date : '01.01.2020', moreInfo : 'Звіт про виконання плану роботи на 2020 рік'
  },
  {
    id : 2 , report: 'Наказ 23.04.2021', period : 'Звітний період 2021 рік', date : '23.04.2021', moreInfo : 'Наказ про неоплачувану відпустку'

  },
  {
    id: 3 , report: 'Звіт 01.01.2021', period : 'Звітний період 2022 рік', date : '01.01.2022', moreInfo : 'Звіт про виконання плану роботи на 2021 рік'
  },
]
export const InternalDocumentsPage = () => {
  return (
    <Container maxWidth='xl'>
      <Box sx={{borderBottom: 2, borderColor: 'divider', borderTop: 1}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell> Внутрішні документи</TableCell>
              <TableCell>Наказ</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Додаткові відомості</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.report}</TableCell>
                <TableCell>{item.period}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.moreInfo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};
