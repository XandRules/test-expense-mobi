import React from 'react';

import axios from 'axios';

function getList(fileName){
  return axios.get(`http://localhost:3333/list/${fileName}`);
}

const ShowXlsx = ({fileName}) =>{
  
  let resp = {};

  getList(fileName).then(response =>{
    console.log(response.data.result)

    resp = response.data.result;

    resp.map(i =>{
      console.log(i[0], i[1], i[2]);
    })

  });

  return (
    <div className="uk-container">
        <table className="uk-table uk-table-divider">
          <thead>
              <tr>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>CPF</th>
              </tr>
          </thead>
          <tbody>
            {/* {resp.map(i =>{ */}
             <tr>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
            {/* })} */}
          </tbody>
      </table>
    </div>
  )

}

export default ShowXlsx;