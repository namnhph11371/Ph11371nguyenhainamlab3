var http = require('http');
var url = require('url');
var kl = require('./kl.js');
var fs = require('fs');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Conten-Type': 'text/html' });

  var url = request.url;
  if (url == '/') {

    fs.readFile('abc.html', function (err, data) {
      if (err == null) {
        console.log(data)
        response.write(data);
        response.end();
      } else {
        response.end(err);
      }

    });

  } else if (url == '/insert') {
    fs.writeFile('text.txt', 'ghi file xem file', function (err) { // ghi file
      if (err == null) {
        response.end("ghi thanh cong");
      } else {
        response.end(err);
      }
    });

  } else if (url == '/append') {
    fs.appendFile('text.txt', '\n ghi file xem file lan 2', function (err) { // thêm vào file có sẵn
      if (err == null) {
        response.end("ghi thanh cong");
      } else {
        response.end(err);
      }
    });
  } else if (url == '/unlink') {
    fs.unlink('text.txt', function (err) { // xoá tên file
      if (err == null) {
        response.end("xoa thanh cong");
      } else {
        response.end(err);
      }
    });
  } else if (url == '/rename') {
    fs.rename('text.txt', 'test2.txt', function (err) { // sửa file thành tên mới
      if (err == null) {
        response.end("rename thanh cong");
      } else {
        response.end(err);
      }
    });
  } else if (url == '/login') {
    response.end("chao mung ban den voi login");
  } else {
    response.end("484 not found");
  }

  // var tong = kl.tinhtich(100,5);
  // response.end('ketQua:' + tong);
}).listen( process.env.PORT || '3000');








// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.set('Content-Type', 'text/html')
//   res.send("----------Từ Ấy-----------</br>Từ ấy trong tôi bừng nắng hạ <br> Mặt trời chân lý chói qua tim<br>  Hồn tôi là một vườn hoa lá<br>  Rất đậm hương và rộn tiếng chim...</br> </br> Tôi buộc lòng tôi với mọi người </br > Để tình trang trải với trăm nơi </br> Để hồn tôi với bao hồn khổ </br> Gần gũi nhau thêm mạnh khối đời</br></br> Tôi đã là con của vạn nhà </br> Là em của vạn kiếp phôi pha </br> Là anh của vạn đầu em nhỏ  </br> Không áo cơm, cù bất cù bơ...")
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })