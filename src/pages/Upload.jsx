import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

// import NavBar from '../components/NavBar'
// import Footer from '../components/Footer';

// const maxFileSize = 12000000;

class Upload extends Component {
    // handleOnDrop = (files, rejectedFiles) => {
    //     console.log(files)
    //     console.log('rejected files are ', rejectedFiles)
    // }

    render() {
        return (
            <div>
                {/* <NavBar /> */}
                    <Dropzone >
                        Drag 'n' drop files here or click to select files
                    </Dropzone>
                {/* <Footer /> */}
            </div>
        )
    }

}

export default Upload;