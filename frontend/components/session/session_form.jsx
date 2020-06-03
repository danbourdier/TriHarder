import React from 'react';
import SessionFormSignup from "./session_form_signup";
import SessionFormLogin from "./session_form_login";

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    // this.seperator = this.seperator.bind(this);
  }

  seperator(){
    let { errors, formType, processForm } = this.props;
    if (this.props.formType === "SIGN UP") {
      return < SessionFormSignup formType = { formType } errors = { errors } processForm = { processForm } />
    } else if (this.props.formType === "LOG IN") {
      return <SessionFormLogin formType={formType} errors={errors} processForm={processForm} />
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