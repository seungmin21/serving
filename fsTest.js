// fs = FileSystem을 요청한다.
const fs = require('fs');

// 파일 읽기 file [option] callback
// 6번 내용이 방식이 몇개 더 있을거라 판단
// 혹시 몰라 직접 index 파일을 만들어서 테스트
fs.readFile('index.html', 'utf8', (err, data) => {
  if (err) {
    // throw 예외 발생 장치
    throw err
  } else {
    console.log(data);
  }
})