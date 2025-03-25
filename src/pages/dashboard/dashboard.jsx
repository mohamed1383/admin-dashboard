import React from 'react'
import './dashboard.css'
import DataBox from '../../components/databox'
import MeasageBox from '../../components/measage-box'
import ClientStatisticChart from '../../components/chart'
import CircleChart from '../../components/circleChart'
import CircleChart2 from '../../components/circleChart2'

const dataBoxes = [
  {id: 1,text1: 'NOTIFICATION' , text2: '6 Unread Notifications' ,textColor: false,iconName: false, iconBackgroundColor: '#BE78F0', iconColor: '#fff', backgroundColor: '#fff'},
  {id: 2,text1: 'PROJECT' , text2: '4 Project Last Update' ,textColor: '#fff',iconName: 'vector', iconBackgroundColor: '#BE78F0', iconColor: '#fff', backgroundColor: '#9E4BDC'},
  {id: 3,text1: 'CLIENT' , text2: '6 Client Waiting' ,textColor: false,iconName: 'user', iconBackgroundColor: '#22285E', iconColor: '#fff', backgroundColor: '#fff'},
  {id: 4,text1: 'Create new' , text2: 'PROJECT' ,textColor: '#fff',iconName: 'paper-plus', iconBackgroundColor: '#fff', iconColor: '#95D5B6', backgroundColor: '#95D5B6'}
]

export default function Dashboard({size2}) {
  return (
    <div className={`dashboard ${size2 ? 'size2' : ''}`}>
      <div className="data-boxes">
        {dataBoxes.map((item) => (
          <DataBox key={item.id} {...item}></DataBox>
        ))}
      </div>
        <MeasageBox></MeasageBox>
        <ClientStatisticChart></ClientStatisticChart>
        <CircleChart/>
        <CircleChart2/>
    </div>
  )
}
