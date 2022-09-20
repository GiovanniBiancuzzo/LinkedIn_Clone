import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import SingleExperience from "./SingleExperience";

const FetchExperienceFeature = () => {
    const experiences = useSelector((state) => state.experience.experiences); // recupero delle experiences dallo store
    const userID = "me"; //o qualunque id
    const userIDPierdomenico = "5fc4da7fed266800170ea3e5"; //o qualunque id

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExperiencesAction(userIDPierdomenico)); // si caricano in store tutte le experiences
        // in base all'id selezionato, si setta un profilo attuale
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Col>
            {experiences &&
                experiences.map((experience) => (
                    <SingleExperience
                        key={experience._id}
                        userID={userID}
                        experience={experience}
                    />
                ))}
        </Col>
    );
};

export default FetchExperienceFeature;
