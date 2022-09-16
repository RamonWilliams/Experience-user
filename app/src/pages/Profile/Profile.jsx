import React from 'react'
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";
import { API } from "../../services/API";
import "./Profile.css";


const Profile = () => {
    const { user, logout } = useContext(JwtContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    // const deleteUser = () => {

    //     API.delete(` /user/${user._id}`).then((res) => {
    //         console.log(res)
    //         logout();
    //         if (res) {
    //             navigate("/");

    //         }

    //     })

    // };

    const defaultValues = {
        fullname: user.fullname,
        username: user.username,
        password: user.password,        
        email: user.email,
        description: user.description,

        // avatar: user.avatar,       
    //     nationality: user.nationality,
    //     location: user.location,
    //     address: user.address,    //   
    //     phone: user.phone,
    //     description: user.description,

    }


    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("fullname", data.fullname);
        formData.append("username", data.username);
        formData.append("password", data.password);
        formData.append("email", data.email);
        formData.append("avatar", data.avatar[0]);     
        formData.append("description", data.description);
        API.patch(`/user/${user._id}`, formData).then((res) => {
            console.log(res)
            if (res) {
                navigate("/login");

            }


        })
    }


    return (
        <section className="registro">
            <form onSubmit={handleSubmit(formSubmit)} className="registrarse">
                <label htmlFor="fullname">Nombre completo:</label>
                <input type="text" id="fullname" name="fullname" placeholder="Nombre completo"  {...register("fullname", {
                    required: {
                        value: true,
                        message: "Necesitas este campo",
                    }
                })} />
                {errors.fullname && <span>{errors.fullname.message}</span>}

                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" placeholder="Nombre de usuario" {...register("username", {
                    required: {
                        value: true,
                        message: "Necesitas este campo",}
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



                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="escribe tu email" {...register("email", {
                    required: {
                        value: true,
                        message: "El email debe ser válido",

                    }
                })} />
                {errors.email && <span>{errors.email.message}</span>}



                <label htmlFor="avatar">Avatar:</label>
                <input type="file" id="avatar" name="avatar" placeholder="Sube tu avatar" {...register("avatar", {
                    required: {
                        value: true,
                        message: "Necesitas este campo",

                    }
                })} />
                {errors.avatar && <span>{errors.avatar.message}</span>}                


                <label htmlFor="description">Descripción :</label>
                <input type="text" id="description" name="description" placeholder="Descripción "{...register("description", {
                    required: {
                        value: true,
                        message: "Necesitas este campo",

                    }
                })} /> {errors.description && <span>{errors.description.message}</span>}

                <label htmlFor="favoriteExperiencie">Experiencias Favoritas :</label>
                <input type="text" id="favoriteExperience" name="favoriteExperience" placeholder="favoriteExperience "{...register("favoriteExperience", {
                    required: {
                        value: true,
                        message: "Necesitas este campo",

                    }
                })} /> {errors.favoriteExperience && <span>{errors.favoriteExperience.message}</span>}     

                <button type="submit" >Editar</button>
                <button type="button" onClick={() => deleteUser(user)}>Borrar</button>

            </form>
        </section>
    )

};

export default Profile