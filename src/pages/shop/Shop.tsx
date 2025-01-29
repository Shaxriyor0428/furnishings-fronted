import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/api/product-api";
import Products from "../../components/products/Products";
import { Pagination } from "@mui/material";
import Hero from "./Hero";
import "./Shop.scss";
import Filter from "./Filter";
import { useDarkMode } from "../../context/DarkModeProvider";
import Info from "../../components/info/Info";

const Shop = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);
  const [sortBy, setSortBy] = useState<string>("newest");
  const { data, isLoading } = useGetProductsQuery({
    limit,
    page,
    ...(sortBy === "cheapest" || sortBy === "expensive"
      ? { priceOrder: sortBy === "cheapest" ? "asc" : "desc" }
      : sortBy === "newest" || sortBy === "oldest"
      ? { order: sortBy === "oldest" ? "asc" : "desc" }
      : {}),
  });

  const [grid, setGrid] = useState(
    JSON.parse(localStorage.getItem("grid") || "true")
  );

  useEffect(() => {
    localStorage.setItem("grid", JSON.stringify(grid));
  }, [grid]);

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

  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Hero />
      {data && (
        <Filter
          data={data}
          page={page}
          setGrid={setGrid}
          setLimit={setLimit}
          setSortBy={setSortBy}
        />
      )}
      <section className="container">
        {isLoading && (
          <div className="flex justify-center items-center min-h-[10vh]">
            <div className="loader"></div>
          </div>
        )}
        {data ? <Products grid={grid} data={data.data.products} /> : <></>}
        <div className="flex justify-center">
          <Pagination
            count={data?.data?.totalPages}
            shape="rounded"
            page={page}
            onChange={handlePageChange}
            sx={{
              "& .MuiPagination-ul": {
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                "& .Mui-selected": {
                  backgroundColor: isDarkMode ? "#B88E2F" : "#B88E2F",
                  color: "#fff",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                },
              },
              "& .MuiPaginationItem-root": {
                backgroundColor: isDarkMode ? "#333" : "#F9F1E7",
                color: isDarkMode ? "#fff" : "#000",
                borderRadius: "10px",
                fontSize: "18px",
                height: "50px",
                width: "50px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E0C097",
                  color: "#fff",
                },
              },
              "@media (max-width: 600px)": {
                "& .MuiPaginationItem-root": {
                  fontSize: "14px",
                  height: "40px",
                  width: "40px",
                  borderRadius: "8px",
                },
                "& .MuiPagination-ul": {
                  gap: "10px",
                },
              },
            }}
          />
        </div>
      </section>
      <Info />
    </>
  );
};

export default React.memo(Shop);
