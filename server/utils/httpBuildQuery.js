module.exports = function (parameters) {
    return '?' + Object.keys(parameters).map( (element) => {
        return element + "=" + parameters[element];
    }).join('&');
};