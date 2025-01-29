import { FC, memo } from "react";
import { BsViewList } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiCirclesFourFill } from "react-icons/pi";
import { IGetResponseProducts } from "../../types";

interface IFilterProps {
  setGrid: (value: boolean) => void;
  setLimit?: (value: number) => void;
  setSortBy?: (value: string) => void;
  data: IGetResponseProducts;
  page: number;
}

const Filter: FC<IFilterProps> = ({
  setGrid,
  data,
  page,
  setLimit,
  setSortBy,
}) => {
  return (
    <div className="bg-[#F9F1E7] dark:bg-zinc-800 py-4 px-6 rounded-lg shadow-md">
      <div className="container flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-4 sm:gap-2">
          <button className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-primary duration-300">
            <GiSettingsKnobs className="w-6 h-6 sm:w-5 sm:h-5" />
            <span className="text-xl max-sm:text-sm font-medium">Filter</span>
          </button>
          <button
            onClick={() => setGrid(true)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <PiCirclesFourFill className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
          </button>
          <button
            onClick={() => setGrid(false)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <BsViewList className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
          </button>
        </div>
        <p className="text-lg max-sm:text-xs text-gray-600 dark:text-gray-300">
          Showing {page}–{data?.data?.limit} of {data?.data?.total} results
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-2 items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg max-sm:text-sm">Show</span>
            <select
              onChange={(e) =>
                setLimit && setLimit(parseInt(e.target.value, 10))
              }
              className="cursor-pointer border rounded-md px-2 py-1 text-gray-700 dark:text-white dark:bg-zinc-800"
            >
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg max-sm:text-xs">Sort by</span>
            <select
              onChange={(e) => setSortBy && setSortBy(e.target.value)}
              className="cursor-pointer border rounded-md px-2 py-1 text-gray-700 dark:text-white dark:bg-zinc-800"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="cheapest">Cheapest</option>
              <option value="expensive">Most Expensive</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Filter);
