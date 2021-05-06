/* eslint-disable no-unused-vars */
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import Map from './Map'
import Header from './Header'
import { IoFemaleSharp, IoMailOutline, IoMaleSharp } from 'react-icons/io5'
import { MdPhoneIphone, MdMail, MdPhone } from 'react-icons/md'
import Nav from './Nav'
import { useHistory } from 'react-router'

const UserPage = (props) => {

  return (
    <div id='userpage-page-container'>
      <Header
        name={props.user.name.first.toUpperCase()}
        handleNav={props.handleNav}
        showHeaderLinks={props.showHeaderLinks}
        goBack={true}
        path={'/users'}
      />
      <Nav showHeaderLinks={props.showHeaderLinks} handleNav={props.handleNav}/>
      <div id='userpage-ppn-wrapper'>
        <span><img src={props.user.picture.medium} id='pp-pic'></img></span>
        <div id='userpage-name-wrapper'>
          <span id='userpage-name-header-span'>Name</span>
          <div>
            <span id='userpage-name-span'>{`${props.user.name.first} ${props.user.name.last}`}</span>
            <span id='userpage-nat-span'><ReactCountryFlag countryCode={props.user.nat} svg/></span>
          </div>
        </div>
      </div>
      <Map name={props.user.name.first} position={props.country.latlng}></Map>
      <div id='user-info-container'>
        <div id='gender-container'>
          <div>
            {props.user.gender === 'male'
              ?
              <span><IoMaleSharp id='male-icon'></IoMaleSharp></span>
              :
              <span><IoFemaleSharp id='female-icon'></IoFemaleSharp></span>
            }
          </div>
        </div>
        <div id='age-container'>
          <span id='age-span'>{`${props.user.dob.age} yo`}</span>
        </div>
      </div>
      <div id='address-container'>
        <span id='userpage-address-header-span'>Address</span>
        <div id='address-line-container'>
          <span className='address-line'>{`${props.user.location.street.name} ${props.user.location.street.number}`}</span>
          <span className='address-line'>{`${props.user.location.postcode}`}</span>
          <span className='address-line'>{`${props.user.location.city}`}</span>
        </div>
        <span></span>
      </div>
      <div id='contact-container'>
        <span id='userpage-contact-header-span'>Contact</span>
        <div id='contact-line-container'>
          <span className='contact-line'>
            <MdMail />
            <span className='contact-text' style={{ fontSize: '14px' }}>
              {`${props.user.email}`}
            </span>
          </span>
          <span className='contact-line'>
            <MdPhoneIphone/>
            <span className='contact-text'>
              {`${props.user.cell}`}
            </span>
          </span>
          <span className='contact-line'>
            <MdPhone/>
            <span className='contact-text'>
              {`${props.user.phone}`}
            </span>
          </span>
        </div>
        <span></span>
      </div>
    </div>
  )
}

export default UserPage
