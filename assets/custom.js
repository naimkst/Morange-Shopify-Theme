function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
    tabcontent[i].classList.add('react-tabs__tab--selected');
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
    tablinks[i].classList.forEach((item) => {
      if (item == 'react-tabs__tab--selected') {
        tablinks[i].classList.remove('react-tabs__tab--selected');
      }
    });
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.classList.add('react-tabs__tab--selected');
}
function filterName(selectElement, elementId) {
  var selectId = selectElement.id;
  var select = document.getElementById(selectId);
  var form = document.getElementById('filterFrom');
  var hiddenInput = document.getElementById('selected_param_name_' + elementId);
  var selectedOption = select.options[select.selectedIndex];
  var selectedValue = selectedOption.value;
  var param_name = selectedOption.getAttribute('data-param_name');
  // form.setAttribute('name', param_name);
  // form.submit();
  // Submit the form
  hiddenInput.setAttribute('name', param_name);
  hiddenInput.setAttribute('value', selectedValue);

  hiddenInput.value = selectedValue;

  document.getElementById('filterFrom').submit();
  return true;
  console.log(hiddenInput);
}
$('.toogle-click').click(function () {
  var $toggle = $(this).next('.dropdown');
  $('.dropdown').not($toggle).slideUp('slow'); // Slide up all other elements
  $toggle.slideToggle('slow'); // Slide toggle the selected element
});
