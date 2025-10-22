import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

export default function Login() {
  return (
    <main className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>  
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn-login">Iniciar Sesión</button>
        </form>
        <p className="login-register">
          ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
        </p> 
      </div>
    </main>
  );
}
