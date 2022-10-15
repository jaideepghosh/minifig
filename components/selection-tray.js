import { useContext } from "react";
import CommonContext from "../contexts/common.context";
import SVG from "../svg.json";

/**
 * @description This is the selection tray where we'll show the available part options.
 * Eg: if the selected part is eye, This tray will show the available eye options.
 */
export default function SelectionTray() {
  const { common, setCommonContext } = useContext(CommonContext);
  return (
    <div
      className="h-full"
      style={{ position: "absolute", left: "64px", top: "0px" }}
    >
      <div className="flex flex-col items-center w-60 h-full overflow-scroll text-gray-700 bg-gray-100">
        <div className="grid grid-cols-6 gap-4 mt-3">
          <div className="col-span-5 font-bold">
            Select {common && common.selectedNavItem}
          </div>
          <div
            className="col-span-1"
            onClick={() => {
              setCommonContext({ showTray: false });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
            {common.selectedNavItem &&
              SVG[common.selectedNavItem].map((item) => {
                return (
                  <div
                    key={item.name}
                    className="w-full pb-3 mb-3 border-b border-gray-300"
                  >
                    <img className="w-full" src={item.path} alt={item.name} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
