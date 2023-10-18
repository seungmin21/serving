// 내장모듈 http를 요구했다.
const http = require('http');
const fs = require('fs');

// 화살표 함수를 사용했다는 점을 들어 function을 작성하지 않았다.
const server = http.createServer( (request, response) => {
  // 요청 메서드를 GET(데이터 요청) 그리고 요청 url을 /(경로) 일치할 경우
  if (request.method === "GET" && request.url === "/") {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        response.writeHead(404, {"Content-Type": "text/html; charset = utf-8"})
        response.write("404 페이지를 찾을 수 없습니다.")
        response.end(err);
      } else {
        response.writeHead(200, {"Content-Type": "text/html; charset = utf-8"})
        response.write(data);
        response.end();
        }
    })
  }
})
// localhost:8080
server.listen(8080);