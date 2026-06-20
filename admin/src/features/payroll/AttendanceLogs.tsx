import { useState } from 'react';
import { PageContent } from "@/components/common/PageContent";
import { PageHeader } from "@/components/common/PageHeader";
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

type Row = {
  sr: number;
  name: string;
  designation: string;
  paidDays: number;
  incentiveHrs: number;
  rateDay: number;
  prAmt: number;
  incentiveAmt: number;
  totalWage: number;
  grossSalary: number;
  epf: number;
  esiEmp: number;
  profTax: number;
  bankAdvance: number;
  cashAdvance: number;
  loan: number;
};

const employees = ['All Employees', 'NIRAJ KUMAR NEHALI PATEL', 'GAURAV VINOD PRASAD GUPTA', 'AMRESH BHOLA MAHTO'];
const months = ['All Months', 'January', 'February', 'March', 'April'];
const years = ['2024', '2025', '2026'];
const sites = ['All Sites', 'Site A', 'Site B', 'Site C'];
const groups = ['All Groups', 'Group 1', 'Group 2', 'Group 3'];

const sampleRows: Row[] = [
  { sr: 1, name: 'NIRAJ KUMAR NEHALI PATEL', designation: 'TECHNICIAN', paidDays: 7, incentiveHrs: 4, rateDay: 635, prAmt: 4442, incentiveAmt: 160, totalWage: 4602, grossSalary: 4630, epf: 449, esiEmp: 0, profTax: 0, bankAdvance: 0, cashAdvance: 0, loan: 1000 },
  { sr: 2, name: 'GAURAV VINOD PRASAD GUPTA', designation: 'WELDER', paidDays: 3, incentiveHrs: 0, rateDay: 1000, prAmt: 3000, incentiveAmt: 0, totalWage: 3000, grossSalary: 3012, epf: 192, esiEmp: 0, profTax: 0, bankAdvance: 0, cashAdvance: 0, loan: 0 },
  { sr: 3, name: 'AMRESH BHOLA MAHTO', designation: 'RIGGER', paidDays: 10, incentiveHrs: 84, rateDay: 390, prAmt: 3900, incentiveAmt: 8190, totalWage: 12090, grossSalary: 12130, epf: 627, esiEmp: 91, profTax: 393, bankAdvance: 200, cashAdvance: 4000, loan: 0 },
];

export const AttendanceLogs = () => {
  const [employee, setEmployee] = useState('All Employees');
  const [month, setMonth] = useState('All Months');
  const [year, setYear] = useState('2026');
  const [site, setSite] = useState('All Sites');
  const [group, setGroup] = useState('All Groups');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <PageHeader
        title="Attendance Logs"
        icon="ReceiptLong"
        sx={{ mb: 0.5, padding: 1.5 }}
      />

      <PageContent sx={{ padding: "10px" }}>

        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', mb: 2 }}>

          <FormControl fullWidth size="small">
            <InputLabel>Year</InputLabel>
            <Select value={year} label="Year" onChange={(e) => setYear(e.target.value)}>
              {years.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel>Month</InputLabel>
            <Select value={month} label="Month" onChange={(e) => setMonth(e.target.value)}>
              {months.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>



          <FormControl fullWidth size="small">
            <InputLabel>Site</InputLabel>
            <Select value={site} label="Site" onChange={(e) => setSite(e.target.value)}>
              {sites.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel>Group</InputLabel>
            <Select value={group} label="Group" onChange={(e) => setGroup(e.target.value)}>
              {groups.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel>Employee</InputLabel>
            <Select value={employee} label="Employee" onChange={(e) => setEmployee(e.target.value)}>
              {employees.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            width: '100%',
            maxHeight: '75vh',
            overflow: 'auto',
            border: '1px solid rgba(224,224,224,1)',
            borderRadius: "5px",
            boxShadow: 'none',
          }}
        >
          <Table
            stickyHeader
            size="small"
            sx={{
              minWidth: 1200,
              '& .MuiTableCell-head': {
                fontSize: '0.75rem',
                py: 0.5,
                position: 'sticky',
                top: 0,
                zIndex: 3,
              },
              '& .MuiTableCell-body': { fontSize: '0.70rem', py: 0.5 },
            }}
            aria-label="attendance table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Name of worker</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell align="right">Paid days</TableCell>
                <TableCell align="right">Incentive Hrs.</TableCell>
                <TableCell align="right">Rate/day</TableCell>
                <TableCell align="right">Pr.Amt.</TableCell>
                <TableCell align="right">Incentive Amt.</TableCell>
                <TableCell align="right">Total Wage</TableCell>
                <TableCell align="right">Gross Salary</TableCell>
                <TableCell align="right">EPF</TableCell>
                <TableCell align="right">ESIC (Emp)</TableCell>
                <TableCell align="right">Prof. Tax</TableCell>
                <TableCell align="right">Bank Advance</TableCell>
                <TableCell align="right">Cash Advance</TableCell>
                <TableCell align="right">Loan</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleRows.map((row) => (
                <TableRow hover key={row.sr}>
                  <TableCell align="center">{row.sr}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">{row.designation}</TableCell>
                  <TableCell align="center">{row.paidDays}</TableCell>
                  <TableCell align="center">{row.incentiveHrs}</TableCell>
                  <TableCell align="center">{row.rateDay}</TableCell>
                  <TableCell align="center">{row.prAmt}</TableCell>
                  <TableCell align="center">{row.incentiveAmt}</TableCell>
                  <TableCell align="center">{row.totalWage}</TableCell>
                  <TableCell align="center">{row.grossSalary}</TableCell>
                  <TableCell align="center">{row.epf}</TableCell>
                  <TableCell align="center">{row.esiEmp}</TableCell>
                  <TableCell align="center">{row.profTax}</TableCell>
                  <TableCell align="center">{row.bankAdvance}</TableCell>
                  <TableCell align="center">{row.cashAdvance}</TableCell>
                  <TableCell align="center">{row.loan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageContent>
    </Box>
  );
}