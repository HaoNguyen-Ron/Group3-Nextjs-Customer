import React from 'react'
import UserDetail from './UserDetail'
import UserHistory from './UserHistory'
import UserPassword from './UserPassword'

export default function UserProfile({isShow}) {
  return (
    <div>
        <UserDetail  isShow={isShow} />

        <UserHistory isShow={isShow} />

        <UserPassword isShow={isShow}/>
    </div>
  )
}
