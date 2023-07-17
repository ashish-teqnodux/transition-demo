import React, { useCallback, useEffect, useState } from "react";
import MuiTable from "../UI/MuiTable";
import { getAuth } from "../../services/identity.service";
import { getAllData } from "../../services/customers.service";
import MuiButton from "../UI/MuiButton";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const [page, setPage] = useState(0);
  const [totalItems, seTotalItems] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const navigate = useNavigate();

  // Table Columns
  const columns = [
    { label: "S no", dataField: "sno" },
    { label: "Customer name", dataField: "name" },
    { label: "Address", dataField: "address" },
    { label: "ZC_PO_ID", dataField: "ZC_PO_ID" },
    {
      label: "Action",
      dataField: "action",
      formatter: (row) => {
        return (
          <div className="flex justify-center items-center">
            <MuiButton
              color="primary"
              size="small"
              variant="outlined"
              onClick={() => handleViewClick(row.id)}
            >
              View
            </MuiButton>
          </div>
        );
      },
    },
  ];

  const handleViewClick = (id) => {
    navigate("/home");
  };

  // function to fetch the table Data
  const fetchAllData = useCallback(async (rowsPerPage, page) => {
    setLoading(true);
    let dataRes = await getAllData(auth?.token, rowsPerPage, page);
    if (dataRes?.data?.status) {
      let reduceData = dataRes?.data?.entity?.data?.reduce((acc, cur, idx) => {
        let obj = {};
        obj.sno = rowsPerPage * page + idx + 1;
        obj.id = cur?.id || "";
        obj.name = cur?.customer_name || "";
        obj.address = cur?.address || "";
        obj.ZC_PO_ID = cur?.ZC_PO_ID || "";
        acc.push(obj);
        return acc;
      }, []);
      seTotalItems(dataRes?.data?.entity?.totalItems);
      setTableData(reduceData);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchAllData(rowsPerPage, page);
  }, [rowsPerPage, page, fetchAllData]);

  // change page
  const handleChangePage = useCallback((event, newPage) => {
    setPage(newPage);
  }, []);

  // change rows per page
  const handleChangeRowsPerPage = useCallback((event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }, []);

  // Redirect to add customer details page
  const handleAddBtnClick = () => {
    navigate("/home");
  };

  return (
    <div className="h-[100vh] overflow-y-auto flex justify-center items-center px-5 md:px-0 w-full md:w-[90%] lg:w-[70%] m-auto">
      <MuiTable
        tableRows={tableData || []}
        tableColumns={columns}
        page={page}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleClick={handleAddBtnClick}
        loading={loading}
        title="Customer Data"
      />
    </div>
  );
};

export default Customers;
