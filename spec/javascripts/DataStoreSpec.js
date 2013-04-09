var newDataStore = function() {
    var data = [];
    return {
        push: function (item) {
            data.push(item);
        },
        pop: function() {
            return data.pop();
        },
        length: function() {
            return data.length;
        }
    };
};

describe('Data store', function() {
    var dataStore;
    beforeEach(function() {
        dataStore = newDataStore();
    });
    it('pops', function() {
        dataStore.push(0);
        expect(dataStore.pop()).toBe(0);
    });
    it('pops the topmost', function() {
        dataStore.push(0);
        dataStore.push(1);
        expect(dataStore.pop()).toBe(1);
    });
    it('push increases length', function() {
        dataStore.push(0);
        expect(dataStore.length()).toBe(1);
    });
});
