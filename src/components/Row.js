import React from 'react';

const Row = ({data}) => {
    const {instrument_token, exchange_token, tradingsymbol, name, last_price, expiry, strike, tick_size, lot_size, instrument_type, segment, exchange} = data;
    const date = new Date(Math.round((expiry - 25569)*86400*1000));
    
    let formattedDate = date.getDate() + "/"+ parseInt(date.getMonth()+1) +"/"+date.getFullYear();
    //console.log(date2)
    // console.log(date);
    
    return (
       
            <tr key={instrument_token}>
                <td>{instrument_token}</td>
                <td>{exchange_token}</td>
                <td>{tradingsymbol}</td>
                <td>{name}</td>
                <td>{last_price}</td>
                <td>{formattedDate}</td>
                <td style={{backgroundColor: strike>=80 ? 'green' : 'red'}}>{strike}</td>
                <td style={{backgroundColor: tick_size<=0.0025 ? 'green' : 'red'}}>{tick_size}</td>
                <td>{lot_size}</td>
                <td>{instrument_type}</td>
                <td>{segment}</td>
                <td>{exchange}</td>
              </tr>
        
    );
};


export default Row;