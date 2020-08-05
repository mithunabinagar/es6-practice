function add(num1, num2 = 60){
    // 
    // num2 =num2 || 30;
    return num1 + num2;
}

const total = add(15, 25);
console.log(total);