function ObjectWithDate() {
    var creation = Date.now();
    return {
        getCreation: function() {
            return creation;
        },
    };
}

describe('Object with date', function() {
    var object;
    beforeEach(function() {
        object = new ObjectWithDate();
    });

    it('knows when it was created', function() {
        console.log(object.getCreation());
    });
    it('knows when it was created', function() {
        expect(object.getCreation()).toBe(Date.now());
    });
});
