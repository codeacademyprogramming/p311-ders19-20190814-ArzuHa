window.addEventListener('load', function () {

    let width = this.window.screen.width;
    let height = this.window.screen.height;
    // this.console.log(this.window.screen.orientation.type);
    // this.document.write(`Screen: ${width}x${height}<br>Orientation:${this.window.screen.orientation.type}`);

    var p = document.createElement('p');
    p.innerHTML = `Screen: <strong>${width}x${height}</strong><br>Orientation:${this.window.screen.orientation.type}`;

    this.document.body.appendChild(p);


    fillProperties();
});

function fillProperties() {
    var select = document.querySelector('#navigatorProperties');
    // var select = document.querySelectorAll('select');
    // console.log(select);
    for (let key in navigator) {
        var option = document.createElement('option');
        option.textContent = key;
        option.value = key;
        select.appendChild(option);
    }
}

function getProperty()
{
    let key = document.querySelector('#navigatorProperties').value;
    let value=navigator[`${key}`];
    console.log(`navigator[${key}]=${value}`);
}


function back() {
    window.history.back();
}

function forward() {
    window.history.forward();
}