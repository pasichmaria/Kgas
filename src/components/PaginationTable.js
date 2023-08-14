import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import { MdFirstPage, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLastPage } from 'react-icons/md'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'


function TablePaginationActions(props) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (<Box sx={{ flexShrink: 0, ml: 2.5 }}>
    <IconButton
      onClick={handleFirstPageButtonClick}
      disabled={page === 0}
      aria-label='first page'
    >
      {theme.direction === 'rtl' ? <MdLastPage /> : <MdFirstPage />}
    </IconButton>
    <IconButton
      onClick={handleBackButtonClick}
      disabled={page === 0}
      aria-label='previous page'
    >
      {theme.direction === 'rtl' ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
    </IconButton>
    <IconButton
      onClick={handleNextButtonClick}
      disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      aria-label='next page'
    >
      {theme.direction === 'rtl' ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
    </IconButton>
    <IconButton
      onClick={handleLastPageButtonClick}
      disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      aria-label='last page'
    >
      {theme.direction === 'rtl' ? <MdFirstPage /> : <MdLastPage />}
    </IconButton>
  </Box>)
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
}

function createData(id, actNumber, regDate, violationType, actionState, counterSize, regionCity, department, unit, contractorType, consumerStatus) {
  return {
    id,
    actNumber,
    regDate,
    violationType,
    actionState,
    counterSize,
    regionCity,
    department,
    unit,
    contractorType,
    consumerStatus
  }
}

export const CustomPaginationActionsTable = ({ total, perPage, query }) => {

  const navigate = useNavigate()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(perPage)
  const [searchValue, setSearchValue] = React.useState('')

  const rows = query.data.data && query.data.data.map((act) => createData(act.id, act.act_number, act.reg_date, act.violation_type.violation_description + ' ' + act.violation_type.violation_name, act.action_state.state, act.counter_size.counter_size, act.region.region_name + ' , ' + act.city.city_name, act.department.department_name, act.unit.unit_name, act.contractor_type.contractor_type_name, act.is_consumer === 1 ? 'Споживач' : 'Не споживач'))

  const filteredRows = rows.filter((act) => act.actNumber.toLowerCase().includes(searchValue.toLowerCase()) || act.regDate.toLowerCase().includes(searchValue.toLowerCase()) || act.violationType.toLowerCase().includes(searchValue.toLowerCase()) || act.actionState.toLowerCase().includes(searchValue.toLowerCase()) || act.counterSize.toLowerCase().includes(searchValue.toLowerCase()) || act.regionCity.toLowerCase().includes(searchValue.toLowerCase()) || act.department.toLowerCase().includes(searchValue.toLowerCase()) || act.unit.toLowerCase().includes(searchValue.toLowerCase()) || act.contractorType.toLowerCase().includes(searchValue.toLowerCase()) || act.consumerStatus.toLowerCase().includes(searchValue.toLowerCase()))

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows?.length) : 0
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
    setPage(0)
  }
  return (
    <TableContainer sx={{ mt: 10 }} component={Paper}>
    <>
      <Button variant='contained' onClick={() => navigate('/newAct')}
              sx={{ width: '100%' }}>Створити акт</Button>
      <TextField
        sx={{ mb: 4, width: '100%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', borderRadius: '5px' }}
        label='Знайти акт'
        variant='outlined'
        value={searchValue}
        onChange={handleSearchChange}
      />
    </>

    <Table stickyHeader aria-label='custom pagination table'>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }].filter((option) => option <= total)}
            colSpan={10}
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page'
              }, native: true
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
      <TableBody>
        {(rowsPerPage > 0 ? filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : filteredRows).map((row) => (
          <TableRow key={row.id}>
            <TableCell style={{ width: 160 }} component='th' scope='row'>
              <Link to={`/act/${row.id}`}>{row.id}</Link>
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.actNumber}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.regDate}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.violationType}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.actionState}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.counterSize}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.regionCity}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.department}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.unit}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.contractorType}
            </TableCell>
            <TableCell style={{ width: 160 }} align='right'>
              {row.consumerStatus}
            </TableCell>
          </TableRow>))}

        {emptyRows > 0 && (<TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={10} />
        </TableRow>)}
      </TableBody>
    </Table>
  </TableContainer>)
}

