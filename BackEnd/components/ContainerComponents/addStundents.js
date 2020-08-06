import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';



class AddStundents extends React.Component {
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
        <div className="page-content">
          <div className="page-bar">
            <div className="page-title-breadcrumb">
              <div className=" pull-left">
                <div className="page-title">All Students List</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                </li>
                <li><a className="parent-item" href>Students</a>&nbsp;<i className="fa fa-angle-right" />
                </li>
                <li className="active">All Students List</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tabbable-line">
                <ul className="nav customtab nav-tabs" role="tablist">
                  <li className="nav-item"><a href="#tab1" className="nav-link active" data-toggle="tab">List
                      View</a></li>
                  <li className="nav-item"><a href="#tab2" className="nav-link" data-toggle="tab">Grid
                      View</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active fontawesome-demo" id="tab1">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card card-box">
                          <div className="card-head">
                            <header>All Students List</header>
                            <div className="tools">
                              <a className="fa fa-repeat btn-color box-refresh" href="javascript:;" />
                              <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;" />
                              <a className="t-close btn-color fa fa-times" href="javascript:;" />
                            </div>
                          </div>
                          <div className="card-body ">
                            <div className="row">
                              <div className="col-md-6 col-sm-6 col-6">
                                <div className="btn-group">
                                  <a href="add_professor.html" id="addRow" className="btn btn-info">
                                    Add New <i className="fa fa-plus" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-6 col-6">
                                <div className="btn-group pull-right">
                                  <a className="btn deepPink-bgcolor  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                                    <i className="fa fa-angle-down" />
                                  </a>
                                  <ul className="dropdown-menu pull-right">
                                    <li>
                                      <a href="javascript:;">
                                        <i className="fa fa-print" /> Print </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        <i className="fa fa-file-pdf-o" /> Save as
                                        PDF </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        <i className="fa fa-file-excel-o" />
                                        Export to Excel </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="table-scrollable">
                              <table className="table table-striped table-bordered table-hover table-checkable order-column valign-middle" id="example4">
                                <thead>
                                  <tr>
                                    <th />
                                    <th> Roll No </th>
                                    <th> Name </th>
                                    <th> Department </th>
                                    <th> Mobile </th>
                                    <th> Email </th>
                                    <th>Admission Date</th>
                                    <th> Action </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std1.jpg" alt="" />
                                    </td>
                                    <td className="left">18</td>
                                    <td>Rajesh Bhatt</td>
                                    <td className="left">Mechanical</td>
                                    <td><a href="tel:4444565756">
                                        4444565756 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        rajesh@gmail.com </a></td>
                                    <td className="left">22 Feb 2010</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std10.jpg" alt="" />
                                    </td>
                                    <td className="left">5</td>
                                    <td>Pooja Patel</td>
                                    <td className="left">Science</td>
                                    <td><a href="tel:444786876">
                                        444786876 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        pooja@gmail.com </a></td>
                                    <td className="left">27 Aug 2005</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std2.jpg" alt="" />
                                    </td>
                                    <td className="left">15</td>
                                    <td>Sarah Smith</td>
                                    <td className="left">M.C.A.</td>
                                    <td><a href="tel:44455546456">
                                        44455546456 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        sarah@gmail.com </a></td>
                                    <td className="left">05 Jun 2011</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std3.jpg" alt="" />
                                    </td>
                                    <td className="left">23</td>
                                    <td>John Deo</td>
                                    <td className="left">M.B.B.S.</td>
                                    <td><a href="tel:444543564">
                                        444543564 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        john@gmail.com </a></td>
                                    <td className="left">15 Feb 2012</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std4.jpg" alt="" />
                                    </td>
                                    <td className="left">10</td>
                                    <td>Jay Soni</td>
                                    <td className="left">Arts</td>
                                    <td><a href="tel:444543564">
                                        444543564 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        kenh@gmail.com </a></td>
                                    <td className="left">12 Nov 2012</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std5.jpg" alt="" />
                                    </td>
                                    <td className="left">14</td>
                                    <td>Jacob Ryan</td>
                                    <td className="left">Music</td>
                                    <td><a href="tel:444543564">
                                        444543564 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        johnson@gmail.com </a></td>
                                    <td className="left">03 Dec 2001</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std6.jpg" alt="" />
                                    </td>
                                    <td className="left">7</td>
                                    <td>Megha Trivedi</td>
                                    <td className="left">Commerce</td>
                                    <td><a href="tel:444543564">
                                        444543564 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        megha@gmail.com </a></td>
                                    <td className="left">17 Mar 2013</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std3.jpg" alt="" />
                                    </td>
                                    <td className="left">18</td>
                                    <td>Rajesh</td>
                                    <td className="left">Civil</td>
                                    <td><a href="tel:4444565756">
                                        4444565756 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        rajesh@gmail.com </a></td>
                                    <td className="left">22 Feb 2000</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std10.jpg" alt="" />
                                    </td>
                                    <td className="left">5</td>
                                    <td>Pooja Patel</td>
                                    <td className="left">Computer</td>
                                    <td><a href="tel:444786876">
                                        444786876 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        pooja@gmail.com </a></td>
                                    <td className="left">27 Aug 2005</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <a href="javasctipt().html" className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std1.jpg" alt="" />
                                    </td>
                                    <td className="left">18</td>
                                    <td>Rajesh Bhatt</td>
                                    <td className="left">Mechanical</td>
                                    <td><a href="tel:4444565756">
                                        4444565756 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        rajesh@gmail.com </a></td>
                                    <td className="left">22 Feb 2010</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std10.jpg" alt="" />
                                    </td>
                                    <td className="left">5</td>
                                    <td>Pooja Patel</td>
                                    <td className="left">Science</td>
                                    <td><a href="tel:444786876">
                                        444786876 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        pooja@gmail.com </a></td>
                                    <td className="left">27 Aug 2005</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std2.jpg" alt="" />
                                    </td>
                                    <td className="left">15</td>
                                    <td>Sarah Smith</td>
                                    <td className="left">M.C.A.</td>
                                    <td><a href="tel:44455546456">
                                        44455546456 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        sarah@gmail.com </a></td>
                                    <td className="left">05 Jun 2011</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std3.jpg" alt="" />
                                    </td>
                                    <td className="left">23</td>
                                    <td>John Deo</td>
                                    <td className="left">M.B.B.S.</td>
                                    <td><a href="tel:444543564">
                                        444543564 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        john@gmail.com </a></td>
                                    <td className="left">15 Feb 2012</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std4.jpg" alt="" />
                                    </td>
                                    <td className="left">10</td>
                                    <td>Jay Soni</td>
                                    <td className="left">Arts</td>
                                    <td><a href="tel:444543564">
                                        444543564 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        kenh@gmail.com </a></td>
                                    <td className="left">12 Nov 2012</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std5.jpg" alt="" />
                                    </td>
                                    <td className="left">14</td>
                                    <td>Jacob Ryan</td>
                                    <td className="left">Music</td>
                                    <td><a href="tel:444543564">
                                        444543564 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        johnson@gmail.com </a></td>
                                    <td className="left">03 Dec 2001</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std6.jpg" alt="" />
                                    </td>
                                    <td className="left">7</td>
                                    <td>Megha Trivedi</td>
                                    <td className="left">Commerce</td>
                                    <td><a href="tel:444543564">
                                        444543564 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        megha@gmail.com </a></td>
                                    <td className="left">17 Mar 2013</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std1.jpg" alt="" />
                                    </td>
                                    <td className="left">18</td>
                                    <td>Rajesh</td>
                                    <td className="left">Civil</td>
                                    <td><a href="tel:4444565756">
                                        4444565756 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        rajesh@gmail.com </a></td>
                                    <td className="left">22 Feb 2000</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <button className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </button>
                                    </td>
                                  </tr>
                                  <tr className="odd gradeX">
                                    <td className="patient-img">
                                      <img src="../assets/img/std/std10.jpg" alt="" />
                                    </td>
                                    <td className="left">5</td>
                                    <td>Pooja Patel</td>
                                    <td className="left">Computer</td>
                                    <td><a href="tel:444786876">
                                        444786876 </a></td>
                                    <td><a href="mailto:shuxer@gmail.com">
                                        pooja@gmail.com </a></td>
                                    <td className="left">27 Aug 2005</td>
                                    <td>
                                      <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                        <i className="fa fa-pencil" />
                                      </a>
                                      <a href="javasctipt().html" className="btn btn-danger btn-xs">
                                        <i className="fa fa-trash-o " />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std10.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Pooja Patel </div>
                                <div className="name-center"> Science </div>
                              </div>
                              <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std1.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Rajesh </div>
                                <div className="name-center"> Mathematics </div>
                              </div>
                              <p>45, Krishna Tower, Near Bus Stop, Satellite, <br />Mumbai
                              </p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std2.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Sarah Smith </div>
                                <div className="name-center"> Commerce </div>
                              </div>
                              <p>456, Estern evenue, Courtage area, <br />New York</p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std3.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">John Deo </div>
                                <div className="name-center"> Arts </div>
                              </div>
                              <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std4.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Jay Soni </div>
                                <div className="name-center"> M.B.A. </div>
                              </div>
                              <p>45, Krishna Tower, Near Bus Stop, Satellite, <br />Mumbai
                              </p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std5.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Jacob Ryan </div>
                                <div className="name-center"> Urology </div>
                              </div>
                              <p>456, Estern evenue, Courtage area, <br />New York</p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std6.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Megha Trivedi </div>
                                <div className="name-center"> Electrical </div>
                              </div>
                              <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std1.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Rajesh </div>
                                <div className="name-center"> Mathematics </div>
                              </div>
                              <p>45, Krishna Tower, Near Bus Stop, Satellite, <br />Mumbai
                              </p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std2.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Sarah Smith </div>
                                <div className="name-center"> Commerce </div>
                              </div>
                              <p>456, Estern evenue, Courtage area, <br />New York</p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std10.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Pooja Patel </div>
                                <div className="name-center"> Science </div>
                              </div>
                              <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std1.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">Rajesh </div>
                                <div className="name-center"> Mathematics </div>
                              </div>
                              <p>45, Krishna Tower, Near Bus Stop, Satellite, <br />Mumbai
                              </p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-box">
                          <div className="card-body no-padding ">
                            <div className="doctor-profile">
                              <img src="../assets/img/std/std3.jpg" className="doctor-pic" alt="" />
                              <div className="profile-usertitle">
                                <div className="doctor-name">John Deo </div>
                                <div className="name-center"> Arts </div>
                              </div>
                              <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                              <div>
                                <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                              </div>
                              <div className="profile-userbuttons">
                                <a href="professor_profile.html" className="btn btn-circle deepPink-bgcolor btn-sm">Read
                                  More</a>
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
        </div>
      </div>
         </>
    )
  }
}
export default AddStundents;
