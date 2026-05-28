"use client";
import React from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Account from "../my-list/account";

const Orders = () => {

  return (
    <div className="bg-gray-200 py-12">
      <div className="container">
        <div className="flex flex-col w-full lg:flex-row lg:w-[80%] m-auto gap-12">
          <div className="col1 rounded-md bg-white shadow-md h-auto w-full lg:w-[70%]">
            <div className="p-5 border-b-1 border-[rgba(0,0,0,0.1)]">
              <h3 className="text-[18px] font-[600]">My List</h3>
              <p>
                There are<span className="text-primary font-[700]"> 7 </span>
                products in my List
              </p>
            </div>

            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                gfghgf
              </TableCell>
              <TableCell align="right">56456</TableCell>
              <TableCell align="right">7457</TableCell>
              <TableCell align="right">577</TableCell>
              <TableCell align="right">vhj</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}
              >
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      History
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Customer</TableCell>
                          <TableCell align="right">Amount</TableCell>
                          <TableCell align="right">Total price ($)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                       
                          <TableRow>
                            <TableCell component="th" scope="row">
                              56756
                            </TableCell>
                            <TableCell>56756</TableCell>
                            <TableCell align="right">
                           6757
                            </TableCell>
                            <TableCell align="right">
                              {Math.round(5757567 * 56756756 * 100) /
                                100}
                            </TableCell>
                          </TableRow>
                 
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Orders;
