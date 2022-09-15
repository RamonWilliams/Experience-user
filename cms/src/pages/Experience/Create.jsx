import { API } from "../../services/API";
import { useState } from "react";
import { useEffect } from "react";

import SelectPdi from "./SelectPdi";

const CreateExperience = () => {
    const [experience, setExperience] = useState({ pdis: [] });
    const [pdi, setPdis] = useState([]);

    const createExperience = () => {
        API.post(`/experience/create`, experience).then((res) => {
            navigate("/experiences")
        })
    }

    const getPdis = () => {
        API.get(`/pdi/`).then((res) => {
            setPdis(res.data.data)
        })
    }

    const handleExperience = (e) => {
        console.log(e.target.value)
        if (e.target.name === "pdi") {
            const pdi = experience.pdis;
            pdi.push(e.target.value);
            console.log(pdi);
            setExperience({
                ...experience,
                pdis: pdi
            })
        } else {
            setExperience({
                ...experience,
                [e.target.name]: e.target.value
            })
        }
    }


    useEffect(() => {
        getPdis();
    }, [])


    return (
        <>
            <form action="">
                <>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={handleExperience} />
                    </div>
                    <div>
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" id="location" onChange={handleExperience} />
                    </div>
                    <div>
                        <label htmlFor="image">Imagen:</label>
                        <input type="file" name="image" id="image" onChange={handleExperience} />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" onChange={handleExperience} />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="number" name="price" id="price" onChange={handleExperience} />
                    </div>
                    <SelectPdi pdi={pdi} handleExperience={handleExperience}></SelectPdi>

                    <button type="button" onClick={createExperience}>Nueva Experience</button>
                </>
            </form>
        </>
    )
};


export default CreateExperience;