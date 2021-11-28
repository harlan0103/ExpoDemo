import { AutoComplete, Input, Space, Typography } from 'antd';
import React, { useMemo, useRef } from 'react';
import './index.scss';

const { Text } = Typography;

const SearchBar = () => {
    const options = useRef([]);
    const popularRegionsStr = useRef(["泸州", "西安", "铜川"]);

    const popularRegions = useMemo(() => {
        const regions = popularRegionsStr.current.map((item, index) => {
            if (index === (popularRegionsStr.current.length - 1)) {
                return <Text underline key={item}>{`${item}馆`}</Text>
            }
            return (
                <Text
                    underline
                    key={item}
                    style={{
                        cursor: "pointer"
                    }}
                >
                    {`${item}馆`}
                </Text>
            )
        })
        const content =
            <Space>
                {regions}
            </Space>;
        return content;
    }, [])

    return (
        <div className="search-bar-body">
            {/* <div style={{ width: '100%' }}> */}
            <AutoComplete
                style={{ width: "60%", marginTop: 10, backgroundColor: 'transparent' }}
                options={options.current}
            >
                <Input.Search size="large" placeholder="填写搜索关键字" />
            </AutoComplete>
            <div style={{ width: "60%", display: 'flex', justifyContent: 'flex-start' }}>
                热门搜索: {popularRegions}
            </div>
            {/* </div> */}
        </div>
    )
}

export default SearchBar;