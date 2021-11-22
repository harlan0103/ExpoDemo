import React from "react";
import { Menu } from 'antd';

const { SubMenu } = Menu;


class NaviBar extends React.Component {
    state = {
        current : 'mail',
    };

    render() {
        const { current } = this.state;

        return(
            <div>
                <Menu mode="horizontal" theme="light">
                    <Menu.Item key="Home">
                        首页
                    </Menu.Item>
                    
                    <SubMenu key="News" title="资讯活动"> 
                        <Menu.ItemGroup>
                            <Menu.Item key="News_overview"> 博览会概况 </Menu.Item>
                            <Menu.Item key="News_update"> 展会动态 </Menu.Item>
                            <Menu.Item key="News_announcement"> 公告 </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <SubMenu key="Merchants" title="参展商户">
                        <Menu.ItemGroup>
                            <Menu.Item key="Merchants_id:1"> 车辆及配件 </Menu.Item>
                            <Menu.Item key="Merchants_id:2"> 电子及家电 </Menu.Item>
                            <Menu.Item key="Merchants_id:3"> 纺织服装 </Menu.Item>
                            <Menu.Item key="Merchants_id:4"> 建材 </Menu.Item>
                            <Menu.Item key="Merchants_id:5"> 日用品消费 </Menu.Item>
                            <Menu.Item key="Merchants_id:6"> 食品 </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <Menu.Item>
                        关于我们
                    </Menu.Item>

                    <Menu.Item>
                        关于世博
                    </Menu.Item>

                    <Menu.Item>
                        登录
                    </Menu.Item>

                    <Menu.Item>
                        注册
                    </Menu.Item>

                    <Menu.Item>
                        En
                    </Menu.Item>
                </Menu>
                
            </div>
        );
    };
}

export default NaviBar;