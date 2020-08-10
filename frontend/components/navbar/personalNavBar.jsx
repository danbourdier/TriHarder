import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class photoDropDown extends Component {
  constructor(props) {
    super(props)

    this.state = { hiddenFlag: true }
  }
 
  componentDidMount() {
    let target = document.getElementById("ez-drop-01249")
    let secondTarget = document.getElementsByClassName("header-group")[0]

    target.addEventListener("mouseenter", () => { 
        this.flagFalse()
      }
    )

    secondTarget.addEventListener("mouseleave", () => {
        this.flagTrue()
      }
    )

  }

  flagTrue() {
    return this.setState({hiddenFlag: true})
  }

  flagFalse() {
    return this.setState({hiddenFlag: false})
  }

  render() {

    return (
    <div className="revealed-container-div">
      <div className="header-group">
        <h2 id="ez-drop-01249" className="header-name"></h2>
          <section className={this.state['hiddenFlag'] ? "header-pic-dropdown-container" : "header-pic-dropdown-container-visible"}>
          <Link className="header-button" to="/home_page">Dashboard</Link>
          <div className="header-button" onClick={this.props.logout}>Log Out</div>
        </section>
      </div>
    </div>
    )
  }

}

export default photoDropDown;