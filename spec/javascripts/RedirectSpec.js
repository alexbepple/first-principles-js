function redirectTo(url) {
    if (url.charAt(0) === "#") {
        window.location.hash = url;
    } else if (url.charAt(0) === "/") {
        window.location.pathname = url;
    } else {
        window.location.href = url;
    }
}

describe('redirectTo', function() {
    it('redirects to anchors', function() {
        redirectTo('#foo');
        expect(window.location.hash).toBe('#foo');
    });
});
