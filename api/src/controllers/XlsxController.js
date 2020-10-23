import xlsx from 'node-xlsx';
import fs from 'fs';

class XlsxController {

async readFile(req,res){

  const fileBuffer = xlsx.parse(fs.readFileSync(`./tmp/uploads/${req.params.filename}`));

  let results =  {
    name: [],
    lastName: [],
    cpf : []
  }

  const result = fileBuffer.map(element => {
    let len = 0;
    for (const key in element.data) {

      len = element.data[key].length;

      results.name.push(element.data[key][0])     
      results.lastName.push(element.data[key][1]) 
      results.cpf.push(element.data[key][2])      

    }
  });

  const { name , lastName, cpf } = results;

  return res.json({
    name,
    lastName,
    cpf
  })

}
 
}

export default new XlsxController();