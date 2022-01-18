const getRandom = () => new Promise((resolve) => {
    resolve(Math.random());
    setTimeout(() => {
        resolve(Math.random());
    }, 1000);
})

export default getRandom;

