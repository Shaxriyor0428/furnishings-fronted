import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/api/product-api";
import Products from "../../components/products/Products";
import { Pagination } from "@mui/material";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsViewList } from "react-icons/bs";
import Hero from "./Hero";
import { PiCirclesFourFill } from "react-icons/pi";
import './Shop.scss'

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
        <div className="container flex justify-between">
          <div className="flex justify-between items-center gap-[24px]">
            <div className="flex justify-between items-center gap-[12px] cursor-pointer hover:text-bg-primary duration-300">
              <GiSettingsKnobs className="w-[25px] h-[25px]" />
              <p className="text-[20px] leading-[30px] font-[400]">Filter</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:text-bg-primary duration-300">
              <PiCirclesFourFill className="w-[28px] h-[28px]" />
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:text-bg-primary duration-300">
              <BsViewList className="w-[28px] h-[28px]" />
            </div>
            <div>|</div>
            <div>Showing 1–16 of 32 results</div>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex gap-3 items-center cursor-pointer hover:text-bg-primary duration-300">
              <p>Show</p>
              <input
                placeholder="16"
                maxLength={3}
                className="w-[55px] h-[55px] bg-white dark:bg-slate-100 outline-none text-[20px] text-center rounded-sm text-bg-primary"
              />
            </div>
            <div className="flex gap-3 items-center cursor-pointer hover:text-bg-primary duration-300">
              <p>Sort by</p>
              <input
                placeholder="Default"
                className="w-[188px] h-[55px] bg-white dark:bg-slate-100 outline-none text-[20px] indent-3 rounded-sm text-bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        {isLoading && (
          <div className="flex justify-center items-center min-h-[10vh]">
            <div className="loader"></div>
          </div>
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
