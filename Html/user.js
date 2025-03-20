
function Back(){
    window.location.href = "Login.html";
}
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registrate');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const cancelar = document.getElementById("cancelar");  
        // Validar si los campos están vacíos antes de guardar
        if (email.trim() === "" || password.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "¡Error!",
                text: "Todos los campos son requeridos.",
            });
            return;
        }
        
        // Guardar en LocalStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        Swal.fire({
            icon: "success",
            title: "Registro",
            text: "Usuario registrado exitosamente!",
        });

        console.log(`Correo electrónico: ${email}`);
        console.log(`Contraseña: ${password}`);
        // Opcional: Limpiar el formulario después de registrar
        registerForm.reset();
    };

    registerForm.addEventListener('submit', handleFormSubmit);
});

