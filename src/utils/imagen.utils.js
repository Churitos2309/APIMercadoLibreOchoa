import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    //donde guardamos el archivo
    destination:function (req, file, cb) {
        const pathStorage = path.join(__dirname, "../multer");
        cb(null, pathStorage);
    },

    // nombre archivo
    filename: function (req, file, cb) {       
        const extFile = file.originalname.split(".").pop();
        const filename = `producto-${req.body.nombre}.${extFile}`;
        cb(null, filename)
    }
});
const uploadMiddleware = multer({storage});
module.exports = uploadMiddleware;