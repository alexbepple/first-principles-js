function ObjectWithDate(clock) {
    var creation = clock.now();
    return {
        getCreation: function() {
            return creation;
        },
    };
}

describe('Object with date', function() {
    var object;
    beforeEach(function() {
        var clock = {};
        clock.now = function() {};
        spyOn(clock, 'now').andReturn(42);
        object = new ObjectWithDate(clock);
    });

    it('knows when it was created', function() {
        expect(object.getCreation()).toBe(42);
    });
});
