import React from 'react';
import s from './Post.module.css';
import {Avatar, Col, Layout, Menu, Row} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    UserOutlined,
    UserSwitchOutlined
} from "@ant-design/icons";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {UsersPage} from "../../../Users/UsersContainer";
import {LoginPage} from "../../../Login/LoginPage";

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <Avatar size={40}>USER</Avatar>

            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;


/*
<Layout>
    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo"/>

        <Menu theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
        >
            <Menu.Item key="1" icon={<UserOutlined/>}>
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<MessageOutlined/>}>
                <Link to="/dialogs">Messages</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserSwitchOutlined/>}>
                <Link to="/users">Users</Link>
            </Menu.Item>
        </Menu>
    </Sider>
    <Layout className="site-layout">

        <Header className="site-layout-background" style={{color: 'white', padding: 0}}>
            <Row>
                <Col span={20}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                    })}
                </Col>
                <Col span={4}>
                    <Avatar icon={<UserOutlined />}/>
                </Col>
            </Row>

        </Header>
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >

            <Switch>
                <Route exact path='/'
                       render={() => <Redirect to={"/profile"}/>}/>

                <Route path='/dialogs'
                       render={() => <SuspendedDialogs/>}/>

                <Route path='/profile/:userId?'
                       render={() => <SuspendedProfile/>}/>

                <Route path='/users'
                       render={() => <UsersPage pageTitle={"Users"}/>}/>

                <Route path='/login'
                       render={() => <LoginPage/>}/>

                <Route path='*'
                       render={() => <div>404 NOT FOUND</div>}/>
            </Switch>


        </Content>
    </Layout>
</Layout>
)
}
}*/
