import { FC, memo } from "react";
import { BsViewList } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiCirclesFourFill } from "react-icons/pi";
import { IGetResponseProducts } from "../../types";
interface IFilterProps {
  setGrid: (value: boolean) => void;
  data: IGetResponseProducts;
  page: number;
}
const Filter: FC<IFilterProps> = ({ setGrid, data, page }) => {
  return (
    <div className="bg-[#F9F1E7] dark:bg-zinc-800 h-[100px] grid place-items-center font-poppins mb-16">
      <div className="container flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-6 sm:gap-4">
          <div className="flex items-center gap-3 cursor-pointer hover:text-bg-primary duration-300">
            <GiSettingsKnobs className="w-6 h-6 md:w-5 md:h-5" />
            <p className="text-xl md:text-base font-medium">Filter</p>
          </div>
          <div
            onClick={() => setGrid(true)}
            className="flex justify-center items-center cursor-pointer hover:text-bg-primary duration-300"
          >
            <PiCirclesFourFill className="w-7 h-7 md:w-6 md:h-6" />
          </div>
          <div
            onClick={() => setGrid(false)}
            className="flex justify-center items-center cursor-pointer hover:text-bg-primary duration-300"
          >
            <BsViewList className="w-7 h-7 md:w-6 md:h-6" />
          </div>
          <div className="hidden md:inline-block">|</div>
          <div className="text-sm md:text-xs">
            Showing {page}–{data?.data?.limit} of {data?.data?.total} results
          </div>
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
  );
};

export default memo(Filter);
