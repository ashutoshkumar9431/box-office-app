import React from 'react'
import   { Link } from 'react-router-dom'

const LINK = [
  {to : '/starred', desc : ' Go to starred' },
  {to : '/'   , desc : ' Go to home' }

]
 const Navs = () => {
  return (
    <div>
      <ul>
       {
          LINK.map((items) =>
              <li key ={items.to}>
              <Link to = {items.to} > {items.desc}</Link>
             </li>
          )
        }
      </ul>
    </div>
  )
}
export default Navs