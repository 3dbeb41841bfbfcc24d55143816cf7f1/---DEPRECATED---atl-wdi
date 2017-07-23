fs.readFile('./data-csv')
  .then((err, data) => {
    if (err) throw err;
    return csv.parse(data);
  })
  .then((err, csvData) => {
    if (err) throw err;

    var url = csvData[0].url;
    return http.request({
      host: url
    });
  })
  .then(res => { // make an HTTP request
    var responseData = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    res.on('end', () => { // collect the response
        return ResponseMessages.create({body: responseData})
      })
      .then((err, messageRecord) => {
        if (err) throw err;
        res.render('response', responseData);
      })
  })
  .catch(err => {
    console.log(`problem with request: ${err.message}`);
  });