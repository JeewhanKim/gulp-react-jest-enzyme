
import React from 'react'
import SubNav from './SubNav.jsx'
import MainNav from './MainNav.jsx'

class SectionRefresh extends React.Component{
  constructor(props){
    super(props)
    this.folderData = props.folderData
  }
  render(){
    return (
      <section className={"jee-contents " + (this.props.selectedSection === 0 ? 'show' : 'hide')}>
        <SubNav folderData={this.folderData}/>
        <MainNav folderData={this.folderData}/>
      </section>
    )
  }
}

export default SectionRefresh