import React from "react";

import { TransactionsTable } from "../components/Tables";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4 className="fs-1">Centros dispobibles para prubas de Covid-19</h4>
          <p className="mb-0">Acontinuacion se muestran los centros de vacunacion mas cercanos en los cuales puede realizarce una prueba de covid-19</p>
        </div>        
      </div>

      <div className="mb-4 border border-1 py-3 mx-auto">        
       Aqui se agregará un mapa (Api de google maps) 
      </div>

      <TransactionsTable />
    </>
  );
};
