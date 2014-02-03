var exec = require('child_process').exec;

function base (method) {
  return function (service, callback) {
    callback = callback || function(err){
      if (err) return;
      console.log('---------------------' + (method + 'ed').blue.green + '---------------------');
    };
    console.log('---------------------' + (method + 'ing').bold.green + '---------------------');
    var cmd = ['service', service, method].join(' ');
    var proc = exec(cmd, callback);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
  };
}

exports.restart = base('restart');
exports.stop = base('stop');
exports.start = base('start');