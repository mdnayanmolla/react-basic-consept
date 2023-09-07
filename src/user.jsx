export default function User({firend}){
    const {name,email} = firend;
    return(
        <div>
            <h4>Name:{name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}