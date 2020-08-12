import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AllStaffComponent from '../components/ContainerComponents/allStaff'
import {Send_Get_RestAPI} from '../Request/imw_request'


class AllStaff extends React.Component {

  static async getInitialProps(ctx) {
    const res = await Send_Get_RestAPI('http://localhost:3001/staff')//them vo
    const json = await res.json();
    return {results : json , header: 'List Staff' };
  }

  constructor(props) {
    super(props);
    this.state = {
      counters: 0,
      create: "thanh",
    }
  }
  render() {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="Responsive Admin Template" />
          <meta name="author" content="SmartUniversity" />
          <title>Quản Lý Đào Tạo </title>
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" type="text/css" />
          <link href="fonts/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
          <link href="fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link href="fonts/material-design-icons/material-icon.css" rel="stylesheet" type="text/css" />
          <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="../assets/plugins/summernote/summernote.css" rel="stylesheet" />
          <link rel="stylesheet" href="../assets/plugins/material/material.min.css" />
          <link rel="stylesheet" href="../assets/css/material_style.css" />
          <link href="../assets/css/pages/inbox.min.css" rel="stylesheet" type="text/css" />
          <link href="../assets/css/theme/light/theme_style.css" rel="stylesheet" id="rt_style_components" type="text/css" />
          <link href="../assets/css/plugins.min.css" rel="stylesheet" type="text/css" />
          <link href="../assets/css/theme/light/style.css" rel="stylesheet" type="text/css" />
          <link href="../assets/css/responsive.css" rel="stylesheet" type="text/css" />
          <link href="../assets/css/theme/light/theme-color.css" rel="stylesheet" type="text/css" />
          <link rel="shortcut icon" href="../assets/img/favicon.ico" />
        </Head>
        <Layout {...this.props}>
          <AllStaffComponent {...this.props}/>
        </Layout>
        
          
        </>
    )
  }
}
export default AllStaff;
