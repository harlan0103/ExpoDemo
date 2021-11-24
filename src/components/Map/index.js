import React from 'react';
import { Image } from 'antd';

import './index.scss'
import worldMapImg from  '@/statics/img/world_map.jpg'

const WorldMap = () => {
    const cities = [
        {
            name: '北京',
            top: 300,
            left: 530,
        },
        {
            name: '美国',
            top: 300,
            left: 950,
        },
    ];
    return (
        <div className="container">
            <Image
                src={ worldMapImg }
                preview={false}
                width="100%"
            />
            <div className="city-wrap">
                {cities.map(city => (
                    <div
                        className="city"
                        style={{ top: city.top, left: city.left }}
                    >
                        <div className="city-circle" />
                        <div className="city-dot" />
                        <div style={{ marginLeft: 4 }}>{ city.name }</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { WorldMap };
