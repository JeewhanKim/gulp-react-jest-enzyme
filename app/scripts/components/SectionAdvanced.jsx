
import React from 'react'

class SectionAdvanced extends React.Component{
  render(){
    return (
      <section className={"jee-contents " + (this.props.selectedSection === 3 ? 'show' : 'hide')}>
        Section 4
      </section>
    )
  }
}

export default SectionAdvanced