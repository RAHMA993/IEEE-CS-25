function findOriginalMessage (shift, typedMessage) {
    const keyboard = "qwertyuiopasdfghjkl;zxcvbnm,./"
    let originalMessage = "";
    for (let i = 0; i < typedMessage.length; i++) {
        let typedLetter = typedMessage[i];

        let indexOfLetter = -1;
        for (let j = 0; j < keyboard.length; j++) {
            if (typedLetter == keyboard[j]) {
                indexOfLetter = j;
                break;
            }
        }
        if (shift == 'R') {
            originalMessage += keyboard[indexOfLetter - 1] 
        }else if (shift == 'L') {
            originalMessage += keyboard[indexOfLetter + 1]
        }
    }
    return originalMessage;
}

//Example 1:

let shift = 'R'
let typedMessage = "s;;upimrrfod;pbr"

console.log(findOriginalMessage(shift, typedMessage));

//Example 2:

let shift2 = 'L';
let typedMessage2 = "epgnpqpagwew"

console.log(findOriginalMessage(shift2, typedMessage2));
