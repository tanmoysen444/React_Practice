import React from 'react'

function Count({text,count}) {
    console.log(`reading count ${text}`);
  return (
    <div>
        <h1>{text} : {count}</h1>
    </div>
  )
}

// export default Count
export default React.memo(Count)