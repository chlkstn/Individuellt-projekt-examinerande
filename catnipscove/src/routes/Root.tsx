import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
    
    <section id="wrapper">
      <header>
        <figure> Logo</figure>
        <h1> The catnips Cove </h1>
        <nav>
          <a href={`/home`}>-Home-</a>
          <a href={`/gallery`}>Our Cats</a>
          <a href={`/login`}>Staff Login</a>
          <a href={`/add`}>Add new Cat</a>
          <a href={`/manage`}>Manage cats</a>
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
