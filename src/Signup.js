import React, { Component } from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component {
    render() {
        return (
            <div>
        <FormField label="Name" email="Email" password="Password"/>
        <CoolButton className ="button is-primary is-success is-danger" buttonname="Sign up"/>
            </div>
        );
    }
}

export default Signup;