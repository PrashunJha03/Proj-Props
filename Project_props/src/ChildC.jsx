import React from 'react'

function ChildC(props) {
  return (
    <div>
        <h2>This is Child C</h2>
        <h3>This Data Is Comming From Parent</h3><br/>
        <h4>Your UserId is {props.user}</h4>
        <h4>Your Password is {props.password}</h4>
        
    </div>
  )
}

export default ChildC