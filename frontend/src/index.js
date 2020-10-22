import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DownloadXlsx from './components/download_xlsx/DownloadXlsx';
import ShowXlsx from './components/show_xlsx/ShowXlsx';
import UploadXlsx from './components/upload_xlsx/UploadXlsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UploadXlsx/>
    <DownloadXlsx/>
    <ShowXlsx/>
  </React.StrictMode>,
  document.getElementById('root')
);