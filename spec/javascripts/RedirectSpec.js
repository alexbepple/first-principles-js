function redirectTo(url) {
    window.location[_locationComponent(url)] = url;
}

function locationComponent(url) {
    if (url.charAt(0) === "#")
        return 'hash';
    if (url.charAt(0) === '/')
        return 'pathname';
    return 'href';
}

describe('redirectTo', function() {
    it('redirects to anchors', function() {
        expect(locationComponent('#foo')).toBe('hash');
    });
    it('redirects to relative resources', function() {
        expect(locationComponent('/foo')).toBe('pathname');
    });
    it('redirects to full uris', function() {
        expect(locationComponent('http://a.b.c')).toBe('href');
    });
});
