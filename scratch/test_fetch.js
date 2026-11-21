const http = require('http');

http.get('http://localhost:2022/about', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Data length:', data.length);
    console.log('Contains about__section--education:', data.includes('about__section--education'));
    console.log('Contains data-template="about":', data.includes('data-template="about"'));
    console.log('Contains about__mobile__footer:', data.includes('about__mobile__footer'));
    console.log('Contains hamburger:', data.includes('hamburger'));
  });
}).on('error', err => console.error('Fetch err:', err.message));
