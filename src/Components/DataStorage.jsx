import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function Datastorage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Register'
        );
        if (response.ok) {
          const result = await response.json();
          setData(result);
        //   navigate('/Register');
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (row) => {
    navigate('/Register', { state: { rowData: row } });
  };

  const handleDelete = async (id) => {
 {
      try {
        await fetch(`https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Register/${id}`, {
          method: 'DELETE',
        });
        setData(data.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };

  return (
    <TableContainer component={Paper} style={{ margin: '20px auto', maxWidth: '80%' }}>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell>ID</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell>Lastname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            {/* <TableCell>Password</TableCell>
            <TableCell>Confirm password</TableCell> */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstname}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              {/* <TableCell>{row.password}</TableCell>
              <TableCell>{row.confirmPassword}</TableCell> */}
              <TableCell>
                <IconButton onClick={() => handleEdit(row)} style={{ color: 'green' }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.id)} style={{ color: 'red' }}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Datastorage;
