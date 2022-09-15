import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/jwtContext";
import { API } from "../../services/API";
import Swal from "sweetalert2";


const PdiCard = ({ pdi }) => {
    const { setEditingPdi } = useContext(JwtContext);
    let navigate = useNavigate();

    const deletePdis = () => {
        Swal.fire({
            title: "¿Estas seguro de borrar el punto de interes?",
            text: "No lo vas a poder recuperar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrala!",
        }).then((result) => {
            if (result.isConfirmed) {

                API.delete(`/pdis/${pdi._id}`).then((res) => {
                    window.location.reload();
                });
            }
        });
    }

    const editPdi = (pdi) => {
        setEditingPdi(pdi);
        navigate("/editpdis");
    };


    return (
        <figure className="pdicard">

            <img src={pdi.image} alt={pdi.name} />
            <p className="name">{pdi.name}</p>
            <p className="country">{pdi.country}</p>
            <p className="city">{pdi.city}</p>
            <p className="date">{pdi.date} </p>
            <p className="times">{pdi.times} </p>
            <p className="email">{pdi.email} </p>
            <p className="address">{pdi.address} </p>
            <p className="phone">{pdi.phone} </p>
            <p className="price">{pdi.price} </p>
            <p className="petfriendly">{pdi.petfriendly} </p>
            <p className="description">{pdi.description}</p>
            <p className="puntuation">{pdi.puntuation}</p>




            <div className="button">
                <button onClick={() => editPdi(pdi._id)}> Edit </button>
                <button onClick={() => deletePdis(pdi._id)}> Delete </button>
            </div>

        </figure>
    );
};

export default PdiCard;
