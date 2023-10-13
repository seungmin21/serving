// 내장모듈 http를 요구했다.
const http = require('http');

// 화살표 함수를 사용했다는 점을 들어 function을 작성하지 않았다.
const server = http.createServer( (request, response) => {
  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/html; charset = utf-8"})
    response.write("hello");
    response.end();
  }
})
server.listen(8080);