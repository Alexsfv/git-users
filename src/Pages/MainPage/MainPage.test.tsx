import { render } from 'enzyme'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { rootStore, StoreContext } from '../../store/StoreContext'
import MainPage from './MainPage'

describe("MainPage component", () => {
    it("should render placeholder data", () => {
        const jsx = (
            <StoreContext>
                <MainPage/>
            </StoreContext>
        )
        const component = render(jsx)
        expect(component).toMatchSnapshot()
    })

    it("should render UserCard components", () => {
        const user = {
            avatar_url: "https://google.com",
            id: 55,
            login: 'user-login'
        }
        rootStore.mainPage.setIsLoadedUsers(true)
        rootStore.mainPage.setUsers([user, user])
        const jsx = (
            <BrowserRouter>
                <StoreContext>
                    <MainPage/>
                </StoreContext>
            </BrowserRouter>
        )
        const component = render(jsx)
        expect(component).toMatchSnapshot()
    })
})