const ExperienceCard = ({ experience }) => {
    return (
        <figure className="travelcard">
            <img src={experience.image} alt={experience.name} />
            <p className="name">{experience.name}</p>
            <p className="location">{experience.location}</p>
            <p className="price">{experience.price} </p>
            <p className="description">{experience.description}</p>
        </figure>
    );
};



export default ExperienceCard;
