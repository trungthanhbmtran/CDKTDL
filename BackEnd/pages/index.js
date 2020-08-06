import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Blank from '../components/ContainerComponents/blank'


class Index extends React.Component {
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
        <meta name="author" content="SmartUniversity" />
        <title>Smart University | Bootstrap Responsive Admin Template</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" type="text/css" />
        <link href="fonts/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
        <link href="fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="fonts/material-design-icons/material-icon.css" rel="stylesheet" type="text/css" />
        <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="../assets/plugins/material/material.min.css"/>
        <link rel="stylesheet" href="../assets/css/material_style.css"/>
        <link href="../assets/css/theme/light/theme_style.css" rel="stylesheet" id="rt_style_components" type="text/css" />
        <link href="../assets/css/theme/light/style.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/plugins.min.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/responsive.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/theme/light/theme-color.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="../assets/img/favicon.ico" />
        </Head>
        <Layout {...this.props}>
          <Blank/>
        </Layout>
        <script src="../assets/plugins/jquery/jquery.min.js"></script>
	<script src="../assets/plugins/popper/popper.js"></script>
	<script src="../assets/plugins/jquery-blockui/jquery.blockui.min.js"></script>
	<script src="../assets/plugins/jquery-slimscroll/jquery.slimscroll.js"></script>
	<script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
	<script src="../assets/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
	<script src="../assets/js/app.js"></script>
	<script src="../assets/js/layout.js"></script>
	<script src="../assets/js/theme-color.js"></script>
	<script src="../assets/plugins/material/material.min.js"></script>
            </>
    )
  }
}
export default Index;
