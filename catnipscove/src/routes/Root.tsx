import { Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Root() {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();

  // render "add and manage" if the user is logged in

  return (
    <>
      <section id="wrapper">
        <header>
          <figure>
            {" "}
            <img src="src\Images\Logo.svg" alt="Catnips Logo" />
          </figure>

          <nav>
            <a href={`/home`}>-Home-</a>
            <a href={`/gallery`}>Our Cats</a>
            <a href={`/login`}>Staff Login</a>

            {isAuthenticated && <a href="/add">Add new Cat</a>}
            {isAuthenticated && <a href="/manage">Manage cats</a>}
            {isAuthenticated && <button onClick={logout}>Logout</button>}
          </nav>
        </header>

        <section id="content">
          <Outlet />
        </section>

        <footer>
          <p> Footer</p>
        </footer>
      </section>
    </>
  );
}
