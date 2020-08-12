
import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Header from './header'
import SidebarMenu from './sidebarmenu.js'
import AddStundents from './ContainerComponents/addStundents'


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: 0,
            create: "thanh"
        }
    }
    
    render() {
        return (
            <>
            <div className="page-wrapper">
                {/* start header */}
                <div className="page-header navbar navbar-fixed-top">
                    {/* Header ở đây*/}
                    <Header />
                </div>
                {/* end header */}
                {/* start color quick setting */}
                <div className="settingSidebar">
                    <a href="javascript:void(0)" className="settingPanelToggle"> <i className="fa fa-spin fa-cog" />
                    </a>
                    <div className="settingSidebar-body ps-container ps-theme-default">
                        <div className=" fade show active">
                            <div className="setting-panel-header">Setting Panel
            </div>
                            <div className="quick-setting slimscroll-style">
                                <ul id="themecolors">
                                    <li>
                                        <p className="sidebarSettingTitle">Sidebar Color</p>
                                    </li>
                                    <li className="complete">
                                        <div className="theme-color sidebar-theme">
                                            <a href="#" data-theme="white"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="dark"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="blue"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="indigo"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="cyan"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="green"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="red"><span className="head" /><span className="cont" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="sidebarSettingTitle">Header Brand color</p>
                                    </li>
                                    <li className="theme-option">
                                        <div className="theme-color logo-theme">
                                            <a href="#" data-theme="logo-white"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="logo-dark"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="logo-blue"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="logo-indigo"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="logo-cyan"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="logo-green"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="logo-red"><span className="head" /><span className="cont" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="sidebarSettingTitle">Header color</p>
                                    </li>
                                    <li className="theme-option">
                                        <div className="theme-color header-theme">
                                            <a href="#" data-theme="header-white"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="header-dark"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="header-blue"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="header-indigo"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="header-cyan"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="header-green"><span className="head" /><span className="cont" /></a>
                                            <a href="#" data-theme="header-red"><span className="head" /><span className="cont" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end color quick setting */}
                {/* start page container */}
                <div className="page-container">
                    {/* start sidebar menu */}
                    <div className="sidebar-container">
                        {/* MEnu left */}
                        <SidebarMenu />
                    </div>
                    {/* end sidebar menu */}
                    {/* start page content */}
                    <div className="page-content-wrapper" {...this.props}>
                    {/* end page content */}
                    {/* start chat sidebar */}
                    </div>
                    <div className="chat-sidebar-container" data-close-on-body-click="false">
                        <div className="chat-sidebar">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="#quick_sidebar_tab_1" className="nav-link active tab-icon" data-toggle="tab"> <i className="material-icons">chat</i>Chat
                  <span className="badge badge-danger">4</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#quick_sidebar_tab_3" className="nav-link tab-icon" data-toggle="tab"> <i className="material-icons">settings</i>
                  Settings
                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                {/* Start User Chat */}
                                <div className="tab-pane active chat-sidebar-chat in active show" role="tabpanel" id="quick_sidebar_tab_1">
                                    <div className="chat-sidebar-list">
                                        <div className="chat-sidebar-chat-users slimscroll-style" data-rail-color="#ddd" data-wrapper-class="chat-sidebar-list">
                                            <div className="chat-header">
                                                <h5 className="list-heading">Online</h5>
                                            </div>
                                            <ul className="media-list list-items">
                                                <li className="media"><img className="media-object" src="../assets/img/prof/prof3.jpg" width={35} height={35} alt="..." />
                                                    <i className="online dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">John Deo</h5>
                                                        <div className="media-heading-sub">Spine Surgeon</div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-success">5</span>
                                                    </div> <img className="media-object" src="../assets/img/prof/prof1.jpg" width={35} height={35} alt="..." />
                                                    <i className="busy dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Rajesh</h5>
                                                        <div className="media-heading-sub">Director</div>
                                                    </div>
                                                </li>
                                                <li className="media"><img className="media-object" src="../assets/img/prof/prof5.jpg" width={35} height={35} alt="..." />
                                                    <i className="away dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Jacob Ryan</h5>
                                                        <div className="media-heading-sub">Ortho Surgeon</div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-danger">8</span>
                                                    </div> <img className="media-object" src="../assets/img/prof/prof4.jpg" width={35} height={35} alt="..." />
                                                    <i className="online dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Kehn Anderson</h5>
                                                        <div className="media-heading-sub">CEO</div>
                                                    </div>
                                                </li>
                                                <li className="media"><img className="media-object" src="../assets/img/prof/prof2.jpg" width={35} height={35} alt="..." />
                                                    <i className="busy dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Sarah Smith</h5>
                                                        <div className="media-heading-sub">Anaesthetics</div>
                                                    </div>
                                                </li>
                                                <li className="media"><img className="media-object" src="../assets/img/prof/prof7.jpg" width={35} height={35} alt="..." />
                                                    <i className="online dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Vlad Cardella</h5>
                                                        <div className="media-heading-sub">Cardiologist</div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="chat-header">
                                                <h5 className="list-heading">Offline</h5>
                                            </div>
                                            <ul className="media-list list-items">
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-warning">4</span>
                                                    </div> <img className="media-object" src="../assets/img/prof/prof6.jpg" width={35} height={35} alt="..." />
                                                    <i className="offline dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Jennifer Maklen</h5>
                                                        <div className="media-heading-sub">Nurse</div>
                                                        <div className="media-heading-small">Last seen 01:20 AM</div>
                                                    </div>
                                                </li>
                                                <li className="media"><img className="media-object" src="../assets/img/prof/prof8.jpg" width={35} height={35} alt="..." />
                                                    <i className="offline dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Lina Smith</h5>
                                                        <div className="media-heading-sub">Ortho Surgeon</div>
                                                        <div className="media-heading-small">Last seen 11:14 PM</div>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-success">9</span>
                                                    </div> <img className="media-object" src="../assets/img/prof/prof9.jpg" width={35} height={35} alt="..." />
                                                    <i className="offline dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Jeff Adam</h5>
                                                        <div className="media-heading-sub">Compounder</div>
                                                        <div className="media-heading-small">Last seen 3:31 PM</div>
                                                    </div>
                                                </li>
                                                <li className="media"><img className="media-object" src="../assets/img/prof/prof10.jpg" width={35} height={35} alt="..." />
                                                    <i className="offline dot" />
                                                    <div className="media-body">
                                                        <h5 className="media-heading">Anjelina Cardella</h5>
                                                        <div className="media-heading-sub">Physiotherapist</div>
                                                        <div className="media-heading-small">Last seen 7:45 PM</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End User Chat */}
                                {/* Start Setting Panel */}
                                <div className="tab-pane chat-sidebar-settings" role="tabpanel" id="quick_sidebar_tab_3">
                                    <div className="chat-sidebar-settings-list slimscroll-style">
                                        <div className="chat-header">
                                            <h5 className="list-heading">Layout Settings</h5>
                                        </div>
                                        <div className="chatpane inner-content ">
                                            <div className="settings-list">
                                                <div className="setting-item">
                                                    <div className="setting-text">Sidebar Position</div>
                                                    <div className="setting-set">
                                                        <select className="sidebar-pos-option form-control input-inline input-sm input-small ">
                                                            <option value="left" defaultValue="selected">Left</option>
                                                            <option value="right">Right</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="setting-item">
                                                    <div className="setting-text">Header</div>
                                                    <div className="setting-set">
                                                        <select className="page-header-option form-control input-inline input-sm input-small ">
                                                            <option value="fixed" defaultValue="selected">Fixed</option>
                                                            <option value="default">Default</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="setting-item">
                                                    <div className="setting-text">Footer</div>
                                                    <div className="setting-set">
                                                        <select className="page-footer-option form-control input-inline input-sm input-small ">
                                                            <option value="fixed">Fixed</option>
                                                            <option value="default" defaultValue="selected">Default</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                <h5 className="list-heading">Account Settings</h5>
                                            </div>
                                            <div className="settings-list">
                                                <div className="setting-item">
                                                    <div className="setting-text">Notifications</div>
                                                    <div className="setting-set">
                                                        <div className="switch">
                                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-1">
                                                                <input type="checkbox" id="switch-1" className="mdl-switch__input" defaultChecked />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="setting-item">
                                                    <div className="setting-text">Show Online</div>
                                                    <div className="setting-set">
                                                        <div className="switch">
                                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-7">
                                                                <input type="checkbox" id="switch-7" className="mdl-switch__input" defaultChecked />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="setting-item">
                                                    <div className="setting-text">Status</div>
                                                    <div className="setting-set">
                                                        <div className="switch">
                                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-2">
                                                                <input type="checkbox" id="switch-2" className="mdl-switch__input" defaultChecked />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="setting-item">
                                                    <div className="setting-text">2 Steps Verification</div>
                                                    <div className="setting-set">
                                                        <div className="switch">
                                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-3">
                                                                <input type="checkbox" id="switch-3" className="mdl-switch__input" defaultChecked />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                <h5 className="list-heading">General Settings</h5>
                                            </div>
                                            <div className="settings-list">
                                                <div className="setting-item">
                                                    <div className="setting-text">Location</div>
                                                    <div className="setting-set">
                                                        <div className="switch">
                                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-4">
                                                                <input type="checkbox" id="switch-4" className="mdl-switch__input" defaultChecked />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="setting-item">
                                                    <div className="setting-text">Save Histry</div>
                                                    <div className="setting-set">
                                                        <div className="switch">
                                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-5">
                                                                <input type="checkbox" id="switch-5" className="mdl-switch__input" defaultChecked />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="setting-item">
                                                    <div className="setting-text">Auto Updates</div>
                                                    <div className="setting-set">
                                                        <div className="switch">
                                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-6">
                                                                <input type="checkbox" id="switch-6" className="mdl-switch__input" defaultChecked />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end chat sidebar */}
                </div>
                {/* end page container */}
                {/* start footer */}
                <div className="page-footer">
                    <div className="page-footer-inner"> 2017 © Smart University Theme By
          <a href="mailto:redstartheme@gmail.com" target="_top" className="makerCss">Redstar Theme</a>
                    </div>
                    <div className="scroll-to-top">
                        <i className="icon-arrow-up" />
                    </div>
                </div>
                {/* end footer */}
            </div>
            <script src="../assets/plugins/jquery/jquery.min.js"></script>
            <script src="../assets/plugins/popper/popper.js"></script>
            <script src="../assets/plugins/jquery-blockui/jquery.blockui.min.js"></script>
            <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
            <script src="../assets/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
            <script src="../assets/plugins/datatables/jquery.dataTables.min.js"></script>
            <script src="../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.js"></script>
            <script src="../assets/js/pages/table/table_data.js"></script>
            <script src="../assets/js/app.js"></script>
            <script src="../assets/js/layout.js"></script>
            <script src="../assets/js/theme-color.js"></script>
            <script src="../assets/plugins/material/material.min.js"></script>
            </>
        )
    }
}
export default Layout;

