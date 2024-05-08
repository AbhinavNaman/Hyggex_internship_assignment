import React from 'react'
import TabsListItem from './TabsListItem'

const Tabs = () => {
  return (
    <div className='flex justify-center mb-6'>
      <ol className='flex  list-none text-xl '>
       <TabsListItem data = "Study"/>
       <TabsListItem data = "Quiz"/>
       <TabsListItem data = "Test"/>
       <TabsListItem data = "Game"/>
       <TabsListItem data = "Others"/>
      </ol>
    </div>
  )
}

export default Tabs
