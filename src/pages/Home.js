import { useEffect, useState } from "react";

export default function Home() {
   const [seconds, setSeconds] = useState();
   const [minutes, setMinutes] = useState();
   const [hour, setHour] = useState();

   function getTime() {
      const date = new Date();
      const seconds = date.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;

      const hour = date.getHours();
      const hourDegrees = (hour / 60) * 360 + 90;

      const minutes = date.getMinutes();
      const minutesDegrees = (minutes / 60) * 360 + 90;

      setSeconds(secondsDegrees);
      setMinutes(minutesDegrees);
      setHour(hourDegrees);

      // console.log(`${hour}:${minutes}:${seconds}`);
   }
   setInterval(getTime, 1000);

   return (
      <div className="main">
         <div className="clock-face">
            <div
               className="hand hourHand"
               style={{ transform: `rotate(${hour}deg)` }}
            ></div>
            <div
               className="hand minuteHand"
               style={{ transform: `rotate(${minutes}deg)` }}
            ></div>
            <div
               className="hand secondsHand"
               style={{ transform: `rotate(${seconds}deg)` }}
            ></div>
         </div>

         <div className="label">
            <h1 className="labels">{((hour - 90) / 360) * 60}:</h1>
            <h1 className="labels">{((minutes - 90) / 360) * 60}</h1>
         </div>
      </div>
   );
}
