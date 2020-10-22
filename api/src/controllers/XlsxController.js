import xlsx from 'node-xlsx';
import fs from 'fs';

class XlsxController {

async readFile(req,res){

  // Parse a buffer
  const fileBuffer = xlsx.parse(fs.readFileSync(`./tmp/uploads/${req.params.filename}`));


  let results = {};

  const result = fileBuffer.forEach(element => {
    console.log(element.data)

    results.nome = element.data;

  });

  console.log('rs' , results)

  return res.json({
    result : 
    results.nome
  })

}
 
}

export default new XlsxController();