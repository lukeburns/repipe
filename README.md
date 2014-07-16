## repipe

For repiping streams. Useful for laying [pipelines](https://github.com/lukeburns/pipeline).

### Installation
```
npm install through2-repipe
```
### Example
```
var repipe = require('through2-repipe');
var pipeline = cipher.pipe(decipher).pipe(process.stdout);
var line = pipeline.pipe(repipe(cipher, process.stdout));
    
fs.createReadStream('README.md').pipe(line);
```
becomes
```
fs.createReadStream('README.md').pipe(cipher).pipe(decipher).pipe(process.stdout);
```