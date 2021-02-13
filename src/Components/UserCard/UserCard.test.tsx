import { render } from 'enzyme'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UserCard from './UserCard'


describe('should render UserCard component', () => {
    let jsx: JSX.Element

    beforeEach(() => {
        const user = { avatar_url: "sd", id: 5, login: "log" }
        jsx = (
            <BrowserRouter>
                <UserCard user={user}/>
            </BrowserRouter>
        )
    })

    it("should contain img", () => {
        const img = render(jsx).find('img')
        expect(img.length).toBe(1)
    })

    it("should contain link", () => {
        const anchor = render(jsx).find('a')
        expect(anchor.length).toBe(1)
    })
})
