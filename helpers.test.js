describe('helper function tests', function(){
    describe('sumPaymentTotal tests', function(){
        it('should compute the total for the specified type from allPayments', function(){
            allPayments = {
                'payment1': {
                    'billAmt': '100',
                    'tipAmt': '20',
                    'tipPercent': 20
                },
                'payment2': {
                    'billAmt': '40',
                    'tipAmt': '6',
                    'tipPercent': 15
                },
                'payment3': {
                    'billAmt': '10',
                    'tipAmt': '1',
                    'tipPercent': 18
                }
            };
            expect(sumPaymentTotal('billAmt')).toBe(150);
            expect(sumPaymentTotal('tipAmt')).toBe(27);
            expect(sumPaymentTotal('tipPercent')).toBe(53);
        })
    });
    describe('calculateTipPercent', function(){
        it('should compute the tip percentage from the billAmt and tipAmt', function(){
            expect(calculateTipPercent(120, 25)).toBe(21);
        })
    });
    describe('appendTd', function(){
        it('should append a td to a specified tr on appedTd()', function(){
            const newTr = document.createElement('tr');
            const tdValue = 'ham sandwhich';
            appendTd(newTr, tdValue);
            expect(newTr.cells[0].innerText).toBe(tdValue);
        })
    });
    afterEach(function() {
        allPayments = {};
    });
});