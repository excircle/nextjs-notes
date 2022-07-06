const baseUrl = "http://192.168.0.243:8000/books"

const handleResponse = async (response) => {
    if (response.ok) return response.json();
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok.");
}

const handleError = (error) => {
    console.error("API call failed. " + error);
    throw error;
}

function getBooks() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

getBooks().then(data => {
    console.log(data);
});