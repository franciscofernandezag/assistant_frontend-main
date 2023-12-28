export const Login = () => {
  return (
    <>
      <div class="login">
        <p class="brand">Assistant</p>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Contraseña"
          />
        </div>
        <div>
          <a href="http://localhost:5173/home">
            <button type="button" class="btn btn-primary">
              Ingresar
            </button>
          </a>
        </div>
        <br></br>
        <div>
          <a href="#">Recuperar contraseña</a>
        </div>
      </div>
    </>
  );
};
