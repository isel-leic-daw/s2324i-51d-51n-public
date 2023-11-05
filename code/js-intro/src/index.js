import { add } from './add';
import { mul } from './mulUsingAdd';
import { example } from './createElementExample';
import URITemplate from 'urijs/src/URITemplate';

console.log('Running app.js');
console.log(add(1, mul(2, 6)));

const template = new URITemplate('https://example.com/some/path/{id}');
const uri = template.expand({
  id: 'abc-123',
});

console.log(uri);

example();
