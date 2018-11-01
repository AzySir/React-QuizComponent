import React, { Component } from 'react';
import '../css/contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="main">
            <h1>Contact Details</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Social Media</th>
                </tr>
                </thead>
                <tbody>
                <tr> 
                    <td>Adam Sir</td>
                    <td>+61412542273</td>
                    <td>Adam.Sir@Cognizant.com</td>
                    <td><a href="https://www.linkedin.com/in/adam-azy-sir-a59428137/" rel="noopener noreferrer" target="_blank">https://www.linkedin.com/in/adam-azy-sir-a59428137/</a></td>
                </tr>
                </tbody>
            </table>
            </div>   
        );
    }
}

export default Contact;