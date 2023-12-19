const generateQuote = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let randNum = Math.floor((Math.random() * data.length) + 1);
            let randomQuote = data[randNum];
            document.getElementById("quote").innerHTML = `"${randomQuote.text}"`;
            document.getElementById("author").innerHTML = `- ${randomQuote.author ? randomQuote.author : ""}`;
        })
        .catch(function(error) {
            console.error("Error fetching quotes:", error);
        });
}
