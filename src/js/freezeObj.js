// var test = 'test';
// console.log(test);
// setTimeout(() => {
//     console.log('ss');
// }, 1000);
// setInterval(() => {
//     console.log('dd');
// }, 1000);
function freezeObj(obj) {
    if (obj === null || typeof obj === '') {
        return;
    }
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, index) => {
        if (obj[key] !== null && typeof obj[key] === 'object') {
            freezeObj(obj[key]);
        }
    })
}

export default freezeObj;