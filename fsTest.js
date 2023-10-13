// fs = FileSystem을 요청한다.
const fs = require('fs');

// 파일 읽기 file [option] callback
fs.readFile('index.html', (err, data) => {
  if (err) {

  } else {
    console.log(data);
  }
})