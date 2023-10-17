// 내장모듈 http를 요구했다.
const http = require('http');
const fs = require('fs');

// 화살표 함수를 사용했다는 점을 들어 function을 작성하지 않았다.
const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                throw err;
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html; charset = utf-8' });
                response.end(data);
                console.log(data);
            }
        });
    } else {
        // 불일치에 대해서 오류문구 작성
        response.writeHead(404, { 'Content-Type': 'text/html; charset = utf-8' });
        response.end('404페이지를 찾을 수 없습니다.');
    }
});
// localhost:8080
server.listen(8080);
