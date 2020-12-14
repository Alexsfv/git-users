import { runInAction } from 'mobx';
import { observable } from 'mobx';
import { action } from 'mobx';
import { GithubUserPage } from './../types/types';
import { makeObservable } from 'mobx';
import { getTimeString } from '../types/func/time';

export interface IUserPageStore extends GithubUserPage {
    isLoaded: boolean
    isExists: boolean | null
    errorMessage: string
    getUserData: (login: string) => void
    clearUserPage: () => void
    catchErrorRosponse: (status: number) => void
}

const userPageStore: IUserPageStore = {
    isLoaded: false,
    isExists: null,
    errorMessage: '',
    login: '',
    avatar_url: '',
    name: '',
    location: null,
    email: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    blog: '',
    bio: null,
    created_at: '',
    updated_at: '',
    async getUserData(login) {
        try {
            const url = `https://api.github.com/users/${login}`
            const response = await fetch(url)
            if (response.status === 200) {
                const userData: GithubUserPage = await response.json()
                runInAction(() => {
                    this.isExists = true
                    this.errorMessage = ''
                    this.login = userData.login
                    this.avatar_url = userData.avatar_url
                    this.name = userData.name
                    this.location = userData.location
                    this.email = userData.email
                    this.public_repos = userData.public_repos
                    this.public_gists = userData.public_gists
                    this.followers = userData.followers
                    this.following = userData.following
                    this.blog = userData.blog
                    this.bio = userData.bio
                    this.created_at = getTimeString(userData.created_at)
                    this.updated_at = getTimeString(userData.updated_at)
                })
            } else {
                this.catchErrorRosponse(response.status)
            }
        } catch (e) {
            console.warn(e.message)
        }
    },
    catchErrorRosponse(status: number) {
            if (status === 404) {
                runInAction(() => {
                    this.isExists = false
                    this.errorMessage = 'Пользователь с таким логином не существует'
                })
            } else if (status === 403) {
                runInAction(() => {
                    this.errorMessage = 'Превышен лимит запросов, попробуйте позже'
                })
            } else {
                runInAction(() => {
                    this.errorMessage = 'Что-то пошло не так'
                })
            }
    },
    clearUserPage() {
        this.isLoaded = false
        this.isExists = false
        this.errorMessage = ''
        this.login = ''
        this.avatar_url = ''
        this.name = ''
        this.location = null
        this.email = null
        this.public_repos = 0
        this.public_gists = 0
        this.followers = 0
        this.following = 0
        this.blog = ''
        this.bio = null
        this.created_at = ''
        this.updated_at = ''
    }
}

const userPageAnnotations = {
    isLoaded: observable,
    isExists: observable,
    errorMessage: observable,
    login: observable,
    avatar_url: observable,
    name: observable,
    location: observable,
    email: observable,
    public_repos: observable,
    public_gists: observable,
    followers: observable,
    following: observable,
    blog: observable,
    bio: observable,
    created_at: observable,
    updated_at: observable,
    getUserData: action.bound,
    clearUserPage: action.bound,
    catchErrorRosponse: action.bound
}


export const UserPageStore = (): IUserPageStore => makeObservable(userPageStore, userPageAnnotations)