import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated, name, userEmail } = useContext(AuthContext);

  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <Link className="navbar-brand" to="/">
            <img
                alt="book icon"
                src={require("./assets/book_icon.png")}
                className="logo"
            />
            </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto col-12 justify-content-between">
                <div className="navbar">
                    {isAuthenticated && (
                        <>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/offers/add">
                            Добави обява
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="form-inline my-2 my-lg-0 px-3">
                            <div className="nav-link text-white">
                                <span>Здравейте</span>
                                <span>, {name == null ? userEmail : name }!</span>
                            </div>
                            </div>
                        </li>
                        </>
                    )}
                </div>

                <div className="navbar">
                    {!isAuthenticated && (
                        <>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/register">
                            Регистрация
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login">
                            Вход
                            </Link>
                        </li>
                        </>
                    )}
                    {isAuthenticated && (
                        <Link className="nav-link text-white" to="/logout">
                        Изход
                        </Link>
                    )}
                </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
