let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
//your code here
let select = document.querySelector('#mySelect');

for (let i = 0; i < countries.length; i++) {
  let option = document.createElement('option');
  option.textContent = countries[i];
  select.appendChild(option);
}

select.addEventListener('change', function() {
  let selectedCountry = select.value;
  alert(selectedCountry);
});