window.addEventListener('load', () => {
    resetPage();
});
  
    function resetPage(){
        var numberInputs = document.querySelectorAll('input[type="number"]');
        numberInputs.forEach(input => {
            input.value = '';
        });
  
    var dropdown = document.querySelector('select');
    dropdown.selectedIndex = 0;
}