const { clearScreenDown } = require('readline');
const { myReadFile, myWriteFile, username, myAppendFile, myDeleteFile } = require('./fsDemo1')

require('./fsDemo1.js')
const data='my json file data';
myReadFile();
myWriteFile(data);
myReadFile();
const data1=' my username and password is admin';
myAppendFile(data1);
myReadFile();
myDeleteFile();