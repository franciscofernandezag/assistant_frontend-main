export const Register = () => {
  return (
    <>
      <div class="register">
      <p class="brand">Assistant</p>
        <p class="title_section">Registro</p>
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
        <div class="d-grid">
          <a href="http://assistant-frontend-main.vercel.app/login">
            <button type="button" class="btn btn-primary">
              Registrar
            </button>
          </a>
        </div>
        <br></br>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            <div class="conditions">Términos y Condiciones</div>
          </label>
        </div>
      </div>
    </>
  );
};
