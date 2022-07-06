# Running JS on Linux Command Line.

If you have node installed on your Linux machine, you can use the `node` binary to call javascript files.

To receive Javascript output on the commandline, you will need to use the `console.log` command to print.

# Example of Functional JS Code On Command Line

The below code is functional and has been tested to work on a Linux command line with `node` installed.

#### query.js

```javascript
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
```

### EXAMPLE

```java
akalaj@box:/api/$ node query.js
(node:10492) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
[
  { id: 1, title: 'Pointers', author: 'Mr.Pointers', year: '2010' },
  { id: 2, title: 'Goroutines', author: 'Mr.Goroutines', year: '2011' },
  { id: 3, title: 'Routers', author: 'Mr.Routers', year: '2012' },
  { id: 4, title: 'Concurrency', author: 'Mr.Concurrency', year: '2013' },
  { id: 5, title: 'Parts', author: 'Mr.Parts', year: '2014' }
]
```