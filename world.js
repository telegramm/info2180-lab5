document.addEventListener("DOMContentLoaded", function () {
    const lookupButton = document.getElementById("lookup");
    const lookupCitiesButton = document.getElementById("lookup-cities");
    const countryInput = document.getElementById("country");
    const result = document.getElementById("result");

    lookupButton.addEventListener("click", function () {
        const country = countryInput.value;

        fetch("world.php?country=" + encodeURIComponent(country))
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            });
    });

    lookupCitiesButton.addEventListener("click", function () {
        const country = countryInput.value;

        fetch("world.php?country=" + encodeURIComponent(country) + "&lookup=cities")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            });
    });
});