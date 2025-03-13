import React from 'react'
import '../app.css'
import { IoIosSearch } from "react-icons/io";

export default function Header({size2}) {

  return (
    <>
      <div className={`header ${size2 && 'size2'}`}>
        <div className="search-bar">
            <h1 className="title">Dashboard</h1>
            <input type="search" className='search-input' placeholder='search' />
            <IoIosSearch className='search-icon'></IoIosSearch>
        </div>

        <div className="user-info">
           <div className="user-image">
                <span>FL</span>
           </div>

           <div className="data">
              <span className="user-name">Asril ibrahim</span>
              <span className="email">asril@rocketmail.com</span>
           </div>
        </div>
      </div>
    </>
  )
}
