## repipe

For repiping streams. Useful for laying down pipelines.

```
var sequence = gzip.pipe(through()).pipe(process.stdout),
	line = sequence.pipe(repipe(gzip, process.stdout));
    
fs.createReadStream('README.md').pipe(line);
```
becomes
```
fs.createReadStream('README.md').pipe(gzip).pipe(through()).pipe(process.stdout)
```