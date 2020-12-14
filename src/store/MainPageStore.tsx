import { action, makeObservable, observable, runInAction } from "mobx"
import { GithubResponseType, GithubUserItem } from "../types/types"

export class MainPageStore {
    userValue: string = ''
    users: Array<GithubUserItem> = []
    isLoadedUsers: boolean = false
    errorInputMessage: string = ''

    constructor() {
        makeObservable(this, {
            userValue: observable,
            users: observable,
            isLoadedUsers: observable,
            errorInputMessage: observable,
            getUsersFormHandler: action,
            getUsers: action,
            changeUserValue: action,
        })
    }

    getUsersFormHandler: React.FormEventHandler = (event) => {
        event.preventDefault()
        this.getUsers()
    }

    changeUserValue: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.userValue = event.target.value
        this.errorInputMessage = this.errorInputMessage ? '' : this.errorInputMessage
    }

    getUsers = async () => {
        try {
            if (this.userValue.length <= 0) {
                this.errorInputMessage = 'Введите имя пользователя'
            } else {
                const url = `https://api.github.com/search/users?q=${this.userValue}&`
                const response: GithubResponseType = await fetch(url).then(res => res.json())
                const users = response.items
                runInAction(() => {
                    this.users = users
                    this.isLoadedUsers = true
                })
            }
        } catch (e) {
            console.warn('Get users request error: ', e.message)
        }
    }
}
