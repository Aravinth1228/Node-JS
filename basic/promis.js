const payment = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Payment successful");
    } else {
        reject(new Error("Payment failed"));
    }
});

payment
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });