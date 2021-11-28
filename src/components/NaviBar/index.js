import { Button, Menu } from 'antd';
import React from "react";
import '../../statics/css/naviBar.css';
import './index.css';


const { SubMenu } = Menu;

// 目前这些数据先写死，等后来服务端开发后，会从服务端获得数据
const data = {
    items: [
        {
            key: 'Home',
            title: '首页',
        },
        {
            key: 'News',
            title: '新闻中心',
            items: [
                {
                    key: 'News_overview',
                    title: '博览会概况',
                },
                {
                    key: 'News_update',
                    title: '展会动态',
                },
                {
                    key: 'News_announcement',
                    title: '公告',
                },
            ],
        },
        {
            key: 'Merchants',
            title: '参展商家',
            items: [
                {
                    key: 'Merchants_id_1',
                    title: '车辆及配件',
                },
                {
                    key: 'Merchants_id_2',
                    title: '电子及家电',
                },
                {
                    key: 'Merchants_id_3',
                    title: '纺织服装',
                },
                {
                    key: 'Merchants_id_4',
                    title: '建材',
                },
                {
                    key: 'Merchants_id_5',
                    title: '日用品消费',
                },
                {
                    key: 'Merchants_id_6',
                    title: '食品',
                },
            ],
        },
        {
            key: 'About_us',
            title: '关于我们',
        },
        /*
        {
            key: 'About_expo',
            title: '关于世博',
        },
        */
        {
            key: 'Login',
            title: '登录',
        },
        {
            key: 'Register',
            title: '注册',
        },
        {
            key: 'Language',
            title: 'ENGLISH',
        },
    ],
};

const NaviBar = () => {

    return (
        <div>
            <Menu mode="horizontal" theme="light">
                {data.items.map(item => (
                    item.items && item.items.length > 0 ? (
                        <SubMenu key={item.key} title={item.title}>
                            <Menu.ItemGroup>
                                {item.items.map(subItem => (
                                    <Menu.Item key={subItem.key}>
                                        {subItem.title}
                                    </Menu.Item>
                                ))}
                            </Menu.ItemGroup>
                        </SubMenu>
                    ) : (
                        <Menu.Item key={item.key}>
                            {item.key == "Register" || item.key == "Login" ?
                                <Button type="primary" size="large" className="naviBar-button">
                                    {item.title}
                                </Button> :
                                <div>
                                    {item.title}
                                </div>}
                        </Menu.Item>
                    )
                ))}
            </Menu>
        </div>
    );
}

export default NaviBar;