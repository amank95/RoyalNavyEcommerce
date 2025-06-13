import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles"; // ✅ Correct MUI import
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, CssBaseline, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, Drawer, Avatar } from "@mui/material";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Dashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductTable from "./components/ProductTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../State/Auth/Action";
import { deepPurple } from "@mui/material/colors";


const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardSharpIcon /> },
  { name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <ProductionQuantityLimitsIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ProductionQuantityLimitsIcon /> },
  { name: "Add Product", path: "/admin/product/create", icon: <ProductionQuantityLimitsIcon /> },
];

const drawerWidth = 240;

const Admin = () => {
  const theme = useTheme(); // ✅ Now this works correctly
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // ✅ No more errors
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {auth} =useSelector(store=>store);
  const [sideBarVisible, setSideBarVisible] = React.useState(false);

  const handleLogout = () => {
   
    dispatch(logout());
    navigate("/")
  };

  const jwt = localStorage.getItem("jwt");

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt));
    }
  },[jwt]);


  const drawer = (
    <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} /> {/* ✅ Fixed missing text */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {/* <AccountBoxIcon /> */}
              <Avatar
                        className="text-white"
                        onClick={handleLogout}
                       
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                         {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
            </ListItemIcon>
            <ListItemText className="ml-5" primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };



  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <Box sx={{ display: `${isLargeScreen ? "flex" : "block" }`}} >
      <CssBaseline />
      {/* <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} /> */}
      <Drawer variant={drawerVariant}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                      width: drawerWidth,
                      boxSizing: "border-box",
                      ...(drawerVariant === "temporary" && {
                        top: 0,
                        [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                          {
                            position: "fixed",
                            left: 0,
                            right: 0,
                            height: "100%",
                            zIndex: (theme) => theme.zIndex.drawer + 2,
                          },
                      }),
                    },
                  }}
                  open={isLargeScreen || sideBarVisible}
                  onClose={handleCloseSideBar}
      >
        {drawer}
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
      <Routes>
            <Route path="/" element={ <Dashboard />}></Route>
            <Route path="/product/create" element={<CreateProductForm/>}></Route>
            {/* <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route> */}
            <Route path="/products" element={<ProductTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<CustomersTable/>}></Route>
            {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
          </Routes>
      </Box>
    </Box>
  );
};

export default Admin;
