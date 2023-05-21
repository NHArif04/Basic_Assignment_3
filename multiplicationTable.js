function multiplicationTable() {
    let num = prompt("Enter a number to generate multiplication table:");
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log("${num} x ${i} = ${product}");
    }
}

multiplicationTable();
