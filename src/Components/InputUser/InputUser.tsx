import { observer } from 'mobx-react'
import React from 'react'
import { useStore } from '../../store/StoreContext'

const InputUser: React.FC<{}> = observer(() => {

    const { mainPage } = useStore()

    const inputUserClasses = ['form-control', 'form-control-lg']
    const inputErrorClasses = ['']
    if (mainPage.errorInputMessage) {
        inputUserClasses.push('is-invalid')
        inputErrorClasses.push('invalid-feedback')
    }

    return (
        <form className="w-100 mb-5" onSubmit={mainPage.getUsersFormHandler}>
            <input 
                className={inputUserClasses.join(' ')}
                type="text" placeholder="Введите имя пользователя"
                onChange={mainPage.changeUserValue}
                value={mainPage.userValue}
            />
            <div className={inputErrorClasses.join(' ')}>
                {mainPage.errorInputMessage}
            </div>
            <input 
                type="submit" 
                value="Найти" 
                className="btn w-100 btn-success mt-3"
            />
        </form>
    )
})

export default InputUser