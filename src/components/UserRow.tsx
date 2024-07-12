import { User } from "../interfaces";

interface Propiedades {
    user: User
}

export const UserRow = ({ user }: Propiedades) => {

    const { avatar, first_name, last_name, email } = user;
    return (
        <tr>
            <td><img src={avatar} alt="User avatar" /></td>
            <td>{first_name}{last_name}</td>
            <td>{email}</td>
        </tr>
    )
}
