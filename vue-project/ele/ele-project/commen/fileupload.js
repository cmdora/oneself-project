let path = require('path')
let multer = require('multer')
let md5 = require('md5')

let storage = multer.diskStorage({
	destination: path.join(__dirname, 'upload'),
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".")
		cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length-1])
	}
})

var uploads = multer({
	storage: storage,
	limits: {}
})

module.exports = uploads