import React from 'react'
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    const [openSnackBar,setOpenSnackBar]=useState(false);
    const handleClose=()=>setOpenSnackBar(false);

    useEffect(()=>{
        if(jwt){
          dispatch(getUser(jwt))
        }
      
      },[jwt])

      
  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true)
  }, [auth.user]);



    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userData={
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
            
        }
        dispatch(register(userData))
        console.log("user data",userData);

    }
  return (
    <div className="">
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
            type="password"
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            className="bg-[#9155FD] w-full"
            type="submit"
            variant="contained"
            size="large"
            sx={{padding:".8rem 0"}}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </form>

<div className="flex justify-center flex-col items-center">
   <div className="py-3 flex items-center ">
      <p className="m-0 p-0">if you have already account ?</p>
      <Button onClick={()=> navigate("/login")} className="ml-5" size="small">
        Login
      </Button>
    </div>
</div>

<Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {auth.error?auth.error:auth.user?"Register Success":""}
      </Alert>
    </Snackbar>
   
  </div>
  )
}

export default RegisterForm