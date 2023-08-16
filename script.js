const search = document.querySelector(".search");
const input = document.querySelector(".input");

search.addEventListener("click", (countryName) => {
  countryName = input.value;
  //console.log(countryName);
  let query = `https://restcountries.com/v3.1/name/${countryName}`;
  //console.log(query);

  fetch(query)
    .then((country) => {
      return country.json();
    })
    .then(displayCountry)
    .catch(() => {
      //Düzenlenmesi gerekli alert yerine searchbar altına uyarı mesajı eklenecek...
      alert("Lütfen Geçerli Ülke Giriniz");
    });
  input.value = "";
});

const displayCountry = (result) => {
  let ad = document.querySelector(".title");
  let img = document.querySelector(".img");

  let countryInfo = document.querySelector(".countryInfo");

  countryInfo.innerHTML = ` 
    <img 
    class="sm:w-[100px] sm:h-[60px] md:w-[110px] md:h-[70px] lg:w-[125px] lg:h-[75px] shadow-black shadow-lg rounded" 
    src="${result[0].flags.png}">
    <h3 class="title uppercase text-center font-semibold sm:text-xl md:text-2xl lg:text-3xl">
    ${result[0].name.common}</h3>
    <div class="mx-auto items-start space-y-2">
        <div class= "flex border-b">
        <h3 class="title uppercase text-center font-semibold">Capital<i class="fa-solid fa-arrow-right text-s px-3"></i></h3>
        <p>${result[0].capital}</p>
        </div>
        <div class= "flex border-b">
        <h3 class="title uppercase text-center font-semibold">Currencies<i class="fa-solid fa-arrow-right text-s px-3"></i></h3>
        <p class = "pr-2" >${Object.keys(result[0].currencies)[0]}</p>
        <p>${result[0].currencies[Object.keys(result[0].currencies)].symbol}</p>
        </div>
        <div class= "flex border-b">
        <h3 class="title uppercase text-center font-semibold">Population<i class="fa-solid fa-arrow-right text-s px-3"></i></h3>
        <p>${result[0].population}</p>
        </div>
        <div class= "flex border-b">
        <h3 class="title uppercase text-center font-semibold">Languages<i class="fa-solid fa-arrow-right text-s px-3"></i></h3>
        <p class = "uppercase">${Object.values(result[0].languages)
          .toString()
          .split(",")
          .join(",")}</p>
        </div>
  </div>`;
};
