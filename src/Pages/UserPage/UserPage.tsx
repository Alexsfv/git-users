import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import UserInfoBlock from '../../Components/UserInfoBlock/UserInfoBlock'
import UserMainInfoBlock from '../../Components/UserInfoBlock/UserMainInfoBlock/UserMainInfoBlock'
import Repositories from '../../Components/Repositories/Repositories'
import { useStore } from '../../store/StoreContext'
import './UserPage.scss'

type MatchParamsRouterProps = {
    userLogin: string
}

interface UserPageProps extends RouteComponentProps<MatchParamsRouterProps> {}

const UserPage: React.FC<UserPageProps> = observer((props) => {

    const { userPage, repositories } = useStore()
    const userLogin = props.match.params.userLogin

    useEffect(() => {
        userPage.getUserData(userLogin)
        repositories.getRepos(userLogin)
        return () => {
            userPage.clearUserPage()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container">
            <Link className="btn btn-primary btn-lg btn-block mt-4 font-weight-bold" to="/">На Главную</Link>
            {
                userPage.isExists === true
                    ? <div className="row d-flex flex-nowrap justify-content-around  align-items-start align-content-startmt-5 pt-3 px-3 my-4 text-white bg-primary rounded">
                        <div className="d-flex col-5 align-self-center flex-wrap align-items-start align-content-start">
        
                            <UserInfoBlock
                                title="Город"
                                data={userPage.location}
                            />

                            <UserInfoBlock
                                title="Email"
                                data={userPage.email}
                            />

                            <UserInfoBlock
                                title="Репозитории"
                                data={userPage.public_repos}
                            />

                            <UserInfoBlock
                                title="Gists"
                                data={userPage.public_gists}
                            />

                            <UserInfoBlock
                                title="Подписчики"
                                data={userPage.followers}
                            />

                            <UserInfoBlock
                                title="Подписан"
                                data={userPage.following}
                            />

                            <UserInfoBlock
                                title="Блог"
                                data={userPage.blog}
                            />

                            <UserInfoBlock
                                title="Статус"
                                data={userPage.bio}
                            />

                            <UserInfoBlock
                                title="Создан"
                                data={userPage.created_at}
                            />

                            <UserInfoBlock
                                title="Обновлен"
                                data={userPage.updated_at}
                            />

                        </div>

                        <UserMainInfoBlock />

                    </div>
                    : null
            }
            {
                userPage.errorMessage
                    ? <div className="d-flex">
                        <p className="w-100 text-center text-danger font-weight-bold" style={{lineHeight: '80vh', fontSize: '26px'}}>{userPage.errorMessage}</p>
                    </div>
                    : null
            }

            <Repositories />
        </div>
    )
})

export default UserPage