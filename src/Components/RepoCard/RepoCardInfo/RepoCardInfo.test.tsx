import { shallow } from 'enzyme'
import React from 'react'
import RepoCardInfo from './RepoCardInfo'

describe("RepoCardInfo component", () => {
    it("should render RepoCardInfo", () => {
        const component = shallow(<RepoCardInfo title="some title" data="11-22-33"/>)
        expect(component).toMatchSnapshot()
    })

    it("should empty render RepoCardInfo", () => {
        const component = shallow(<RepoCardInfo title="some title" data=""/>)
        expect(component).toMatchSnapshot()
    })
})