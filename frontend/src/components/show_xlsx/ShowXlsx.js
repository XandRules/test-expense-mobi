import React from 'react';
import Table from './Table';

var r = [{
  "name": [
    ""
  ],
  "lastName": [
    "",
  ],
  "cpf": [
    ""
  ]
}]

export default function ShowXlsx ({result}){
  
  if(result)
  {
    r = []
    r.push(result);
  } 

 
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
            {
              r.map(item =>{
                return <Table name={item.name} lastName={item.lastName} cpf={item.cpf} />
               
              })
            }
          
          </tbody>
      </table>
    </div>
  )

}
