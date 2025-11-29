import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";

export const CounterCard = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <div className="md:col-span-1 xl:col-span-1">
      <div className="bg-blue-50 rounded-xl p-6 h-full flex flex-col justify-center gap-5">
        {/* Total Rooms */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h3 className="purecounter text-3xl font-bold text-blue-600" data-purecounter-start="0" data-purecounter-end="60" data-purecounter-duration="2">
              0
            </h3>
            <span className="text-3xl font-bold text-blue-600">+</span>
          </div>
          <h6 className="text-gray-700 font-normal">Total Rooms</h6>
        </div>

        {/* Total Staff */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h3 className="purecounter text-3xl font-bold text-blue-600" data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="2">
              0
            </h3>
            <span className="text-3xl font-bold text-blue-600">+</span>
          </div>
          <h6 className="text-gray-700 font-normal">Total Staff</h6>
        </div>

        {/* Loyal Customers */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h3 className="purecounter text-3xl font-bold text-blue-600" data-purecounter-start="0" data-purecounter-end="5000" data-purecounter-duration="3">
              0
            </h3>
            <span className="text-3xl font-bold text-blue-600">+</span>
          </div>
          <h6 className="text-gray-700 font-normal">Loyal Customers</h6>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
