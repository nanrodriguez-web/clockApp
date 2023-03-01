import { useState } from "react";

export default function Home() {
   const [hours, setHours] = useState();
   const [seconds, setSeconds] = useState();
   const [minutes, setMinutes] = useState();

   const [amPM, setAMPM] = useState();

   const [hoursDegree, setHoursDegree] = useState();
   const [secondsDegree, setSecondsDegree] = useState();
   const [minutesDegree, setMinutesDegree] = useState();

   const getTime = () => {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();

      const secondsDegrees = (seconds / 60) * 360 + 90;
      const minutesDegrees = (minutes / 60) * 360 + 90;
      const hoursDegrees = (hours / 12) * 360 + 90;

      setHoursDegree(hoursDegrees);
      setMinutesDegree(minutesDegrees);
      setSecondsDegree(secondsDegrees);

      if (hours > 12) {
         const pmHour = hours - 12;

         if (pmHour < 10) {
            setHours(`0${pmHour}`);
            setAMPM("pm");
         } else {
            setHours(pmHour);
            setAMPM("pm");
         }
      } else if (hours < 10) {
         setHours(`0${hours}`);
         setAMPM("am");
      } else {
         setHours(hours);
         setAMPM("am");
      }

      if (minutes < 10) {
         setMinutes(`0${minutes}`);
      } else {
         setMinutes(minutes);
      }

      if (seconds < 10) {
         setSeconds(`0${seconds}`);
      } else {
         setSeconds(seconds);
      }
   };

   setInterval(getTime, 1000);

   return (
      <div className="main">
         <div className="clockFace">
            <div className="clock">
               <div
                  className="hand hourHand"
                  style={{
                     transform: `rotate(${hoursDegree}deg)`,
                  }}
               ></div>
               <div
                  className="hand minuteHand"
                  style={{ transform: `rotate(${minutesDegree}deg)` }}
               ></div>
               <div
                  className="hand secondHand"
                  style={{ transform: `rotate(${secondsDegree}deg)` }}
               ></div>
            </div>
         </div>

         <div className="labels">
            <h1>{hours}:</h1>
            <h1>{minutes}:</h1>
            <h1>{seconds}</h1>
            <h1 className="amPM">{amPM}</h1>
         </div>
      </div>
   );
}
