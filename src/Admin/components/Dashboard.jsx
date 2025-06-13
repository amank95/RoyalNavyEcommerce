import Grid from "@mui/material/Grid";
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from "./MonthlyOverView";
import OrdersTable from "../view/OrderTableView";
import ProductTable from "./ProductTable";
import ProductTableView from "../view/ProductTableView";
//import ProductTable from "./ProductTable";

const Dashboard = () => {
  return (

    <div className="p-10 ">
        <Grid container spacing={3} >
            <Grid   item xs={12} md={4}>
              <div className="shadow-lg shadow-gray-600">
              <Achivement />
              </div>
              
            </Grid>
            <Grid item xs={12} md={8}>
              <div className="shadow-lg shadow-gray-600">
                <MonthlyOverview />
                </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="shadow-lg shadow-gray-600">
                <OrdersTable/>
              </div>
            
            </Grid>

            
            <Grid item xs={12} md={6}>
              <div className="shadow-lg shadow-gray-600">
                <ProductTableView/>
              </div>
            
            </Grid>

        </Grid>
    </div>
  )
}

export default Dashboard