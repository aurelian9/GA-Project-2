import React from 'react';
import countryZones from './dataArray';

const CountryList2 = (props) => {


    return (
        <div>
            <input type="text" list="data" onChange={props.onChange}/>
            <datalist id="data">
                {countryZones.map((item, key) => 
                <option key={key} value={item.zoneName} />
                )}
            </datalist>
        </div>
    );
};

export default CountryList2;