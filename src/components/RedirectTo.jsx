import { useParams, Navigate} from "react-router-dom";

function RedirectTo(){
    const params = useParams();
    return <Navigate replace to={`/movie/${params.id}`}/>
}

export default RedirectTo;