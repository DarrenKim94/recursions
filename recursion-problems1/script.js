function factorial(num) {
    //  the code will stop running once num === 0
      if (num === 0) {
        return 1;
      }
    //  the function will keep calling itself by decreasing the number 
    //  until the number reaches 0
      else {
        return num * factorial(num - 1);
      }
    }
    console.log(factorial(7))