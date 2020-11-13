document.getElementById("get-verse").addEventListener("click", getVerse);

function getVerse(e) {
    const books = document.getElementById("books").value;
    const chapter = document.getElementById("chapter").value;
    const verse = document.getElementById("verse").value;

    xhr = new XMLHttpRequest();
    
    if(verse === "") {
        xhr.open('GET', `https://bible-api.com/${books}+${chapter}`, true);
    } else {
        xhr.open('GET', `https://bible-api.com/${books}+${chapter}:${verse}`, true);
    }
    
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = "";

            response.verses.forEach(function(verse) {
                output += `<li style="list-style-type:none"; class="mb-2">${verse.verse}. ${verse.text}</li>`
            }); 
            // for(var i=0; i<response.verses.length; i++) {
            //     output += `<li>${response.verse}</li>`
            // }
            document.getElementById("result").style.padding = "1rem"
            document.getElementById("result").innerHTML = output;

        }
    }
    xhr.send();

    e.preventDefault();
}