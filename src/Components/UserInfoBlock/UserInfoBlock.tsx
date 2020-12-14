import React from 'react'


type UserInfoBlockProps = {
    title: string
    data: string | null | number
}
const UserInfoBlock: React.FC<UserInfoBlockProps> = ({data, title}) => {
    const stringData = data + ''
    const isHidden = stringData === 'false' || stringData === 'null' || stringData === 'undefined' || stringData === ''

    if (!isHidden) {
        return (
            <div className="d-flex w-100 p-3 mb-3 bg-light rounded shadow text-dark font-weight-bold">
                <p className="w-100 m-0" style={{fontSize: '18px'}}>{title}: </p>
                <p className="w-100 m-0 text-right">
                    {
                        stringData.startsWith('http')
                            ? <a href={stringData}>{stringData}</a>
                            : stringData
                    }
                </p>
            </div>
        )
    }
    return null
}

export default UserInfoBlock