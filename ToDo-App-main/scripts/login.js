


window.addEventListener('load', function () {

/****************************   Variables Globales   *************************/
    const form = document.forms[0];
    const email = document.querySelector('#inputEmail')
    const password = document.querySelector('#inputPassword')
    const url = 'https://ctd-todo-api.herokuapp.com/v1'; //  <---  IMPORTANTE: CAMBIAR POR LA URL DE LA API


  /*****************************************************************************/
  /*************  [1]: Escuchamos el submit y preparamos el envío **************/
  /*****************************************************************************/


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        //creamos el cuerpo de la request
        const payload = {
            email: email.value,
            password: password.value
        };
        //configuramos la request del Fetch
        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        //lanzamos la consulta de login a la API
        realizarLogin(settings);

        //limpiamos los campos del formulario
        form.reset();
    });

    /*****************************************************************************/
    /********************** [2]: Realizamos el login [POST]  *********************/
    /*****************************************************************************/
    
    function realizarLogin(settings) {
        console.log("Lanzando la consulta a la API...");
        fetch(`${url}/users/login`, settings)
            .then(response => {
                console.log(response);

                if (response.ok != true) {
                    alert("Alguno de los datos es incorrecto.")
                }

                return response.json();

            })
            .then(data => {
                console.log("Promesa cumplida:");
                console.log(data);

                if (data.jwt) {
                    //Acà guardo en LocalStorage el objeto con el token
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));

                    //redireccionamos a la página principal de tareas
                    location.replace('./mis-tareas.html');
                }
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
    };
});
