let nameElement = document.querySelector('.name');
let surnameElement = document.querySelector('.surname');

const getMyName = async () => {
    try {
        let res = await fetch('https://127.0.0.1:5500/');
        console.log(res);
        if (!res.ok) {
            throw new Error('Failed to get name');
        }
        let name = await res.text();
        nameElement.textContent = name;
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

const postSurname = async () => {
    try {
        let res = await fetch('http://127.0.0.1:5500/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ surname: 'Kumar' })
        });
        console.log(res);
        if (!res.ok) {
            throw new Error('Failed to post surname');
        }
        let { surname } = await res.json();
        surnameElement.textContent = surname;
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

// Call the functions
getMyName();
postSurname();
