import React, { Component } from 'react';


class FormField extends Component {
    render() {
        return (
<div>
            

<div className="field">
  <label className="label">{this.props.label}</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>
<div className="field">
  <label className="label">{this.props.email}</label>
  <div className="control">
    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
</div>
<div className="field">
  <label className="label">{this.props.password}</label>
  <div className="control">
    <input className="input" type="email" placeholder="password" />
  </div>
</div>

                
            </div>
        );
    }
}

export default FormField;
