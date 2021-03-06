/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const postData = async (url='',data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method:'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    });
    try{
        const newData = await response.json();
        console.log(newData)
    }catch(error){
        console.log('error', error);
    }
}
postData('/', {movie:'helloWorld'})