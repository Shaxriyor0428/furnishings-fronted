import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/api/product-api";
import Products from "../../components/products/Products";
import { Pagination } from "@mui/material";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsViewList } from "react-icons/bs";
import Hero from "./Hero";
import { PiCirclesFourFill } from "react-icons/pi";

const Shop = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetProductsQuery({ limit: 12, page });

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
      <div className="bg-[#F9F1E7] dark:bg-[#645644] h-[100px] grid place-items-center font-poppins mb-16">
        <div className="container flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6 sm:gap-4">
            <div className="flex items-center gap-3 cursor-pointer hover:text-bg-primary duration-300">
              <GiSettingsKnobs className="w-6 h-6 md:w-5 md:h-5" />
              <p className="text-xl md:text-base font-medium">Filter</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:text-bg-primary duration-300">
              <PiCirclesFourFill className="w-7 h-7 md:w-6 md:h-6" />
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:text-bg-primary duration-300">
              <BsViewList className="w-7 h-7 md:w-6 md:h-6" />
            </div>
            <div className="hidden md:inline-block">|</div>
            <div className="text-sm md:text-xs">Showing 1–16 of 32 results</div>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-2 items-center">
            <div className="flex items-center gap-2 cursor-pointer hover:text-bg-primary duration-300">
              <p className="text-base md:text-sm">Show</p>
              <input
                placeholder="16"
                maxLength={3}
                className="w-14 h-14 md:w-12 md:h-12 bg-white dark:bg-slate-100 outline-none text-lg md:text-sm text-center rounded-sm text-bg-primary"
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-bg-primary duration-300">
              <p className="text-base md:text-sm">Sort by</p>
              <input
                placeholder="Default"
                className="w-48 h-14 md:w-32 md:h-12 bg-white dark:bg-slate-100 outline-none text-lg md:text-sm indent-3 rounded-sm text-bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        {isLoading && (
          <p className="my-8 text-center text-xl font-semibold text-gray-700 dark:text-white">
            Loading ...
          </p>
        )}
        {data ? <Products data={data.data.products} /> : <></>}
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
