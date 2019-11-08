var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
    keyAPI = "trnsl.1.1.20191107T160202Z.641f227e672ede8f.e58aa7a95b9aaaed6d0234c5153c64af5325cb3e";

document.querySelector('#translateRu').addEventListener('click', function() {
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#translateRu').value,
        data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if (json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            } else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);

document.querySelector('#translateEn').addEventListener('click', function() {
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#translateEn').value,
        data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if (json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            } else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);

document.querySelector('#translateEs').addEventListener('click', function() {
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#translateEs').value,
        data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if (json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            } else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);

document.querySelector('#translateIt').addEventListener('click', function() {
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#translateIt').value,
        data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if (json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            } else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);

document.querySelector('#translateDe').addEventListener('click', function() {
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#translateDe').value,
        data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if (json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            } else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);

document.querySelector('#translateFr').addEventListener('click', function() {
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#translateFr').value,
        data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if (json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            } else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);