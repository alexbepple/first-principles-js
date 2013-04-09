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
        jasmine.Clock.useMock();
        var calculator = newDelayedCalculator();
        calculator.calculate();
        jasmine.Clock.tick(501);
        expect(calculator.getResult()).toEqual(42);
    });
});

