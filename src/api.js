const getData = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

getData();