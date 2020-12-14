import { IUserPageStore } from './../store/UserPageStore';
import { MainPageStore } from './../store/MainPageStore';
import { ReactChild } from 'react';
import { RepositoriesStore } from '../store';


export type StoreContextProps = {
    children: ReactChild
}

export type rootStoreType = {
    mainPage: MainPageStore
    userPage: IUserPageStore
    repositories: RepositoriesStore
}

export type GithubResponseType = {
    incomplete_results: boolean
    items: Array<GithubUserItem>
    total_count: number
}

export type GithubUserItem = {
    avatar_url: string
    id: number
    login: string
}

export interface GithubUserPage {
    login: string,
    avatar_url: string,
    name: string,
    location: null | string,
    email: null | string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    blog: string,
    bio: null | string
    created_at: string,
    updated_at: string
}

export interface GithubRepository {
    id: number
    name: string
    html_url: string
    description: null | string
    created_at: string
    updated_at: string
    language: string
    forks: number
    open_issues: number
    watchers: number
}
