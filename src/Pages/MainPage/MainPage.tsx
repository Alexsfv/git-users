import { observer } from 'mobx-react'
import React from 'react'
import InputUser from '../../Components/InputUser/InputUser'
import UserCard from '../../Components/UserCard/UserCard'
import { useStore } from '../../store/StoreContext'



const MainPage: React.FC<{}> = observer(() => {

    const { mainPage } = useStore()

    return (
        <section>
            <div className="container">
                <div className="row d-flex mt-3 justify-content-between">

                    <InputUser />
                    {
                        mainPage.isLoadedUsers
                            ? mainPage.users.map(user => {
                                return (
                                    <UserCard 
                                        key={user.id}
                                        user={user}
                                    />
                                )
                            })
                            : <div className="d-flex w-100">
                                <p 
                                    className="w-100 text-center text-success font-weight-bold"
                                    style={{fontSize: '24px'}}
                                >
                                    Данное приложение осуществляет поиск GitHub акаунтов по логину пользователя
                                </p>
                            </div>
                    }

                </div>
            </div>
        </section>
    )
})

export default MainPage