
import React, { Component } from 'react';
import axios from 'axios'; 

import DownloadXlsx from './components/download_xlsx/DownloadXlsx';
import ShowXlsx from './components/show_xlsx/ShowXlsx';

export default class App extends Component {
    state = { 
        selectedFile: null,
        fileName : null,
        result : null,
    }; 
    
    onFileChange = event => {      
      // Atualiza o estado
      this.setState({ selectedFile: event.target.files[0] }); 

      console.log(event.target.files[0]);
    
    }; 
    
    // Ao clicar em Upload envia o arquivo
    onFileUpload = () => { 
    
      // Cria um objeto formData 
      const formData = new FormData(); 
    
      // Atualiza o objeto formData 
      formData.append( 
        "file", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 

      // Envia o arquivo para a Api
      axios.post("http://localhost:3333/file", formData).then(response =>{
       // console.log(response.data);
        this.fileName = response.data.path;
        this.setState({fileName: this.fileName});

        // Consulta pelo nome do arquivo enviado.
        axios.get(`http://localhost:3333/list/${this.fileName}`).then(response =>{
         // console.log(response.data);
          this.result = response.data;
          this.setState({result : this.result});
        });
      });     

      
    };   

  render() {
    const {
      fileName,
      result,
    } = this.state;

    return (
      <div className="container">
        <h1 className="center-align">Teste Expense Mobi</h1>

        <div className="row">
          <div className="col s12 left-align">

          <div className="col s6"> 
            <div className="file-input"> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Enviar! 
                </button> 
                <input value={this.fileName}></input>
            </div> 
         
        </div> 
            <div className="col s6 right-align">
            <DownloadXlsx></DownloadXlsx>             
            </div>
            <div className="col s12 push-7">
            <ShowXlsx
              result={this.result}
            ></ShowXlsx>              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
