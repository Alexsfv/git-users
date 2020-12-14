import React from 'react'
import { Link } from 'react-router-dom'
import { GithubUserItem } from '../../types/types'


type UserCardProps = {
    user: GithubUserItem
}
const UserCard: React.FC<UserCardProps> = ({user}) => {

    return (
        <div className="card mb-5" style={{width: '18rem'}}>
            <img className="card-img-top" src={user.avatar_url} alt="userAvatar" />
            <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <Link to={`/userPage/${user.login}`} className="btn btn-primary">Открыть профиль</Link>
            </div>
        </div>
    )
}

export default UserCard