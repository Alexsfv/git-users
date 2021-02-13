import { shallow } from 'enzyme'
import React from 'react'
import RepoCard from './RepoCard'

const repo = {
    id: 55,
    name: 'name',
    html_url: 'https://google.com',
    description: 'descr',
    created_at: '111-111-111',
    updated_at: '111-111-111',
    language: 'JS',
    forks: 5,
    open_issues: 1,
    watchers: 5,
}

describe("RepoCard component", () => {
    it("should render RepoCard", () => {
        const component = shallow(<RepoCard repo={repo}/>)
        expect(component).toMatchSnapshot()
    })

    it("should contain link", () => {
        const component = shallow(<RepoCard repo={repo}/>)
        const link = component.find('a')
        expect(link).toHaveLength(1)
    })
})