
import React from 'react'

class SectionFlagship extends React.Component{
  render(){
    return (
      <section className={"jee-contents " + (this.props.selectedSection === 1 ? 'show' : 'hide')}>
        <aside className="menu">
          <ul className="menu-list">
            <li>
              Section 2 Template
            </li>
          </ul>
        </aside>
      </section>
    )
  }
}

export default SectionFlagship