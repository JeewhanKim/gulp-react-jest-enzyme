import React from 'react'

const SubFolder = ({countryCode, value, path}) => {
  const folderClick = (e) => {$(e.target).toggleClass('collapsed').next().stop().slideToggle(300)}
  let ret = []
  for (const [k, v] of Object.entries(value)){
    if(Object.entries(value[k]).length < 1) {
      k.split('.').pop() === 'html' ?
        ret.push(
          <li key={`subfolder-child-li-`+k.toString()}><a key={`subfolder-child-`+k.toString()} target="_blank" href={path + '/' + k.toString()}>{k}</a></li>
        ) : 
        ret.push(
          <ul key={`subfolder-child-ul-`+k.toString()}>
            <li key={`subfolder-child-li-`+k.toString()}><p key={`subfolder-child-p-`+k.toString()} className="menu-label">{k}</p>
            </li>
          </ul>
        )
    } else {   
      ret.push(     
        <ul key={`subfolder-child-ul-`+k.toString()}>
          <p className="menu-label" key={`subfolder-child-p-`+k.toString()} onClick={(e) => {folderClick(e)}}>{k}</p>
          <ul key={`subfolder-child-ul-sub-`+k.toString()}>
            <SubFolder countryCode={countryCode} value={v} path={path +`/`+ k.toString()} />
          </ul>
        </ul>
      )
    }
  }
  return ret
}

const SubFolderList = ({countryCode, subFolders}) => {
  const folderClick = (e) => {$(e.target).toggleClass('collapsed').next().stop().slideToggle(300)}
  let folders = []

  subFolders.map((subfolder) => {
    if(Object.entries(subfolder[1]).length < 1) {
      folders.push(
        <div key={`subfolder-menu-`+subfolder[0]}>
          <p className="menu-label" key={`subfolder-menu-label-`+subfolder[0]}>
          { subfolder[0].split('.').pop() === 'html' ?
            <a key={`subfolder-child-`+subfolder[0]} target="_blank" href={`content/`+ countryCode.toString() +`/`+ subfolder[0]}>{subfolder[0]}</a>
            : subfolder[0] }
          </p>
        </div>
      )
       
    } else {
      folders.push(
        <div key={`subfolder-menu-`+subfolder[0].toString()}>
          <p className="menu-label" key={`subfolder-menu-label-`+subfolder[0]} onClick={(e) => {folderClick(e)}}>{subfolder[0]}</p>
          <ul className="menu-list" key={`subfolder-menu-list-`+subfolder[0]}>
            <SubFolder countryCode={countryCode} value={subfolder[1]} path={`content/`+ countryCode.toString() +`/`+ subfolder[0]} />
          </ul>
        </div>
      )
    }
  })
  return folders
}

const FolderList = ({folderData}) => {
  return Object.keys(folderData).map((countryCode) => 
    <section className="jee-contents-sub-country" id={`contents-`+countryCode} style={{display:`none`}} key={`sub-country-`+countryCode.toString()}>
      <aside className="menu" key={`menu-`+countryCode.toString()}>
        <SubFolderList countryCode={countryCode} subFolders={Object.entries(folderData[countryCode])} />
      </aside>
    </section>
  )
}

class MainNav extends React.Component{
  constructor(props){
    super(props)
    this.folderData = props.folderData
  }
  render() {
    return (
      <section className="jee-contents-sub">
        <FolderList folderData={this.folderData} />
      </section>
    )
  }
}

export default MainNav

