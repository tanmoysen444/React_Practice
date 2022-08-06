import React from 'react'

function Button({handleClick,children}) {
    console.log(`rendering button ${children}`);
  return (
    <div>
        <button onClick={handleClick}>{children} </button>
    </div>
  )
}

// export default Button
export default React.memo(Button)
// export default Button