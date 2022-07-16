
export const signUpFunction = (values, resetForm, setErrorMesage, navigate, setUserInfo) => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "email": values.email,
        "first_name": values.firstName,
        "last_name": values.lastName,
        "password": values.password,
        "password2": values.password2
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
            response.json().then(text=> {
                console.log(text);
                setErrorMesage(text)

            })
        }else{
            response.json().then((result) => {
                setErrorMesage("")
                setUserInfo(result)
                resetForm({ values: "" })
                navigate('home')
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



