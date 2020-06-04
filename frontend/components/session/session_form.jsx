import React from 'react';
import SessionFormSignup from "./session_form_signup";
import SessionFormLogin from "./session_form_login";

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    // this.seperator = this.seperator.bind(this);
  }

  seperator(){
    let { errors, formType, processForm, logIn, wipeErrors } = this.props;
    if (this.props.formType === "SIGN UP") {
      return < SessionFormSignup wipeErrors={ wipeErrors } formType = { formType } errors = { errors } processForm = { processForm } logIn={ logIn }/>
    } else if (this.props.formType === "LOG IN") {
      return <SessionFormLogin wipeErrors={wipeErrors} formType={formType} errors={errors} processForm={processForm} logIn={ logIn } />
    } else {
      return null // forgot password container's form.
    }
  };

  render() {
    return(
      <div>
        {this.seperator()}
      </div>
    )

  };

}
/////////////////////////////

export default SessionForm;