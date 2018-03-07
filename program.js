//console.log("HELLO WORLD");
// #2



//console.log("arg length",process.argv)
//var sum= 0;
//for (var i=2;i<=(process.argv.length-1);i++){
//	console.log(parseInt(process.argv[i]))
//	sum +=parseInt(process.argv[i])
//	console.log("-->",sum)
//}
//var sum =Number( parseInt(process.argv[2])+parseInt(process.argv[3])+parseInt(process.argv[4]))
//console.log(sum);
//console.log("--",sum);


//#3
// var fs = require('fs')
// var src = process.argv[2]
// var buf =  fs.readFileSync(src);
// var str = buf.toString()
// //console.log(src);
// //console.log(str);
// var split_ = str.split("\n");
// console.log(split_.length - 1 );

// #4
// var fs = require('fs')
// try {
//     var src = process.argv[2]
// } catch (error) {
//     console.log("NO 2 ARGUMENT PASSED");
// }
// // var src = process.argv[2]
// var buf =  fs.readFile(src,function (err,data) {
//     if(!err){
//         data  = data.toString();
//         // console.log(typeof data)
//         var split_ = data.split("\n");
//         console.log(split_.length - 1 );
//     }
//     else{
//         console.log("NO 2 ARGUMENT PASSED",err);
//     }
// });
// var str = buf.toString()
//console.log(src);
//console.log(str);
// var split_ = str.split("\n");
// console.log(split_.length - 1 );
///--------------M4-------------------------
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
///---------------------------------------

//#5
// var fs = require('fs')
// var files_list = process.argv[2]
// var ext = process.argv[3];
// fs.readdir(files_list, function (err, files_count) {
//   if (err) {
//     return console.log(err)
//   }
// //   console.log(files_count)
//   for (let index = 0; index < files_count.length; index++) {
//       const element = files_count[index].toString().split(".")
//     //   console.log(element[1])
//       if(element[1]==ext){
//         console.log(files_count[index])
//       }
      
//   }
// })
// console.log(files_list,ext);
// #6
// var mymodule = require('./mymodule.js');
// // var data = "hello world";
// var dir = process.argv[2]
// var filter = process.argv[3];
// function callback(err,data) {
//     if (err) 
//     return callback(err)
//     console.log(data)
// }
// mymodule(dir,filter,function(err){
//     if (err) 
//     return err
// });
// MAKE MODULE
// var filterFn = require('./mymodule.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

// HTTP FILE ACCESS

// var http =require('http');
// var bl = require('bl')  
// var url = process.argv[2];
// console.log(url)
// http.get(url,function (err,response) {
//     if(err){
//         return console.log("THERE WAS AN ERR ",err);
//     }
//     response.on("data",function (data) {
//         console.log(data)
//     })
// })
// http.get(url, function(res) {
//     res.setEncoding('utf8');
// //   console.log("Got response: " )
//   res.on("data",function (data) {
//     console.log(data) 
//   });
// });
// console.log(process.argv.length - 2 ) 
// var results = []
// var count = 0
// for (let index = 2; index < process.argv.length; index++) {
//     const url = process.argv[index];
//     http_req(url);
//     count++;
//     // console.log(process.argv.length - 2,results.length) 
//     // if((count == process.argv.length - 2) &&( results.length == count)){
//     //     show()    
//     // }
// }
// function show () {
//     // console.log(count,results)
//     for (let i = 0; i < 3; i++) {
//       console.log(results[i])
//     }
//   }
// function http_req(url) {
    
//     http.get(url, function(res) {
//         // res.setEncoding('utf8');
//     //   console.log("Got response: " )
//     res.pipe(bl(function (err, data) { 
//         data = data.toString()
//         // console.log(data.length)
//         // console.log(data) 
//         results.push(data)
//         // console.log(results.length)
//         if(results.length == process.argv.length - 2){
//             show()
//         }
       
//         }))
//     });
// }
// http.get(url, function(res) {
//     // res.setEncoding('utf8');
// //   console.log("Got response: " )
// res.pipe(bl(function (err, data) { 
//     data = data.toString()
//     // console.log(data.length)
//     console.log(data) 
//     }))
// });

// tcp time server
// var net = require('net')  
// var port = process.argv[2];
// // var d  = require('date');
// var server = net.createServer(function (socket) {  
// // socket handling logic  
// // console.log(socket);
// socket.end(timeFn() + '\n')
// })  
// function timeFn() {
//     const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').slice(0,-3) ;
//     return date;
// }
// server.listen(port)  

// const net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))

// # FILE HTTPS SERVER

// var http = require('http')  ;
// var fs = require('fs');
// var port = process.argv[2];
// var file_ = process.argv[3];
// console.log(port,file_)
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })
//     fs.createReadStream(file_).pipe(res)
//   })
// server.listen(port)    


// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))

const http = require('http')
const url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))