// import React, { useEffect, useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, AppBar,Toolbar,Typography, } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useNavigate } from 'react-router-dom';

// function Datastorage() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Register'
//         );
//         if (response.ok) {
//           const result = await response.json();
//           setData(result);
//         //   navigate('/Register');
//         } else {
//           console.error('Error fetching data');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleEdit = (row) => {
//     navigate('/Register', { state: { rowData: row } });
//   };

//   const handleDelete = async (id) => {
//  {
//       try {
//         await fetch(`https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Register/${id}`, {
//           method: 'DELETE',
//         });
//         setData(data.filter((row) => row.id !== id));
//       } catch (error) {
//         console.error('Error deleting data:', error);
//       }
//     }
//   };

//   return (
//     <div  style={{backgroundColor:'lightgray',height:'100vh'}}>
//     <AppBar className='bg-secondary' position="static" >
//     <Toolbar>
//       <Typography variant="h5" component="div" className='d-flex fw-bold'  sx={{ flexGrow: 1,justifyContent:'space-between' }}>
//       USER DATA
//       <i class="fa-solid fa-bell mt-1"></i>
      
//       </Typography>
//     </Toolbar>
//   </AppBar>

//     <TableContainer component={Paper} style={{ margin: '30px 3rem auto auto', maxWidth: '79%', }}>
//       <Table>
//         <TableHead>
//           <TableRow style={{backgroundColor:' rgb(238, 73, 95)'}}>
//             <TableCell style={{color:'white'}}>ID</TableCell>
//             <TableCell  style={{color:'white'}}>Firstname</TableCell>
//             <TableCell  style={{color:'white'}}>Lastname</TableCell>
//             <TableCell  style={{color:'white'}}>Email</TableCell>
//             <TableCell  style={{color:'white'}}>Mobile</TableCell>
//             {/* <TableCell>Password</TableCell>
//             <TableCell>Confirm password</TableCell> */}
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.id}</TableCell>
//               <TableCell>{row.firstname}</TableCell>
//               <TableCell>{row.lastname}</TableCell>
//               <TableCell>{row.email}</TableCell>
//               <TableCell>{row.mobile}</TableCell>
//               {/* <TableCell>{row.password}</TableCell>
//               <TableCell>{row.confirmPassword}</TableCell> */}
//               <TableCell>
//                 <IconButton onClick={() => handleEdit(row)} style={{ color: 'green' }}>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton onClick={() => handleDelete(row.id)} style={{ color: 'red' }}>
//                   <DeleteIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// }

// export default Datastorage;
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
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
    try {
      await fetch(
        `https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Register/${id}`,
        {
          method: 'DELETE',
        }
      );
      setData(data.filter((row) => row.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'lightgray', height: '100vh', display: 'flex' }}>
      <div
        className="paper"
        style={{
          backgroundColor: 'ButtonFace',
          height: 'auto',
          width: '20%',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <h3>Flex Proposals</h3>
        <p style={{ marginTop: '20px' }}>
          <i className="fa-brands fa-windows"></i> Dashboard
        </p>
        <p>Proposals</p>
        <p style={{ marginTop: '40px' }}>INVENTORY</p>
        <p>
          <i className="fa-solid fa-building"></i> Operators
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i> Centers
        </p>
        <p>
          <i className="fa-brands fa-intercom"></i> Inventory
        </p>
        <p style={{ marginTop: 'auto' }}>
          <i className="fa-solid fa-circle-user"></i> Profile
        </p>
        <p>
          <i className="fa-solid fa-gear"></i> Settings
        </p>
        <p>
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </p>
      </div>

   
      <div style={{ flex: 1 }}>
    
        <AppBar position="static" className="bg-secondary">
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
              }}
            >
              USER DATA
              <i className="fa-solid fa-bell mt-1"></i>
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Data Table */}
        <TableContainer
          component={Paper}
          style={{
            margin: '30px auto',
            maxWidth: '90%',
          }}
        >
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: 'rgb(238, 73, 95)' }}>
                <TableCell style={{ color: 'white' }}>ID</TableCell>
                <TableCell style={{ color: 'white' }}>Firstname</TableCell>
                <TableCell style={{ color: 'white' }}>Lastname</TableCell>
                <TableCell style={{ color: 'white' }}>Email</TableCell>
                <TableCell style={{ color: 'white' }}>Mobile</TableCell>
                <TableCell style={{ color: 'white' }}>Action</TableCell>
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
                  <TableCell>
                    <IconButton
                      onClick={() => handleEdit(row)}
                      style={{ color: 'green' }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(row.id)}
                      style={{ color: 'red' }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Datastorage;
