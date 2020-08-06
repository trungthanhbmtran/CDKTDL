import React,{useState} from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';

type StateType ={
    counters:number;
    create:string;
}

class MyClass extends React.Component<AppProps>{
  constructor(props){
    super(props);
    this.state={
      counters:0,
      create:"thanh"
    }
  }
    render(){
        return(
            <>
            </>
        )
    } 
}
export default MyClass;
