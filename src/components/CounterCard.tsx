import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";

export  const CounterCard = () =>  {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
      <div className="col-xl-4">
        <div className="card card-body new-primary new-opacity-10 vstack gap-4 justify-content-center h-100 p-4">
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center me-3">
            <h3
              className="purecounter text-primary mb-0"
              data-purecounter-start="0"
              data-purecounter-end="60"
              data-purecounter-duration="2"
                  ></h3>
                  <span className="h3 text-primary mb-0">+</span>
                  </div>
            <h6 className="fw-normal mb-0">Total Rooms</h6>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center me-3">
              <h3
                className="purecounter text-primary mb-0"
                data-purecounter-start="0"
                data-purecounter-end="50"
                data-purecounter-duration="2"
              ></h3>
              <span className="h3 text-primary mb-0">+</span>
            </div>
            <h6 className="fw-normal mb-0">Total Staff</h6>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center me-3">
              <h3
                className="purecounter text-primary mb-0"
                data-purecounter-start="0"
                data-purecounter-end="5000"
                data-purecounter-duration="3"
              ></h3>
              <span className="h3 text-primary mb-0">+</span>
            </div>
            <h6 className="fw-normal mb-0">Amazing Services</h6>
          </div>
        </div>
      </div>
  );
};

export default CounterCard;

