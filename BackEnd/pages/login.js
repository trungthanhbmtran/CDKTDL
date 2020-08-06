import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import LoginComponent from '../components/login'

class Login extends React.Component {
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
        <Head>
            <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Responsive Admin Template" />
      <meta name="author" content="RedstarHospital" />
      <title>Smart University | Bootstrap Responsive Admin Template</title>
      <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&amp;subset=all" rel="stylesheet" type="text/css" />
      <link href="fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="../assets/plugins/iconic/css/material-design-iconic-font.min.css"/>
      <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="../assets/css/pages/extra_pages.css"/>
      <link rel="shortcut icon" href="../assets/img/favicon.ico" />
            </Head>
        <LoginComponent/>
    <script src="../assets/plugins/jquery/jquery.min.js"></script>
    <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="../assets/js/pages/extra-pages/pages.js"></script>
      </>
    )
  }
}
export default Login;
