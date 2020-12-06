const checkForSpam = function (message) {
    const messageNormalized = message.toLowerCase();
    const validate = messageNormalized.includes('spam') || messageNormalized.includes('sale');

    return validate;
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get best sale offers now!')); 
console.log(checkForSpam('[SPAM] How to earn fast money?'));