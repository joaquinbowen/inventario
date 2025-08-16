

export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const createPostService = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigo: post.codigo,
            descripcion: post.descripcion
        }),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'


        }
    };

    fetch('http://192.168.1.23:8080/inventarios-1.0.0/rest/tipoDocumentos/crear', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json); fnExito(); });
}








export const updatePostService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            "id": 1,
            "title": "mensaje final",
            "body": "hasta la vista baby",
            "userId": 1
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };

    fetch('https://jsonplaceholder.typicode.com/posts/1', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const getByUserIdService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const getxxx = () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));
}

export const putyyy = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            title: 'Updated Product',
            price: 39.99
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };

    fetch('https://fakestoreapi.com/products/1', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const postzzz = () => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: 'New Product',
            price: 29.99
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
}



export const getDocumentTypes = () => {
    fetch('http://192.168.1.23:8080/inventarios-1.0.0/rest/tipoDocumentos/recuperar')
        .then(response => response.json())
        .then(data => console.log(data));
}



