
export const signUpFunction = (values, resetForm, setErrorMesage, navigate) => {
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
            response.text().then((result) => {
                setErrorMesage("")
                sessionStorage.setItem("user_info", result);
                resetForm({ values: "" })
                navigate('home')
            })
        }
    })
    .catch(error => console.log(error));
}

export const logInFunction = (values, resetForm, handleErrorMesage, navigate, setErrorMesage) => { 
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({
      "email": values.email,
      "password": values.password,
    });
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/auth/login/", requestOptions).then((response) =>{ 
        if (!response.ok) {
            response.json().then(text=> {
                console.log(text);
                handleErrorMesage()

            })
        }else{
            response.text().then((result) => {
                setErrorMesage("")
                sessionStorage.setItem("user_info", result);
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
    fetch("http://127.0.0.1:8000/blog/stories/", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        setData(result)
    })
    .catch(error => console.log('error', error));
}

export const createStory = (formData, values, resetForm ) => {

    // console.log(formData);
    // console.log(values)
    
    // resetForm({values:""})

    let myHeaders = new Headers();
    
    
    let formdata = new FormData();
    formdata.append("title", formData.title);
    formdata.append("content", formData.story);
    formdata.append("image", values.image);
    formdata.append("tag_name", values.tag_name);
    formdata.append("user_id", "1");
    formdata.append("status", values.status);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/blog/stories/", requestOptions)
      .then(response => response.text())
      .then((result) => {
        resetForm({values:""})
        // setformData("")
        console.log(result)})
      .catch(error => console.log('error', error));
}


