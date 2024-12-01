function almostLucky(no){
    let checked =true;

    function isLucky(num){
        let numberToString = num.toString();
        for (let i = 0; i < numberToString.length; i++) {
            if (numberToString[i] !== '4' && numberToString[i] !=='7') {
                return false;
            }
        }
        return true;
    }

    if(!isLucky(no)){
        if(no %4 !== 0 && no %7 !== 0){
            checked = false;
        }
    }
    if(checked){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

// Example 1:
almostLucky(47);

// Example 2:
almostLucky(16);

// Example 3:
almostLucky(78);

