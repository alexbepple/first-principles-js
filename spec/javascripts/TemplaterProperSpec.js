// In order to be able to test the Templater properly,
// it is best to separate the responsibilities.
// One way to do this is to decompose functionally.
// Another would be to extract the rendering as a dependency.
// Here I decompose functionally.
//
// Note that the unit tests test the different concerns of
// what used to be the Templater separately.

xdescribe('Integration usage like this', function() {
    it('should not be tested unless absolutely necessary', function() {
        var manager = newTemplateManager();
        manager.defineTemplate('foo', newTemplate('{key}'));
        var rendered = manager.get('foo').render({key: 'value'});
        expect(rendered).toEqual('value');
    });
});



var newTemplateManager = function() {
    var templates = {};
    return {
        defineTemplate: function(name, template) {
            templates[name] = template;
        },
        get: function(name) {
            if (typeof templates[name] === 'undefined')
                throw 'Template ' + name + ' not found!';
            return templates[name];
        }
    };
};
var newTemplate = function(template) {
    return {
        render: function(values) {
            var str = template;
            for (var key in values) {
                str = str.split("{" + key +"}").join(values[key]);
            }
            return str;
        }
    };
};

describe('Template Manager', function() {
    var manager;
    beforeEach(function() {
        manager = newTemplateManager();
    });
    it('manages templates by name', function() {
        manager.defineTemplate('foo', 'bar');
        expect(manager.get('foo')).toEqual('bar');
    });
    it('throws exception when requesting undefined template', function() {
        expect(function() {
            manager.get('foo');
        }).toThrow();
    });
});

describe('Template', function() {
    it('renders to itself without placeholders', function() {
        expect(newTemplate('template').render({key: 'value'})).toEqual('template');
    });
    it('renders one placeholder', function() {
        expect(newTemplate('{key}').render({key: 'value'})).toEqual('value');
    });
});

