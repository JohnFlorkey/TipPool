describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    describe('submitPaymentInfo test', function(){
        it('should add a new payment to allPayments on submitPaymentInfo()', function () {
            // setup expected output
            const result = {
                'payment1': {
                    'billAmt': '100',
                    'tipAmt': '20',
                    'tipPercent': 20
                }
            };
            submitPaymentInfo();
            expect(allPayments).toEqual(result);

            // look into adding spies to see if subsequent functions are called
        });
    });

    describe('createCurrentPayment tests', function(){
        it('should create currentPayment object on createCurrentPayment()', function() {
            const result = {
                'billAmt': '100',
                'tipAmt': '20',
                'tipPercent': 20
            };
            expect(createCurPayment()).toEqual(result)
        });

        it('should do nothing when billAmt or tipAmt are empty on createCurrentPayment()', function() {
            billAmtInput.value = '';
            tipAmtInput.value = 20;
            expect(createCurPayment()).nothing();

            billAmtInput.value = 100;
            tipAmtInput.value = '';
            expect(createCurPayment()).nothing();
        });
    });

    describe('appendPaymentTable tests', function(){
        it('should append a new table row on appendPaymentTable()', function(){
            const input = {
                'billAmt': '100',
                'tipAmt': '20',
                'tipPercent': 20
            };
            paymentId ++;
            appendPaymentTable(input);

            const paymentTableResult = document.getElementById('payment1');
            const billTotal = paymentTableResult.cells[0];
            const tipTotal = paymentTableResult.cells[1];
            const tipPercentAverage = paymentTableResult.cells[2];
            expect(billTotal.innerText).toBe('$100');
            expect(tipTotal.innerText).toBe('$20');
            expect(tipPercentAverage.innerText).toBe('20%');
        });
    });

    describe('updateSummary tests', function(){
        it('should update the summary table on updateSummary() for one payment', function(){
            allPayments = {
                'payment1': {
                    'billAmt': '100',
                    'tipAmt': '20',
                    'tipPercent': 20
                }
            };
            updateSummary();
            const summaryBillTotal = summaryTds[0];
            const summaryTipTotal = summaryTds[1];
            const summaryTipPercentAverage = summaryTds[2];
            expect(summaryBillTotal.innerText).toBe('$100');
            expect(summaryTipTotal.innerText).toBe('$20');
            expect(summaryTipPercentAverage.innerText).toBe('20%');
        });
        it('should update the summary table on updateSummary() for multiple payments', function(){
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
            updateSummary();
            const summaryBillTotal = summaryTds[0];
            const summaryTipTotal = summaryTds[1];
            const summaryTipPercentAverage = summaryTds[2];
            expect(summaryBillTotal.innerText).toBe('$150');
            expect(summaryTipTotal.innerText).toBe('$27');
            expect(summaryTipPercentAverage.innerText).toBe('18%');
        });
    });


afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
}); 