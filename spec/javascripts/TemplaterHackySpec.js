function Templater() {
    this._supplant = function(str, params) {
        for (var prop in params) {
            str = str.split("{" + prop +"}").join(params[prop]);
        }
        return str;
    };

    var templates = {};

    this.defineTemplate = function(name, template) {
        templates[name] = template;
    };

    this.render = function(name, params) {
        if (typeof templates[name] !== "string") {
            throw "Template " + name + " not found!";
        }

        return this._supplant(templates[name], params);
    };
}

describe('Templater', function() {
    it('replaces placeholders with actual values', function() {
        var templater = new Templater();
        var rendered = templater._supplant('foo {bar}', {bar: 'baz'});
        expect(rendered).toBe('foo baz');
    });
});

