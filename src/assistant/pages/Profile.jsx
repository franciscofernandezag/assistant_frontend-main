export const Profile = () => {
  return (
    <>
      <div class="profile">
        <p class="title_section_dark">Mi cuenta</p>
        <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="arturo.vildosola@gmail.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Contraseña
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="********"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Plan
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Plan</option>
            <option value="1" selected>
              Plan 1
            </option>
            <option value="2">Plan 2</option>
            <option value="3">Plan 3</option>
          </select>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary">
            Guardar
          </button>
        </div>
        </form>
      </div>
    </>
  );
};
