import React from 'react'
import ChildB from './ChildB'
function ChildA({user,password}) {
  return (
    <div>
        <h2>This is Child A</h2>
        <ChildB user = {user} password = {password}/>
    </div>
  )
}

export default ChildA