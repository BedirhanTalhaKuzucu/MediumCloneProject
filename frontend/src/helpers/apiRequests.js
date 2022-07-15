
export const signUpFunction = (signUpInfo, resetForm, setErrorMesage) => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "email": signUpInfo.email,
        "first_name": signUpInfo.firstName,
        "last_name": signUpInfo.lastName,
        "password": signUpInfo.password,
        "password2": signUpInfo.password2
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'};

    fetch("http://127.0.0.1:8000/auth/register/", requestOptions)
    .then((response) =>{ 
        console.log(response);
        if (!response.ok) {
            // const errorMesage = response.text()
            response.json().then(text=> {
                console.log(text);
                setErrorMesage(text);
                if (text.email) {resetForm({ values: {email:""} })}
            })
        }else{
            response.json().then((result) => {
                console.log(result)
                // resetForm({ values: "" })
            })
        }
    })
    .catch(error => console.log(error));
}






export const getData = (setData) => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch("http://127.0.0.1:8000/blog/posts/", requestOptions)
    .then(response => response.json())
    .then(result => {
        setData(result)
    })
    .catch(error => console.log('error', error));
    }