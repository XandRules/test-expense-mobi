

class FileController {
    
  async store(req, res) {
    try {
      const {
        originalname: name,
        filename: path
      } = req.file;


      return res.json({name, path});

    } catch (error) {

      return res.json({
        error: error
      }, {
        req: req.file
      });

    }
  }
}

export default new FileController();