import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Modal from '../Modal/modalStaff'



class BlankPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: 0,
      create: "thanh"
    }
  }
  render() {
    console.log(this.props.children)
    console.log(this.props)
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <div className="page-bar">
            <div className="page-title-breadcrumb">
              <div className=" pull-left">
                <div className="page-title">Blank page</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                </li>
                <li className="active">Blank Page</li>
              </ol>
            </div>
          </div>
          {/* add content here */}
         
        </div>
      </div>
    )
  }
}
export default BlankPage;
