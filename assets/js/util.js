function getResponse(filePath) {
    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });

}