import React from 'react'

const TabsListItem = ({data}) => {
  return (
    <li className={` pr-6 pl-6 cursor-pointer pb-1 border-b-2 border-transparent  hover:border-blue-800`}><a>{data}</a></li>
  )
}

export default TabsListItem
