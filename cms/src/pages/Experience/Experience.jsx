import { useEffect, useState } from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { API } from "../../services/API";

const Experiences = () => {
    const [allExperience, setAllExperience] = useState([]);



    const getAllExperiences = async () => {
        API.get("/experience").then((res) => {
            setAllExperience(res.data.data);
        });
    };


    useEffect(() => {
        getAllExperiences();
    }, []);



    return (
        <section className="travel">
            <h2>Experiences</h2>
            {allExperience.length ? allExperience.map((experience) => (
                <div className="gallery" key={experience._id}>
                    <h1>{experience.name}</h1>
                    <ExperienceCard key={experience._id} experience={experience} />
                </div>
            )) : <> not Found</>
            }

        </section >
    );
};



export default Experiences;