var ans = [];
var sum = 0;

for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        ans.push(i);
        sum += i;
    }
}

document.write(sum);
