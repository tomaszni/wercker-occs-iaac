var stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [];

stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    var input = inputChunks.join(),
        outputJSON = JSON.stringify(input);
    stdout.write(outputJSON);
});
