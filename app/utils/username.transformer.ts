function usernameTransformer(str: string) {
    return str.substring(0, 3).replace(
        /\w\S*/g,
        function (txt: string) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    ).replace(/[&\/\s]/g, '-').trim();
}

export default usernameTransformer;