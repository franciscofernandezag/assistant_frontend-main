export const Conversation = () => {
  return (
    <>
      <div class="conversation">
        <div class="conversation_ia_button">
          <button type="button" class="btn btn-primary">
            Visitar nuestro Sitio Web
          </button>
        </div>
        <div class="conversation_ia_button">
          <button type="button" class="btn btn-primary">
            Hacer una prueba gratis
          </button>
        </div>
        <div class="conversation_ia">
          El paso 1, es ingresar los datos de tu negocio, te ayudamos con
          algunos ejemplos
        </div>
        <div class="conversation_ia_button">
          <button type="button" class="btn btn-primary">
            Ejemplo 1. Somos una empresa de productos veganos, tengo hamburquesas a $1.000 y pure de castaña a $4.500, nuestro local esta en Pedro Montt 345, Providencia, Santiago.
          </button>
        </div>
        <div class="conversation_ia_button">
          <button type="button" class="btn btn-primary">
            Ejemplo 2. Somos una microempresas de venta de chocolates, actualmente tenemos la presentación tipo 1 con 10 chocolates a $5.000 y tipo2 con 5 chocolates a $3.000, estamos ubicados en Suecia 345, local 3, Providencia, Santiago y nuestro website es www.chocolates.com
          </button>
        </div>
        <div class="conversation_user">
          Soy empresa de productos veganos, tengo hamburquesas a $1.000 y pure
          de castaña a $4.500
        </div>
        <div class="conversation_ia">
          Vamos por el paso 2, que es perfilar tu asistente, te ayudamos con
          algunos ejemplos
        </div>
        <div class="conversation_ia_button">
          <button type="button" class="btn btn-primary">
            Ejemplo 1. Soy un vendedor
          </button>
        </div>
        <div class="conversation_ia_button">
          <button type="button" class="btn btn-primary">
            Ejemplo 2. Soy Yoda
          </button>
        </div>
        <div class="conversation_user">
          Soy un vendedor
        </div>
        <div class="conversation_ia">
          Ahora que ya esta configurado nuestro Asistente, vamos por el paso 3,
          haciendole las preguntas como si fueramos uno de tus clientes
        </div>
        <div class="conversation_ia_button">
          <button type="button" class="btn btn-primary">
            Ejemplo 1. Donde están ubicados?
          </button>
        </div>
        <div class="conversation_ia_button">
          <button type="button" class="btn btn-primary">
            Ejemplo 2. Cuales productos venden?
          </button>
        </div>
        <div class="conversation_user">Donde están ubicados? </div>
        <div class="conversation_ia">
          Estamos ubicados en Pedro Montt 345, Providencia, Santiago.
        </div>
        <div class="conversation_ia_button">
          <a href="http://localhost:5173/register">
            <button type="button" class="btn btn-primary">
              Si te gustó nuestro servicio registrate gratis haciendo click en
              este botón
            </button>
          </a>
        </div>
      </div>
      <div class="conversation2">
        <div class="conversation_message">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Mensaje"
          />
        </div>
      </div>
    </>
  );
};
