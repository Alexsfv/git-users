import { render } from '@testing-library/react'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { rootStore, storeContext, StoreContext } from '../../store/StoreContext'
import InputUser from './InputUser'

describe("InputUser component", () => {
    it("should render InputUser", () => {
        const jsx = (
            <StoreContext>
                <InputUser/>
            </StoreContext>
        )
        const component = mount(jsx)
        expect(component).toMatchSnapshot()
    })

    it("validate user name field", () => {
        rootStore.mainPage.changeError('wrong')
        const jsx = (
            <StoreContext>
                <InputUser/>
            </StoreContext>
        )
        const component = mount(jsx)
        const input = component.find('input')
        const errorMesage = component.find('.invalid-feedback')
        expect(input.at(0).hasClass('is-invalid'))
        expect(errorMesage.text()).toBe('wrong')
    })
})