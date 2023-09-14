import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Table, TableContainer, TableBody, TableCell, TablePagination, TableSortLabel, TableRow, TableHead } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import SearchAppBar from './SearchTable'
import { stableSort, getComparator } from './sortTable'
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
export default function EnhancedTable({ query }) {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('actNumber')
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const rows = query.data.data && query.data.data.map((act) => createData(act.id, act.act_number, act.reg_date, act.violation_type.violation_description + ' ' + act.violation_type.violation_name, act.action_state.state, act.counter_size.counter_size, act.region.region_name + ' , ' + act.city.city_name, act.department.department_name, act.unit.unit_name, act.contractor_type.contractor_type_name, act.is_consumer === 1 ? 'Споживач' : 'Не споживач'))

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }
    setSelected(newSelected), navigate(`/act/${query.data.data.id}`)
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (id) => selected.indexOf(id) !== -1

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const visibleRows = stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headCells = [{ id: 'actNumber', label: '№ Акта' }, {
    id: 'regDate', label: 'Дата реєстрації'
  }, { id: 'violationType', label: 'Тип порушення' }, {
    id: 'actionState', label: 'Статус дії по порушенню'
  }, { id: 'counterSize', label: 'Типорозмір' }, { id: 'regionCity', label: 'Область/місто ' }, {
    id: 'department', label: 'Відділення'
  }, { id: 'unit', label: 'Дільниця' }, { id: 'contractorType', label: 'Вид контрагента' }, {
    id: 'consumerStatus', label: 'Споживач/не споживач'
  }]
  return (
    <Box sx={{ width: '100%'} } >
      <SearchAppBar setSearchValue={setSearchValue} searchValue={searchValue} />
      <Paper sx={{ width: '100%'}}>
        <TableContainer >
          <Table sx={{ minWidth: 750 , mb: 10 }} aria-labelledby='tableTitle' size='medium'>
            <TableHead>
              <TableRow sx={{ backgroundColor : '#f5f5f6' }}>
                <TableCell padding='checkbox'>
                  <input
                    type='checkbox'
                    onChange={handleSelectAllClick}
                    checked={selected.length === rows.length}
                  />
                </TableCell>
                {headCells.map((headCell) => (<TableCell
                  key={headCell.id}
                  align='right'
                  padding='normal'
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={(e) => handleRequestSort(e, headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => (<TableRow
                key={row.id}
                hover
                onClick={(event) => handleClick(event, row.id)}
                role='checkbox'
                aria-checked={isSelected(row.id)}
                tabIndex={-1}
                selected={isSelected(row.id)}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell padding='checkbox'>
                  <input type='checkbox' checked={isSelected(row.id)} />
                </TableCell>
                <TableCell align='right'>{row.actNumber}</TableCell>
                <TableCell align='right'>{row.regDate}</TableCell>
                <TableCell align='right'>{row.violationType}</TableCell>
                <TableCell align='right'>{row.actionState}</TableCell>
                <TableCell align='right'>{row.counterSize}</TableCell>
                <TableCell align='right'>{row.regionCity}</TableCell>
                <TableCell align='right'>{row.department}</TableCell>
                <TableCell align='right'>{row.unit}</TableCell>
                <TableCell align='right'>{row.contractorType}</TableCell>
                <TableCell align='right'>{row.consumerStatus}</TableCell>
              </TableRow>))}
              {emptyRows > 0 && (<TableRow
                style={{
                  height: 53 * emptyRows
                }}
              >
                <TableCell colSpan={12} />
              </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'Всі', value: -1 }]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ width: '100%' }}
        />
      </Paper>
    </Box>)
}