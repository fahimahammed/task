import React from 'react';

const Row = ({data}) => {
    const { __EMPTY, instrument_token, exchange_token, tradingsymbol, name, last_price, expiry, strike, tick_size, lot_size, instrument_type, segment, exchange} = data;
    
    const date = new Date(Math.round((expiry - 25569)*86400*1000));   //convert excel data to Date-Time
    let formattedDate = date.getDate() + "/"+ parseInt(date.getMonth()+1) +"/"+date.getFullYear();     //Only get full Data
    
    //console.log(formattedDate);
    // console.log(date);
    
    return (
       
            <tr key={instrument_token}>
                <td>{ __EMPTY }</td>
                <td>{ instrument_token }</td>
                <td>{ exchange_token }</td>
                <td>{ tradingsymbol }</td>
                <td>{ name }</td>
                <td className='text-end'>{ last_price }</td>
                <td className='text-end'>{ formattedDate }</td>
                <td 
                    className='text-end' 
                    style={{backgroundColor: strike >= 80 ? strike === 0 ? 'none' : 'green' : 'red'}}>
                        { strike }
                </td>
                <td 
                    className='text-end' 
                    style={{backgroundColor: tick_size <= 0.0025 ? tick_size === 0 ? 'none' : 'green' : 'red'}}>
                        { tick_size }
                </td>
                <td className='text-end'>{ lot_size }</td>
                <td>{ instrument_type }</td>
                <td>{ segment }</td>
                <td>{ exchange }</td>
              </tr>
        
    );
};


export default Row;