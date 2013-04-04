function Templater() {
    function supplant(str, params) {
        for (var prop in params) {
            str = str.split("{" + prop +"}").join(params[prop]);
        }
        return str;
    }

    var templates = {};

    this.defineTemplate = function(name, template) {
        templates[name] = template;
    };

    this.render = function(name, params) {
        if (typeof templates[name] !== "string") {
            throw "Template " + name + " not found!";
        }

        return supplant(templates[name], params);
    };
}

describe('Templater', function() {
    it('replaces placeholders with actual values', function() {
        var templater = new Templater();
        templater.defineTemplate('foo', 'foo {bar}');
        var rendered = templater.render('foo', {bar: 'baz'});
        expect(rendered).toBe('foo baz');
    });
});
