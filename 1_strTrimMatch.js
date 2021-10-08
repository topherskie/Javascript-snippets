// 1. trim the string  
// 2. use .match to match the string base on given params convert into array.

function dataTrimMatch(data) {
  const dataTrim = data.replace(/\s+/g, '');
  const result = dataTrim.match(/.{1,5}/g);
  return result;
}


console.log(dataTrimMatch('99214 99204 L3000'));
