import { render, shallow } from 'enzyme'
import React from 'react'
import UserInfoBlock from './UserInfoBlock'

describe("UserInfoBlock component", () => {
    it('should render UserInfoBlock', () => {
        const component = shallow(<UserInfoBlock title="ssd" data="11-12-11"/>)
        expect(component).toMatchSnapshot()
    })

    it("should render UserInfoBlock with link", () => {
        const component = shallow(<UserInfoBlock title="ssd" data="https://google.com"/>)
        expect(component).toMatchSnapshot()
    })

    it("should empty render UserInfoBlock", () => {
        const component = shallow(<UserInfoBlock title="title" data={null}/>)
        expect(component.isEmptyRender()).toBe(true)
    })
})