import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RegistrationProcess = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isShown, setIsShown] = useState(false);
  const [progressColor, setProgressColor] = useState({
    competitor: "rgba(255,250,121,0.6)",
    advisor: "rgba(217,217,217,1)",
    team: "rgba(217,217,217,1)",
    payment: "rgba(217,217,217,1)",
  });
  const listsOfPathname = [
    "/registration/observer",
    "/registration/competitor",
    "/registration/observer/advisor-info",
    "/registration/competitor/advisor-info",
  ];

  const checkIsShown = () => {
    if (listsOfPathname.includes(location.pathname)) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  const handleProgressColor = () => {
    if (
      pathname === "/registration/observer" ||
      pathname === "/registration/competitor"
    ) {
      setProgressColor({
        ...progressColor,
        competitor: "rgba(255,250,121,0.6)",
      });
    } else if (
      pathname === "/registration/observer/advisor-info" ||
      pathname === "/registration/competitor/advisor-info"
    ) {
      setProgressColor({
        ...progressColor,
        advisor: "rgba(255,250,121,0.6)",
        competitor: "rgba(63,213,103,1)",
      });
    }
  };

  useEffect(() => {
    checkIsShown();
    handleProgressColor();
    console.log(progressColor)
  }, [pathname]);

  return (
    <section
      className={`${
        isShown ? "block" : "hidden"
      } w-screen flex justify-center py-14`}
    >
      <div
        className={`${
          isShown ? "block" : "hidden"
        } flex w-[70%] justify-between`}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className={`w-[24px] h-[24px] rounded-full border-[1px] border-[rgba(0,0,0,1)]`} style={{ backgroundColor: `${progressColor.competitor}` }}
          ></div>
          <p>Competitor Information</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4">
          <div
            className={`w-[24px] h-[24px] rounded-full border-[1px] border-[rgba(0,0,0,1)]`} style={{ backgroundColor: `${progressColor.advisor}` }}
          ></div>
          <p>Advisor Information</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4">
          <div
            className={`w-[24px] h-[24px] rounded-full ${progressColor.team} border-[1px] border-[rgba(0,0,0,1)]`}  style={{ backgroundColor: `${progressColor.team}` }}
          ></div>
          <p>Team Information</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4">
          <div
            className={`w-[24px] h-[24px] rounded-full ${progressColor.payment} border-[1px] border-[rgba(0,0,0,1)]`} style={{ backgroundColor: `${progressColor.payment}` }}
          ></div>
          <p>Payment</p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationProcess;
