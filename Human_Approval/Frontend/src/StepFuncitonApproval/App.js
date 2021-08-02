import React, { useEffect, useState } from 'react'
import Table from './Table'
import './index.css';
import { get_token_data } from '../api';


const App = () => {
  const [data, setData] = useState([]);


  const getData = () => {
    get_token_data().then((item) => {
      setData(item.data.Items);
    })
  };

  useEffect(() => {
    getData();
  }, []);




  return <section className="container">
    <h3 style={{ margin: '50px 0px' }}>StepFunction Execution Approval</h3>
    <div className="text-center">
      <Table data={data} reload_data={getData} />
    </div>
  </section>
}

export default App
