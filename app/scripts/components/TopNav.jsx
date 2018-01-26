import React from 'react'
import IndexApp from './IndexApp.jsx'

class TopNav extends React.Component{
  navClick(e) {
    const chap = $(e.currentTarget).index()
    this.props.clickChapter(chap)
    if(localStorage !== undefined) localStorage['currentChapter'] = $(e.currentTarget).index()
  }
  render() {
    return (
      <section id="nav-main">
        <div className="tabs">
          <ul>
            <li className={this.props.selectedSection === 0 ? 'is-active' : ''} onClick={(e) => {this.navClick(e)}}>
              <a><span className="icon is-small"><i className="fa fa-image"></i></span>Section 1</a>
            </li>
            <li className={this.props.selectedSection === 1 ? 'is-active' : ''} onClick={(e) => {this.navClick(e)}}>
              <a><span className="icon is-small"><i className="fa fa-film"></i></span>Section 2</a>
            </li>
            <li className={this.props.selectedSection === 2 ? 'is-active' : ''} onClick={(e) => {this.navClick(e)}}>
              <a><span className="icon is-small"><i className="fa fa-book"></i></span>Section 3</a>
            </li>
            {/* <li className={this.props.selectedSection === 3 ? 'is-active' : ''} onClick={(e) => {this.navClick(e)}}>
              <a><span className="icon is-small"><i className="fa fa-puzzle-piece"></i></span>Advanced</a>
            </li> */}
          </ul>
        </div>
      </section>
    )
  }
}
export default TopNav