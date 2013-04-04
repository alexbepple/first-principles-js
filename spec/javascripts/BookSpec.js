function Book() {
    var lendable = true;
	return {
        isLendable: function() {
            return lendable;
        },
        borrow: function() {
            lendable = false;
        },
        give_back: function() {
            lendable = true;
        },
	};
}

describe('Book', function() {
    it('can be lent and returned', function() {
        var book = new Book();
        expect(book.isLendable()).toBeTruthy();
        book.borrow();
        expect(book.isLendable()).toBeFalsy();
        book.give_back();
        expect(book.isLendable()).toBeTruthy();
    });
});
