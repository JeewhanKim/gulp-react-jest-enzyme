
import React from 'react'

class SectionDocuments extends React.Component{
  render(){
    return (
      <section className={"jee-contents " + (this.props.selectedSection === 2 ? 'show' : 'hide')}>
        <aside className="menu">
          <ul className="menu-list">
            <li>
              <a target="_blank" href="#">
                <span className="panel-icon"><i className="fa fa-book"></i></span>Section 3 Link 1
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <span className="panel-icon"><i className="fa fa-book"></i></span>Section 3 Link 2
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <span className="panel-icon"><i className="fa fa-book"></i></span>Section 3 Link 3
              </a>
            </li>
          </ul>
        </aside>
      </section>
    )
  }
}

export default SectionDocuments