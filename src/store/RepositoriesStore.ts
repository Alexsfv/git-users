import { GithubRepository } from './../types/types';
import { makeObservable, observable, runInAction, action } from 'mobx';

export class RepositoriesStore {
    repos: GithubRepository[] = []
    repos_count: number = 0

    constructor() {
        makeObservable(this, {
            repos: observable,
            repos_count: observable,
            getRepos: action
        })
    }

    getRepos = async (login: string) => {
        try {
            const url = `https://api.github.com/users/${login}/repos`
            const response = await fetch(url)

            if (response.status === 200) {  
                const repos = await response.json()
                runInAction(() => {
                    this.repos = repos
                    this.repos_count = repos.length
                })

            }

        } catch (e) {

        }
    }
}