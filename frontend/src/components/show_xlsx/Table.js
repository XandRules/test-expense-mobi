import React from 'react';

function formatCPF(cpf){

    let str = cpf.toString();
    let cpf_formated = str.replace(/\D/g, '');
    return cpf_formated;
  }

export default function Table(props) {
  const { name, lastName, cpf } = props;

 for (const key in name) {
     return (
       <tr>
           <td>{name[key]}</td>
           <td>{lastName[key]}</td>
           <td>{formatCPF(cpf[key])}</td>
       </tr>    
     );
 }
}
