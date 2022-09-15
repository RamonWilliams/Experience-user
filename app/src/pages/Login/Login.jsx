import React from 'react'
import "./Login.css"
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/API";

//TODO: CAMBIAR DATOS DE USER POR EL NUEVO MODELO DE USER - USERNAME && PASSWORD
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const { setJwt, setUser } = useContext(JwtContext);

    const formSubmit = (formData) => {
        API.post("/user/login", formData).then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.userInDb));
            setJwt(res.data.token);
            setUser(res.data.userInDb);
            if (res.data.token) {
                navigate("/");

            }
        });
    };

    return (
        <section className="login">
            <h2>Por favor logueate</h2>
            <form onSubmit={handleSubmit(formSubmit)} className="formulario">
                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" placeholder="Nombre de usuario" {...register("username", {
                    required: {
                        value: true,
                        message: "Necesitas este campo",
                    }
                })} />
                {errors.username && <span>{errors.username.message}</span>}

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="escribe tu contraseña" {...register("password", {
                    required: {
                        value: true,
                        message: "La contraseña debe de tener al menos 6 caracteres",
                    }
                })} />
                {errors.password && <span>{errors.password.message}</span>}
                {errors.password && <span>{errors.password.message}</span>}
                <button type="submit" className="lbutton">Login</button>
            </form>
        </section>
    );
}

export default Login