let input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    main(input);
});

function main(input) {
    console.log(input);
}

