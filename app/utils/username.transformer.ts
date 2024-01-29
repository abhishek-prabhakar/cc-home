function usernameTransformer(str: string) {
    const d = new Date();
    return str.substring(0, 3).replace(
        /\w\S*/g,
        function (txt: string) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    ).replace(/[&\/\s]/g, '-').trim() + d.getFullYear();
}

export default usernameTransformer;