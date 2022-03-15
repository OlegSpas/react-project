import * as React from 'react';
import { visuallyHidden } from '@mui/utils';
import { Container, Box, Table, TableBody, TableCell, TableHead,
  TableRow, TableSortLabel, Paper,TableContainer } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import InvestmentsData from '../../fakeData/investmentsData.json';
import Row from './investmentsListRow.tsx';



function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Company',
  },
  {
    id: 'industry',
    numeric: false,
    disablePadding: true,
    label: 'Industry',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  }
];

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = 
  (property: keyof IInvestmentsData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead> 
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{
              paddingTop:0,
              paddingLeft:0,
              paddingRight:0,
              paddingBottom:'2%',
              borderBottom:'3px solid #000',
              '&:first-of-type':{
                width:{xs:'100%',md:'500px',xl:'615px'},
                marginRight:"30px",
              },
              '&:nth-of-type(2)':{
                display:{xs:'none',md:'table-cell'}
              },
              '&:nth-of-type(3)':{
                display:{xs:'none',lg:'table-cell'}
              }
            }}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={ArrowDropUpIcon}
              sx={{
                transition:'border-top .2s ease',
                borderTop: '2px solid #DCDCDC',
                width:{xs:'100%',md:'86%'},
                display:'flex',
                justifyContent:"space-between",
                fontSize:"16px",
                lineHeight:'28px',
                fontWeight:'700',
                marginBottom:{xs:'7%',sm:'3%',lg:'2%',xl:'1%'},
                '&:focus':{
                  borderTop: '2px solid #000',
                }
              }}>
               {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function InvestmentsList() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof IInvestmentsData>('name');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IInvestmentsData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  return (
    <Box sx={{ width: '100%', marginTop:{xs:'70px',sm:'100px'}, marginBottom:{xs:'70px', sm:'100px'} }}>
      <Container maxWidth="xl">
        <Paper sx={{ 
          width: '100%', 
          mb: 2,
          boxShadow:'none',
        }}>
          <TableContainer>
            <Table
              sx={{ 
                minWidth: {xs:'200px',sm:'700px',md:'700px',lg:'750px'} 
                }}
              aria-labelledby="tableTitle">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}/>
              <TableBody >
                {stableSort(InvestmentsData.investments, getComparator(order, orderBy))
                  .map((row, index) => {
                    return(
                      <Row key={row.name} {...row} />
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
}
