var newDelayedCalculator = function() {
    var result;
    return {
        calculate: function() {
            setTimeout(function() { result = 42; }, 500);
        },
        getResult: function() {
            return result;
        }
    };
};


describe('Delayed calculator', function() {
    it('calls function after delay', function() {
        var calculator, start;
        
        runs(function() {
            start = Date.now();
            calculator = newDelayedCalculator();
            calculator.calculate();
        });
        waitsFor(function() { return (Date.now()-start) > 500; });
        runs(function() {
            expect(calculator.getResult()).toEqual(42);
        });
    });
});

