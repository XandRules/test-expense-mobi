import React from 'react';

var resp = new Array();// [["Alexandre","Ribeiro","115.853.176-16"],["Alexandre","Ribeiro","115.853.176-16"]];

const ShowXlsx = ({result}) =>{
  
  console.log('resultado ' , result)

  
  resp.push(result);
    resp.map(i =>{
      console.log(i)
    })
    

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
           
             {resp.map(i =>{
               return <tr>
                <td>{i[0]}</td>
                <td>{i[1]}</td>
                <td>{i[2]}</td>
              </tr>
             })}           
          
          </tbody>
      </table>
    </div>
  )

}

export default ShowXlsx;