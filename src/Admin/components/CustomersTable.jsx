import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import { Avatar, CardHeader, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deepPurple } from '@mui/material/colors'; // Default avatar color

const CustomersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://royalnavyecommercebackend-production.up.railway.app/api/users'); // Replace with your API URL
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  function handlePaginationChange(event, value) {
    setPage(value);
  }

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <CardHeader
          title='All Customers'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice((page - 1) * 10, page * 10).map((user, index) => (
                <TableRow hover key={user._id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                      {/* ✅ Avatar Handling */}
                      {user.avatar ? (
                      <Avatar
                        alt={user.firstName}
                        src={user.avatar}
                        sx={{ width: 50, height: 50 }}
                      />
                    ) : (
                      <Avatar
                        sx={{ bgcolor: deepPurple[500], color: 'white', width: 50, height: 50 }}
                      >
                        {user.firstName?.charAt(0).toUpperCase()}
                      </Avatar>
                    )}

                  </TableCell>
                  <TableCell>{user?.firstName}</TableCell>
                  <TableCell>{user.email}</TableCell>
{/* we can also take user password */}


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 flex justify-center items-center">
        <Pagination
          className="py-5 w-auto"
          size="large"
          count={Math.ceil(users.length / 10)}
          color="primary"
          page={page}
          onChange={handlePaginationChange}
        />
      </Card>
    </Box>
  );
};

export default CustomersTable;
