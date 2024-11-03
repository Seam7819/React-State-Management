export default function Friend({user}) {
    // console.log(user);
    return (
        <>
        <h3>
            Name : {user.name}
        </h3>
        <p>
            Email : {user.email}
        </p>
        </>
    )
}