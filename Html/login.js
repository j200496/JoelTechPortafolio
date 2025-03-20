document.addEventListener('DOMContentLoaded',() =>{
 const login = document.getElementById("login");

 const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const stemail = localStorage.getItem('email');
    const stpass = localStorage.getItem('password');
    if(email.trim() === "" || password.trim() === ""){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Todos los campos son necesarios!"
        });        
        return;
    }
    if(email == stemail && password == stpass){
        Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: "Inicio de session exitoso!"

        }).then(()=>{
          window.location.href = "Task.html";
        });
    }
    else{
        Swal.fire({
          icon: "error",
          title: "Credenciales incorrectas",
          text: "Las credenciales son incorrectas!"
        });
    }
 }
 login.addEventListener("submit",handleFormSubmit);
});

