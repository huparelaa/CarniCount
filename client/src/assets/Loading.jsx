import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faC} from '@fortawesome/free-solid-svg-icons'
function Loading({color="black"}) {
  return (
    <div>
        <FontAwesomeIcon icon={faC} spin style={{color:color}}/>
    </div>
  )
}

export default Loading
