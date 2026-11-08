import React from 'react'
import ChildC from './ChildC'
function ChildB({user,password}) {
  return (
    <div>
        <h2>This is Child B</h2>
        <ChildC user = {user} password = {password}/>
    </div>
  )
}

export default ChildB