import { render } from 'enzyme'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { rootStore, StoreContext } from '../../store/StoreContext'
import UserPage from './UserPage'

const routeComponentPropsMock = {
    history: {} as any,
    location: {} as any,
    match: {
        isExact: false,
        params: { userLogin: 'login' },
        path: '',
        url: ''
    },
}

describe("UserPage component", () => {
    let jsx: JSX.Element

    beforeEach(() => {
        jsx = (
            <BrowserRouter>
                <StoreContext>
                    <UserPage {...routeComponentPropsMock} />
                </StoreContext>
            </BrowserRouter>
        )
    })

    afterEach(() => {
        rootStore.userPage.setIsExists(false)
        rootStore.userPage.setErrorMessage('')
    })

    it("render user info", () => {
        rootStore.userPage.setIsExists(true)
        const component = render(jsx)
        expect(component).toMatchSnapshot()
    })

    it("render without data and without errorMessage", () => {
        const component = render(jsx)
        expect(component).toMatchSnapshot()
    })

    it("render with error message", () => {
        rootStore.userPage.setErrorMessage('wrong user')
        const component = render(jsx)
        expect(component).toMatchSnapshot()
    })
})