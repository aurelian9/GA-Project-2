import React, { useState, useEffect } from "react";
import CountryList1 from "./StagingGround2";
import CountryList2 from "./StagingGround3";
import styles from "./mystyle.css";

const StagingGroundPrime = () => {
  const [error, setError] = useState("");
  const [preventFu, setPreventFu] = useState(false);

  const [fromInput, setFromInput] = useState(""); 
  const [fromAbbrev, setFromAbbrev] = useState(""); 
  const [fromTimeStamp, setFromTimeStamp] = useState("");

  const [toInput, setToInput] = useState(""); 
  const [toAbbrev, setToAbbrev] = useState(""); 
  const [toTimeStamp, setToTimeStamp] = useState(""); 

  const [offset, setOffset] = useState(""); 

  const jackJones = async (url) => {
    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Fault Detected");
      }

      const data = await res.json();

      setFromAbbrev(data.fromAbbreviation);

      let timeTime = data.fromTimestamp * 1000;
      let readRead = new Date(timeTime);
      let options = {
        weekday: "long",
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
      };
      let humanTime = readRead.toLocaleString("en-GB", options);
      setFromTimeStamp(humanTime + " hours");

      setToAbbrev(data.toAbbreviation);

      let timeTimeTime = data.toTimestamp * 1000;
      let readReadRead = new Date(timeTimeTime);
      let options2 = {
        weekday: "long",
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
      };
      let humanTimeTime = readReadRead.toLocaleString("en-GB", options2);
      setToTimeStamp(humanTimeTime + " hours");

      let minuteOff = data.offset / 60;
      let hourOff = minuteOff / 60;
      setOffset(hourOff + " hours");
    } catch (error) {
      setError("Fault Detected");
    }
  };

  useEffect(() => {
    const url = `http://api.timezonedb.com/v2.1/convert-time-zone?key=SO54X226Y4PI&format=json&from=${fromInput}&to=${toInput}`;
    jackJones(url);
  }, [preventFu]);

  const handToInput = (event) => {
    setToInput(event.target.value);
  };

  const handFromInput = (event) => {
    setFromInput(event.target.value);
  };

  const handOnSubmit = (event) => {
    event.preventDefault();

    setPreventFu(!preventFu);
  };

  return (
    <>
      <div>
        <div className="container">
          <label className="label" htmlFor="fromInput">
            From Country:
          </label>
          <CountryList1 onChange={handFromInput} />
        </div>
        <br />
        <br />
        <div className="container">
          <label className="label" htmlFor="toInput">
            Next Country:
          </label>
          <CountryList2 onChange={handToInput} />
        </div>
        <div className="btn-container">
          <button className="button" onClick={handOnSubmit}>
            Check Time
          </button>
        </div>
        <br />
        <br />
        <div className="additional">
        <label className="more-labels" htmlFor="toTime" value={fromTimeStamp}>
          From Country:    {fromTimeStamp} {fromAbbrev}
        </label>
        </div>
        <br />
        <br />
        <div className="additional">
        <label className="more-labels" htmlFor="toTime" value={toTimeStamp}>
          Next Country:    {toTimeStamp} {toAbbrev}
        </label>
        </div>
        <br />
        <br />
        <div className="additional">
        <label className="more-labels" htmlFor="timeDiff" value={offset}>
          Difference:    {offset}
        </label>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default StagingGroundPrime;
