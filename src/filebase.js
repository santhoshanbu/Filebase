import React from 'react';
 
import FileBase64 from 'react-file-base64';
 
class Filebase extends React.Component {
 
  constructor() {
    super()
    this.state = {
      files: []
    }
  }
 
  // Callback~
  getFiles(files){
    this.setState({ files })
  }
 
  render() {
    return (
      <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
    )
  }
 
}
 
 export default Filebase
