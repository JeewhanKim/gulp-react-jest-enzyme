import React from 'react'
import TopNav from './TopNav.jsx'
import SectionRefresh from './SectionRefresh.jsx'
import SectionFlagship from './SectionFlagship.jsx'
import SectionDocuments from './SectionDocuments.jsx'
import SectionAdvanced from './SectionAdvanced.jsx'

class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  removeItem(key) {
    delete this.store[key];
  }
};
if(window.localStorage === undefined) global.localStorage = new LocalStorageMock

// local storage values
let currentChapter = (localStorage !== undefined ? (localStorage['currentChapter'] | 0) : 0)
let currentCountry = (localStorage !== undefined ? (localStorage['currentCountry'] | 0) : 0)

class IndexApp extends React.Component{
  constructor(props){
    super(props)
    this.data = {}
    this.parseDataInit()
    this.state = {
      selectedSection: 0
    }
    this.clickChapter = this.clickChapter.bind(this)
  }
  clickChapter(chap) {
    this.setState({
      selectedSection : chap
    })
  }
  parseDataInit() {
    const parseFolder = (path) => {
      let cur = this.data;
      path.split("/").slice(0).forEach(function(elem){
          cur[elem] = cur[elem] || {}; 
          cur = cur[elem];
      });
    }
    $('#fileData').children().each((i, cat) =>  {
      parseFolder($(cat).attr('id'))
    });
    // console.log(JSON.stringify(this.data,2));
  }
  componentDidMount() {
    $('#contents-flagship .menu-label').click((e) => {$(e.target).toggleClass('collapsed').next().stop().slideToggle(300)})
    this.clickChapter(currentChapter)
    $(`#nav-countries li:eq(${currentCountry})`).click()
  }
  render(){
    return (
      <div>
        <TopNav selectedSection={this.state.selectedSection} clickChapter={this.clickChapter}/>
        <SectionRefresh folderData={this.data} selectedSection={this.state.selectedSection} />
        <SectionFlagship selectedSection={this.state.selectedSection} />
        <SectionDocuments selectedSection={this.state.selectedSection} />
        <SectionAdvanced selectedSection={this.state.selectedSection} />
      </div>
    )
  }
}

export default IndexApp