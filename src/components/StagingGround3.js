import React from "react";
import countryZones from "./dataArray";
import styles from "./mystyle.css";

const CountryList2 = (props) => {
  return (
    <div>
      <input
        className="input"
        type="text"
        list="data"
        onChange={props.onChange}
      />
      <datalist id="data">
        {countryZones.map((item, key) => (
          <option key={key} value={item.zoneName} />
        ))}
      </datalist>
    </div>
  );
};

export default CountryList2;
