import { observer } from 'mobx-react'
import React from 'react'
import { getTimeString } from '../../types/func/time'
import { GithubRepository } from '../../types/types'
import RepoCardInfo from './RepoCardInfo/RepoCardInfo'

type RepoCardProps = {
    repo: GithubRepository
}
const RepoCard: React.FC<RepoCardProps> = observer(({repo}) => {

    return (
        <div className="card mx-2 mb-3" style={{width: '18rem'}}>
            <div className="d-flex flex-column card-body">
                <h3 className="card-title text-success">{repo.name}</h3>

                    <RepoCardInfo
                        title={'Описание'}
                        data={repo.description}
                    />

                    <RepoCardInfo
                        title={'Язык'}
                        data={repo.language}
                    />

                    <RepoCardInfo
                        title={'Создан'}
                        data={getTimeString(repo.created_at)}
                    />

                    <RepoCardInfo
                        title={'Обновлен'}
                        data={getTimeString(repo.updated_at)}
                    />

                    <RepoCardInfo
                        title={'Forks'}
                        data={repo.forks}
                    />

                    <RepoCardInfo
                        title={'Watchers'}
                        data={repo.watchers}
                    />

                    <RepoCardInfo
                        title={'Open Issues'}
                        data={repo.open_issues}
                    />


                <a href={repo.html_url} className="btn btn-primary ml-auto mt-auto" target="_blank">Перейти к репозиторию</a>
            </div>
        </div>
    )
})

export default RepoCard