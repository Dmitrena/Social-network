import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {LoginPage} from "./components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {UsersPage} from "./components/Users/UsersContainer";
import {Layout, Menu} from 'antd';
import {MessageOutlined, UserOutlined, UserSwitchOutlined,VideoCameraOutlined } from '@ant-design/icons';
import {Header} from "./components/Header/Header";

const {  Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChat = withSuspense(ChatPage)

class App extends Component <MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occured");
        //console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            /* <div className='app-wrapper'>
                  <HeaderContainer/>
                  <Navbar/>
                  <div className='app-wrapper-content'>
                      <Switch>
                          <Route exact path='/'
                                 render={() => <Redirect to={"/profile"}/>}/>

                          <Route path='/dialogs'
                                 render={()=><SuspendedDialogs/>}/>

                          <Route path='/profile/:userId?'
                                 render={()=><SuspendedProfile/>}/>

                          <Route path='/users'
                                 render={() => <UsersPage pageTitle={"Самураи"}/>}/>

                          <Route path='/login'
                                 render={() => <LoginPage/>}/>

                          <Route path='*'
                                 render={() => <div>404 NOT FOUND</div>}/>
                      </Switch>

                  </div>
              </div>*/
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/profile">Profile</Link>                        </Menu.Item>
                        <Menu.Item key="2" icon={<MessageOutlined />}>
                            <Link to="/dialogs">Messages</Link>                        </Menu.Item>
                        <Menu.Item key="3" icon={<UserSwitchOutlined />}>
                            <Link to="/users">Users</Link>                        </Menu.Item>
                        <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                            <Link to="/chat">Chat</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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

                                <Route path='/chat'
                                       render={() => <SuspendedChat/>}/>

                                <Route path='*'
                                       render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>My Big Project ©2022 Created by Dimas</Footer>
                </Layout>
            </Layout>
        );


    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
