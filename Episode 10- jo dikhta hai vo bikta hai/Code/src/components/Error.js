import {useRouteError} from "react-router-dom"
const Contact = () => {
    const err = useRouteError();
    return(
        <>
        <h1>OPPS!!!</h1>
        <h2>Page not Found</h2>
        <h3>{err.status}</h3>
        <h3>{err.statusText}</h3>
        </>

    )
}

export default Contact;