(function(){
    var data = document.getElementById('invoice-data'),
        checkbox = document.getElementById('invoice');

    function showHideInvoiceFields() {
        if(data.style.visibility == 'hidden') {
            data.style.visibility = 'visible';
            checkbox.setAttribute('checked', 'checked');
        }
        else {
            data.style.visibility = 'hidden';
            checkbox.removeAttribute('checked');
        }
    }

    document.getElementById('invoice').addEventListener('change', showHideInvoiceFields);
})();