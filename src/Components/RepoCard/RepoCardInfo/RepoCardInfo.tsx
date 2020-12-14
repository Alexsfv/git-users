import { observer } from 'mobx-react'
import React from 'react'

type RepoCardInfoProps = {
    title: string
    data: string | null | number
}
const RepoCardInfo: React.FC<RepoCardInfoProps> = observer(({title, data}) => {
    const stringData = data + ''
    const isHidden = stringData === 'false' || stringData === 'null' || stringData === 'undefined' || stringData === ''

    if (!isHidden) {
        return (
            <div className="w-100 mb-2 bg-light shadow-sm rounded">
                <p className="mt-0 mb-1 font-weight-bold text-center">{title}</p>
                <p className="ml-1 card-text text-center">{data}</p>
            </div>
        )
    }

    return null
})

export default RepoCardInfo