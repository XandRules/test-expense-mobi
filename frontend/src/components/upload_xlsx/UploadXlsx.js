import axios from 'axios'; 
  
import React,{Component} from 'react';
  
class UploadXlsx extends Component { 
   
    state = { 
        selectedFile: null,
        fileName : null,
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
     
      console.log(this.state.selectedFile); 
     
      // Envia o arquivo para a Api
      axios.post("http://localhost:3333/file", formData).then(response =>{
        console.log(response.data);
        this.fileName = response.data.path;
        this.setState({fileName: this.fileName});
      }); 

      
    }; 
     
    render() { 
     
      return ( 
        <div className="uk-container uk-text-left uk-grid-divider" uk-grid style={{marginTop: '10px'}}> 
            <div className="file-input"> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Enviar! 
                </button> 
                <input value={this.fileName}></input>
            </div> 
         
        </div> 
      ); 
    } 
  } 
  
  export default UploadXlsx; 
