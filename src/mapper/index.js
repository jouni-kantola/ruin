function split(text){
    var pattern = /(?!\.)[0-9a-z\-]+/g;
    return text.match(pattern);
}

function map(list){
    return list.reduce((prev, curr) => {
        prev[curr] = '';
        return prev;
    }, {});
}

module.exports = {
    split: split,
    map: map
};