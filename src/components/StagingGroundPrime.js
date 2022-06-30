import React, { useState, useEffect } from "react";
import CountryList1 from "./StagingGround2";
import CountryList2 from "./StagingGround3";
import ErrorModal from "./ErrorModal";
import Button from "./Button";

const StagingGroundPrime = () => {
  const [error, setError] = useState("");
  const [error2, setError2] = useState(false);
  const [preventFu, setPreventFu] = useState(false);

  const [fromInput, setFromInput] = useState(""); //input
  const [fromAbbrev, setFromAbbrev] = useState(""); //output
  const [fromTimeStamp, setFromTimeStamp] = useState("");

  const [toInput, setToInput] = useState(""); //input
  const [toAbbrev, setToAbbrev] = useState(""); //output
  const [toTimeStamp, setToTimeStamp] = useState(""); //output

  const [offset, setOffset] = useState(""); //output

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

  // const handOnSubmit = (event) => {
  //   event.preventDefault();

  //   setPreventFu(!preventFu);
  // };

  const handOnSubmit = (event) => {
    {
      event.preventDefault();
      setPreventFu(!preventFu);

      if (fromInput.length === 0) {
        setError2(true);
      }

      setFromInput("");
      setToInput("");
    }
  };

  return (
    <>
      {error2 && (
        <ErrorModal
          title="Error Encountered"
          message="There is an error with your input"
          okayClicked={setError2}
        ></ErrorModal>
      )}
      <div>
        <div>
          <label htmlFor="fromInput">From</label>
          {/* <input type='text' onChange={handFromInput}></input> */}
          <CountryList1 onChange={handFromInput} />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="toInput">To</label>
          {/* <input type='text' onChange={handToInput}></input> */}
          <CountryList2 onChange={handToInput} />
        </div>
        <div>
          <Button onClick={handOnSubmit}>Click here</Button>
        </div>
        <br />
        <br />
        {/* <label htmlFor="fromAbbrev" value={fromAbbrev}>
        From Zone: {fromAbbrev}
      </label>
      <br />
      <br /> */}
        <label htmlFor="toTime" value={fromTimeStamp}>
          From Time: {fromTimeStamp} {fromAbbrev}
        </label>
        {/* <br />
      <br />
      <label htmlFor="toAbbrev" value={toAbbrev}>
        To Zone: {toAbbrev}
      </label> */}
        <br />
        <br />
        <label htmlFor="toTime" value={toTimeStamp}>
          To Time: {toTimeStamp} {toAbbrev}
        </label>
        <br />
        <br />
        <label htmlFor="timeDiff" value={offset}>
          Time Difference: {offset}
        </label>
        <br />
        <br />
      </div>
    </>
  );
};

export default StagingGroundPrime;
