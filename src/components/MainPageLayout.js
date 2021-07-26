import React from 'react'
import Navs from './Navs'
import Title from'./Title'

export const MainPageLayout = ({children}) => {
  return (
   <div>
      <Title title = " BOX OFFICE"
       subtitle ="Are you searching for an actor or an movie"/>
     <Navs/>
     {children}
   </div>
  )
}
