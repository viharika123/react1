import React, { Component} from 'react'
import './Style.css'
export default class Style1 extends Component{
    state = {
        on: false,
      }
      toggle = () => {
        this.setState({
            on: !this.state.on
        })
      }
    render() {
        return (
            <div className='head'>
               <ul>
               <a href = " "><li className='primary'> Home </li></a>
               <a href = " "><li className='primary'> Board of advisors</li></a>
               <a href = " "><li className='primary'> Contact Us</li></a>
              </ul>
              <u className='menu'>
              <i onClick={this.toggle} className = 'menu1' class="fa fa-align-justify"></i>
              </u>
               {this.state.on && 
               <ul className='lists'>
                   <li className='lis'> Home </li>
                   <li className='lis'> Board of advisors</li>
                   <li className='lis'> Contact Us</li>
               </ul>
               }
            </div>
        )
    }
}