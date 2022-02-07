import React, {useState} from "react";
import {Button, Menu} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {PATH} from "../../RoutesFunk";
import 'antd/dist/antd.css';


export const SideBarOnAntDesign = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return <div style={{width: 150}}>
        <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
        >
            <Menu.Item key="1" icon={<UserDeleteOutlined/>}>
                <Link to={PATH.PRE_JUNIOR}>Pre Junior</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined/>}>
                <Link to={PATH.JUNIOR}> Junior</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserAddOutlined/>}>
                <Link to={PATH.JUNIOR_PLUS}>Junior plus</Link>
            </Menu.Item>
        </Menu>
    </div>
}
