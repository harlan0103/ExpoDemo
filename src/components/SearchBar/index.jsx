import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input, Space, Typography } from 'antd';
import React, { useMemo, useRef } from 'react';
import './index.scss';

const { Text } = Typography;

const SearchBar = () => {
    const options = useRef([]);
    const popularRegionsStr = useRef(["泸州", "西安", "铜川"]);

    const popularRegions = useMemo(() => {
        const regions = popularRegionsStr.current.map((item, index) => {
            const fontStyle = {
                cursor: "pointer",
                color: 'white'
            }

            if (index === (popularRegionsStr.current.length - 1)) {
                return <Text underline key={item} style={fontStyle}>{`${item}馆`}</Text>
            }
            return (
                <Text
                    underline
                    key={item}
                    style={fontStyle}
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
                style={{ width: "60%", marginTop: 10 }}
                options={options.current}
            >
                <Input
                    size="large"
                    placeholder="填写搜索关键字"
                    className="search-input"
                    suffix={<SearchOutlined style={{ color: "#FFFFFF" }} />}
                />
            </AutoComplete>
            <div className="popular-regions" >
                <Space>
                    <div>
                        热门搜索:
                    </div>
                    <div>
                        {popularRegions}
                    </div>
                </Space>
            </div>
            {/* </div> */}
        </div>
    )
}

export default SearchBar;