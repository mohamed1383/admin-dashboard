import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function CircleChart2() {
    return (
        <div className="circle-chart2 flex items-center flex-col">
            <div className="chart-title">
                <p style={{ fontFamily: "poppins-medium", fontSize: "18px", color: "#22285E" }}>Site Health</p>
                <span style={{ fontFamily: 'poppins-regular', fontSize: "12px", color: "#7A7E9E" }}>Check your site health score </span>
            </div>
            <Gauge
                width={200}
                height={200}
                className='w-24 h-24'
                value={84}
                startAngle={-110}
                endAngle={110}
                sx={{

                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 40,
                        transform: 'translate(0px, 0px)',
                    },

                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: '#8A2BE2',
                    },

                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: '#95D5B6',
                    },
                }}
                text={({ value }) => `${value}%`}
            />
        </div>
    )
}
