import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/api/product-api";
import Products from "../../components/products/Products";
import { Pagination } from "@mui/material";
import Hero from "./Hero";
import "./Shop.scss";
import Filter from "./Filter";

const Shop = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetProductsQuery({ limit: 12, page });
  const [grid, setGrid] = useState(
    JSON.parse(localStorage.getItem("grid") || "true")
  );

  useEffect(() => {
    localStorage.setItem("grid", JSON.stringify(grid));
  }, [grid]);

  const totalPages = data ? Math.ceil(data?.data?.total / 12) : 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <>
      <Hero />
      {data && <Filter data={data} page={page} setGrid={setGrid} />}
      <section className="container">
        {isLoading && (
          <div className="flex justify-center items-center min-h-[10vh]">
            <div className="loader"></div>
          </div>
        )}
        {data ? <Products grid={grid} data={data.data.products} /> : <></>}
        <div className="flex justify-center">
          <Pagination
            count={totalPages}
            shape="rounded"
            page={page}
            onChange={handlePageChange}
            sx={{
              "& .MuiPagination-ul": {
                display: "flex",
                gap: "30px",
                "& .Mui-selected": {
                  backgroundColor: "#B88E2F",
                  color: "#fff",
                  fontWeight: "500",
                },
              },
              "& .MuiPaginationItem-root": {
                backgroundColor: "#F9F1E7",
                color: "#000",
                borderRadius: "8px",
                fontSize: "20px",
                height: "60px",
                width: "60px",
              },
              "@media (max-width: 600px)": {
                "& .MuiPaginationItem-root": {
                  fontSize: "15px",
                  height: "45px",
                  width: "45px",
                },
                "& .MuiPagination-ul": {
                  gap: "10px",
                },
              },
            }}
          />
        </div>
      </section>
    </>
  );
};

export default React.memo(Shop);
