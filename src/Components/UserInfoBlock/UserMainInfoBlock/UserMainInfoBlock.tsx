import React from 'react'
import { useStore } from '../../../store/StoreContext'

const UserMainInfoBlock: React.FC<{}> = () => {

    const { userPage } = useStore()

    return (
        <div className="card col-5 px-0 mb-3" style={{width: '18rem'}}>
            <a href={`https://github.com/${userPage.login}`}>
                <img className="card-img-top" src={userPage.avatar_url} alt="userAvatar" />
            </a>
            <div className="card-body px-3 py-2">
                {
                    userPage.name 
                        ? <p className="card-text my-2 text-center font-weight-bold d-flex justify-content-between">
                            <span className="text-dark">Name: </span>
                            <span className="text-info">{userPage.name}</span>
                        </p>
                        : null
                }
                {
                    userPage.login 
                        ? <p className="card-text my-2 text-center font-weight-bold d-flex justify-content-between">
                            <span className="text-dark">Login: </span>
                            <span className="text-info">{userPage.login}</span>
                        </p>
                        : null
                }
                <div className="text-center mt-3">
                    <a href={`https://github.com/${userPage.login}`} className="btn btn-primary" target="new_blank">
                        Смотреть на GitHub
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default UserMainInfoBlock