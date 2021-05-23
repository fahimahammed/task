import * as XLSX from "xlsx";
import { useState } from 'react';
import Row from './components/Row';

function App() {
  const [items, setItems] = useState([]); // state for set json data(converted from excel file)

  const readExcel=(file)=>{
    //console.log('file:: ',file);

    const promise = new Promise((resolve, reject) =>{
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws); //convert excel file to json
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      setItems(data);   // set data in state
      //console.log('data:: ', data);
    });
    
  };

      
  return (
    <section className='p-2'>
        <lebel>Upload provided xlsx file: </lebel>
        <input type='file'
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
        }}/>
        
        <table className="table table-striped table-hover table-bordered table-sm border-secondary mt-5">
          <thead>
            <tr className='text-center bg-secondary bg-gradient text-white'>
              <th scope="col">instrument_token</th>
              <th scope="col">exchange_token</th>
              <th scope="col">tradingsymbol</th>
              <th scope="col">name</th>
              <th scope="col">last_price</th>
              <th scope="col">expiry</th>
              <th scope="col">strike</th>
              <th scope="col">tick_size</th>
              <th scope="col">lot_size</th>
              <th scope="col">instrument_type</th>
              <th scope="col">segment</th>
              <th scope="col">exchange</th>
            </tr>
          </thead>

          <tbody>
            { items.map((data) => <Row key={data.instrument_token} data={data}></Row>)}
          </tbody>

        </table>
    </section>
  );
}

export default App;
