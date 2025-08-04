import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 p-8">
        <h1>Faça seu login</h1>

        <form>
          <input type="text" />
          <input type="text" />
          <button></button>
        </form>

        <p>
          Ainda não tem uma conta? <Link to="/register">Registre-se aqui!</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
