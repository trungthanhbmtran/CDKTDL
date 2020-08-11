import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';



class Modal extends React.Component {
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
        <div className="container">
 
  {/* Modal */}
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <p>Modal test thanhkute.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>


      
    )
  }
}
export default Modal;
