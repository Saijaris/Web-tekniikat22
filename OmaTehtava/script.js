fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(
    data => {
    document.getElementById('rest').innerHTML =
    '<h4>' + "Koirakuva piristämään päivääsi" + '</h4>' + '<br>';
    document.getElementById('rest').innerHTML +=
    '<img src="' + data.message + '"/>';
    }
);