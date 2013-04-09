// Using jasmine.Clock.useMock() is only a workaround.
// In order to properly test the DelayedCalculator 
// we need to extract the delayed invocation to a dependency.
// In unit testing we can use a synchronous invoker.
// Production code would use an asynchronous invoker, e.g.:
//    var asynchronousInvoker = function(inner) {
//        setTimeout(inner, 500);
//    };
//    var calculator = newDelayedCalculator2(asynchronousInvoker);

var newDelayedCalculator2 = function(invoker) {
    var result;
    return {
        calculate: function() {
            invoker(function() { result = 42; });
        },
        getResult: function() {
            return result;
        }
    };
};

describe('Delayed calculator', function() {
    it('calculates result using invoker', function() {
        var synchronousInvoker = function(inner) { inner(); };
        var calculator = newDelayedCalculator2(synchronousInvoker);
        calculator.calculate();
        expect(calculator.getResult()).toEqual(42);
    });
});
