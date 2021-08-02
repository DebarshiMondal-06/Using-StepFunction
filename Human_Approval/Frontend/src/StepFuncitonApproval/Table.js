import React from 'react'
import { start_machine } from '../api';



const Table = ({ data, reload_data }) => {

  const execute_machine = (tokenName, token) => {
    start_machine({
      tokenName, token
    }).then(() => {
      reload_data();
    }).catch(err => console.log(err));
  };




  return <table className="table table-striped table-bordered">
    {
      data.length > 0 ? <>   <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Token ID</th>
          <th scope="col">Start Execution</th>
        </tr>
      </thead>
        <tbody className="table-custom">
          {
            data && data.map((items, i) => {
              const { tokenName, token } = items;
              return <tr key={i}>
                <td>{i + 1}</td>
                <td>{tokenName}</td>
                <td className="start-btn"><button onClick={() => execute_machine(tokenName, token)} className="btn btn-secondary">
                  <i className="far fa-check-circle"></i>
                </button></td>
              </tr>
            })
          }
        </tbody> </> : <section>
          <h1>No Data</h1>
        </section>
    }
  </table>
}

export default Table
