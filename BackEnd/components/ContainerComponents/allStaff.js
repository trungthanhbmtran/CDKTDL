import React, { useState } from 'react';
import AddStaff from '../Modal/Staff/addStaff'



class AllStaffComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: 0,
      create: "thanh",
      students: this.props.results
    }
  }
  
   renderTableData() {
    return this.state.students.map((staff, index) => {
      const {
        MANHANVIEN,
        HOTEN,
        BIDANH,
        NGAYSINH,
        GIOITINH,
        VANHOA,
        NGOAINGU,
        SOTRUONG,
        CHUYENMON,
        TRINHDO,
        NGAYLUUHS,
        LYDOLUUHS,
        TRANGTHAI,
        DANTOC,
        TONGIAO,
        SOBHXH,
        NOI_DKKCB,
        NHANVIEN_ID,
        ngaynhap,
        nguoinhap,
        ngaysua,
        nguoisua,
        SOCMND,
        NGAYCAP,
        NOICAP,
        DIDONG,
        DIENTHOAIBAN,
        DIACHIEMAIL,
        MASOTHUE,
        Diachi,
        Quequan,
        Website,
        bangcapkhac,
        chungchikhac,
        uudiem,
        khuyetdiem,
        diachilienhe,
        kinhnghiem
      } = staff;
      return (
        <tr key={MANHANVIEN}>
          <td>{MANHANVIEN}</td>
          <td>{HOTEN}</td>
          <td>{BIDANH}</td>
          <td>{NGAYSINH}</td>
          <td>{GIOITINH}</td>
          <td>{VANHOA}</td>
          <td>{NGOAINGU}</td>
          <td>{SOTRUONG}</td>
          <td>{CHUYENMON}</td>
          <td>{TRINHDO}</td>
          <td>{NGAYLUUHS}</td>
          <td>{LYDOLUUHS}</td>
          <td>{TRANGTHAI}</td>
          <td>{DANTOC}</td>
          <td>{TONGIAO}</td>
          <td>{SOBHXH}</td>
          <td>{NOI_DKKCB}</td>
          <td>{NHANVIEN_ID}</td>
          <td>{ngaynhap}</td>
          <td>{nguoinhap}</td>
          <td>{ngaysua}</td>
          <td>{nguoisua}</td>
          <td>{SOCMND}</td>
          <td>{NGAYCAP}</td>
          <td>{NOICAP}</td>
          <td>{DIDONG}</td>
          <td>{DIENTHOAIBAN}</td>
          <td>{DIACHIEMAIL}</td>
          <td>{MASOTHUE}</td>
          <td>{Diachi}</td>
          <td>{Quequan}</td>
          <td>{Website}</td>
          <td>{bangcapkhac}</td>
          <td>{chungchikhac}</td>
          <td>{uudiem}</td>
          <td>{khuyetdiem}</td>
          <td>{diachilienhe}</td>
          <td>{kinhnghiem}</td>
        </tr>
      )
    })
   }

  renderTableHeader() {
    const header = Object.keys(this.state.students[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }
  render() {
    return (
        <>
        <div className="page-content">
          <div className="page-bar">
            <div className="page-title-breadcrumb">
              <div className=" pull-left">
    <div className="page-title">{this.props.header}</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                </li>
                <li><a className="parent-item" href>Students</a>&nbsp;<i className="fa fa-angle-right" />
                </li>
    <li className="active">{this.props.header}</li>
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
                            <header>{this.props.header}</header>
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
                                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
                                  ADD+</button>
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
                                <tr>{this.renderTableHeader()}</tr>
                                </thead>
                                <tbody>
                                {this.renderTableData()}
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
        <AddStaff/>
      </div>
         </>
    )
  }
}
export default AllStaffComponent;
