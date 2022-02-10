import React from "react";

import { TransactionsTable } from "../components/Tables";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4 className="fs-1">Seguimiento</h4>
          <p className="mb-0">A continuación se muestran sus diagnosticos (hay que trabajar en la tabla): </p>
        </div>        
      </div>

      <TransactionsTable />
    </>
  );
};
