const httpBuildQuery = (parameters) => {
    return '?' + Object.keys(parameters).map( (element) => {
        return element + "=" + parameters[element];
    }).join('&');
};

export default httpBuildQuery;