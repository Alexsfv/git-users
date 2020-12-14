import { observer } from 'mobx-react'
import React from 'react'
import { useStore } from '../../store/StoreContext'
import RepoCard from '../RepoCard/RepoCard'

const Repositories: React.FC<{}> = observer(() => {

    const { repositories } = useStore()
    const repos_count = repositories.repos_count

    return (
        <div className="row py-4 bg-primary rounded">
            <div className="container">
                <div className="d-flex flex-wrap">
                    <p className="w-100 font-weight-bold text-white text-center" style={{fontSize: '20px'}}>Список репозиториев</p>
                    {
                        repos_count
                            ? repositories.repos.map(repo => (
                                <RepoCard repo={repo} key={repo.id}/>
                                )
                            )
                            : null
                    }
                </div>
            </div>
        </div>
    )
})

export default Repositories