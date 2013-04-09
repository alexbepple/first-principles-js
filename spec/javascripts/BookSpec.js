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

describe('Book,', function() {
    var book;

    beforeEach(function() {
        book = new Book();
    });

    describe('when new,', function() {
        it('can be lent', function() {
            expect(book.isLendable()).toBeTruthy();
        });
    });

    describe('when borrowed,', function() {
        beforeEach(function() {
            book.borrow();
        });
        it('cannot be lent', function() {
            expect(book.isLendable()).toBeFalsy();
        });

        it('can be lent again after it is returned', function() {
            book.give_back();
            expect(book.isLendable()).toBeTruthy();
        });
    });
});
