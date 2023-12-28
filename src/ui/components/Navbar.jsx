export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Assistant
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="settings">
                Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="conversation">
                Conversation
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="profile">
                Profile
              </a>
            </li>
          </ul>
          <span class="navbar-text me-2">Arturo</span>
          <a href="http://localhost:5173/login">
            <button class="btn btn-outline-success">Logout</button>
          </a>
        </div>
      </div>
    </nav>
  );
};
