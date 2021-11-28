import React, { useState, useRef  } from 'react';

import './index.scss'
import worldMapImg from  '@/statics/img/world_map.png'

// import { DEFAULT_PADDING } from '../Const'

// 参展国家的信息和在地图上的相对位置，目前写死，以后可以从服务端获得
const rawCities = [
    {
        name: '中国', // 国家名
        // 相对地图上的坐标
        top: 50.5,
        left: 38.5,
        shouldShowCircle: false, // 是否应该显示呼吸圈
    },
    {
        name: '韩国',
        top: 46.5,
        left: 41.7,
        shouldShowCircle: false,
    },
    {
        name: '老挝',
        top: 55.5,
        left: 36.5,
        shouldShowCircle: false,
    },
    {
        name: '柬埔寨',
        top: 59,
        left: 37,
        shouldShowCircle: false,
    },
    {
        name: '泰国',
        top: 58.3,
        left: 35.5,
        atLeft: true, // 是否名称应该显示在左边
        shouldShowCircle: false,
    },
];

const WorldMap = () => {

    const [cities, setCities] = useState([]);

    const imgRef = useRef();

    // 根据图片的宽高，计算出城市的绝对位置
    const setCityAbsolutePosition = () => {
        const { width: imgWidth, height: imgHeight } = imgRef.current;
        const cities = rawCities.map(city => {
            const top = imgHeight * (city.top) / 100 + 'px';
            const left = imgWidth * (city.left) / 100 + 'px';
            return {
                ...city,
                top,
                left,
            };
        });
        setCities(cities);
    };

    const cityMouseEnter = (index) => {
        const newCities = [...cities];
        newCities[index].shouldShowCircle = true;
        setCities(newCities);
    }

    const cityMouseOut = (index) => {
        const newCities = [...cities];
        newCities[index].shouldShowCircle = false;
        setCities(newCities);
    }

    return (
        <div className="container">
            <img
                ref={imgRef}
                src={ worldMapImg }
                alt="wolrd map"
                style={{ width: '100%' }}
                onLoad={() => setCityAbsolutePosition()}
            />
            {cities.map((city, index) => (
                <div
                    key={ index }
                    className="city"
                    style={{
                        top: city.top,
                        left: city.left,
                    }}
                    onMouseEnter={() => cityMouseEnter(index)}
                    onMouseOut={() => cityMouseOut(index)}
                >
                    <div
                        className="city-circle"
                        style={{
                            borderColor: city.shouldShowCircle ? 'red' : 'transparent',
                            animationIterationCount: city.shouldShowCircle ? 'infinite' : '0',
                        }}
                    />
                    <div className="city-dot" />
                    {city.atLeft ? null : <div style={{ marginLeft: 4 }}>{ city.name }</div>}
                    {city.atLeft ? (
                        <div
                            className="left-city-name"
                            style={{
                                left: city.name.length * -14 - 4,
                                width: city.name.length * 14,
                            }}
                        >{ city.name }</div>
                    ) : null}
                </div>
            ))}
        </div>
    );
}

export { WorldMap };
