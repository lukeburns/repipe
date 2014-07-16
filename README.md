## repipe

For repiping streams. Useful for laying pipelines.

```
var sequence = cipher.pipe(decipher).pipe(process.stdout),
	line = sequence.pipe(repipe(cipher, process.stdout));
    
fs.createReadStream('README.md').pipe(line);
```
becomes
```
fs.createReadStream('README.md').pipe(cipher).pipe(decipher).pipe(process.stdout)
```