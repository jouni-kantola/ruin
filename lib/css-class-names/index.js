module.exports = (text) => {
    return text.match(/(?!\.)[0-9a-z\-]+/g);
};