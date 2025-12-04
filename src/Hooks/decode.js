import React from 'react'

const decode = ({str}) => {
    const entities = {
        '&quot;': '"',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
      
      };
  return (
    str?.replace(/&quot;|&amp;|&lt;|&gt;/g, (match) => entities[match])
  )
}

export default decode