import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import React from 'react'

export default function CircleChart() {

    const data = [
        { name: 'value1', value: 30 },
        { name: 'value2', value: 40 },
        { name: 'value2', value: 30 },
    ];


    const COLORS = ['#95D5B6', '#9E4BDC','#F03C59'];

    return (
    <div className='circle-chart1'>
        <div className="chart-title">
            <p style={{fontFamily: "poppins-medium" , fontSize: "18px" , color: "#22285E"}}>Online Sales</p>
            <span style={{fontFamily: 'poppins-regular' , fontSize: "12px" , color: "#7A7E9E"}}>Product percentage </span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie  
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label
                        value='mobile: 40%'
                        position="center"
                        style={{
                            fontFamily: "poppins-medium",
                            fontSize: '16px',
                            // fontWeight: 'bold',
                            fill: '#333',
                        }}
                    />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    )
}
