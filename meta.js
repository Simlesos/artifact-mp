// /**
//  * 读取 artifact api
//  */
// const http = require('http')
// const fs = require('fs')

// const CARD_00 = 'http://media.st.dl.bscstorage.net/apps/583950/resource/card_set_0.539E6544DC1F6BA280550CE79EEE287F5052498F.json'
// const CARD_01 = 'http://steamcdn-a.akamaihd.net/apps/583950/resource/card_set_1.1C449086BE56DAD0BB7E7227B6396EA4BE7BF553.json'

// http.get(CARD_01, (res) => {
//   const { statusCode } = res
//   const contentType = res.headers['content-type']

//   let error
//   if (statusCode !== 200) {
//     error = new Error('Request Failed.\n' +
//                       `Status Code: ${statusCode}`)
//   } else if (!/^application\/json/.test(contentType)) {
//     error = new Error('Invalid content-type.\n' +
//                       `Expected application/json but received ${contentType}`)
//   }
//   if (error) {
//     console.error(error.message)
//     // consume response data to free up memory
//     res.resume()
//     return;
//   }

//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
//     try {
//       const parsedData = JSON.parse(rawData);
//       parsedData.card_set.card_list.forEach(x => {
//         x.card_text = x.card_text.schinese
//         x.large_image = x.large_image.schinese
//         x.card_name = x.card_name.schinese
//       });
//       const json = JSON.stringify(parsedData)
//       fs.writeFileSync('01.json', json)
//       console.log('success')
//       process.exit(0)
//     } catch (e) {
//       console.error(e.message);
//     }
//   });
// }).on('error', (e) => {
//   console.error(`Got error: ${e.message}`);
// });