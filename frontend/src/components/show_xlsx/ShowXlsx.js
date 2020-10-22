import React, { Component } from 'react';

import axios from 'axios';


export default class ShowXlsx extends Component{
  
  state = { 
    fileName : null,
  }; 
  
  getList(){
    return axios.get(`http://localhost:3333/list/${this.props.fileName}`).then(response =>{
      console.log(response.data.result);
    });
  }
  
  render() {
    return (
      <div className="uk-container" onChange={this.props.onChange}>
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


}