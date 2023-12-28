export const Settings = () => {
  return (
    <>
      <div class="settings">
        <p class="title_section_dark">Configura tu asistente</p>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nombre de tu asistente (opcional)
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=""
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Perfila tu Asistente
          </label>
          <textarea
            class="form-control settings_textarea"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder=""
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea2" class="form-label">
            Ingresa tu base de conocimiento
          </label>
          <textarea
            class="form-control settings_textarea2"
            id="exampleFormControlTextarea2"
            rows="3"
            placeholder=""
          ></textarea>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary">
            Guardar
          </button>
        </div>
        <div class="mb-3">
          <a href="http://assistant-frontend-main.vercel.app/conversation">
            <button type="button" class="btn btn-success">
              Probar mi asistente
            </button>
          </a>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-success">
            Copia el script y pégalo en tu sitio web
          </button>
        </div>
      </div>
    </>
  );
};
