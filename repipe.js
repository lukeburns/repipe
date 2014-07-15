var through = require('through2');

module.exports = repipe;

function repipe(from, to) {
	return through().on('pipe', function(src) {
		if(src !== from) {
			src.pipe(to);
			src.unpipe(this);
		}
	});
}
