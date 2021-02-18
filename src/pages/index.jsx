import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TreeView from '@material-ui/lab/TreeView';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import FolderIcon from '@material-ui/icons/Folder';
import TreeItem from '@material-ui/lab/TreeItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
// import Tree from '../components/Tree/index'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function Index() {
    const classes = useStyles();

    const [show, setShow] = React.useState(false);

    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };

    const onDrop = useCallback(acceptedFiles => {
        let formData = new FormData()
        formData.append('uploadedFiles', acceptedFiles)
        console.log(formData);
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})


    return (
        
        <div>
            <NavBar />
            <div classname="dropzone-container" style={{ maxWidth: '49%', alignItems: 'center', marginLeft: '26%', textAlign: 'justify'}}>
                <h3>DISCLAIMER</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente libero aliquid ratione autem tenetur necessitatibus soluta qui quam iure placeat. Incidunt quos asperiores sunt facere suscipit doloremque libero rem minus!
                </p>
                {/* <p>
                    Sapiente libero aliquid ratione autem tenetur necessitatibus soluta qui quam iure placeat. Incidunt quos asperiores sunt facere suscipit doloremque libero rem minus!
                </p> */}
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="I agree"
            />
            </div>
                {/* Dropzone tutorial = https://www.youtube.com/watch?v=aK3aUW08YGw */}
            <div { ...getRootProps() } className="dropzone-container" >
                <input { ...getInputProps() } />
                {
                    isDragActive ?
                    <p>Drop files here ...</p> :
                    <p>Drag 'n' drop files here or click to select files</p> 
                }
                
            </div>
            <Button
            style={{ maxWidth: '49%', alignItems: 'center', marginLeft: '26%', textAlign: 'justify'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => setShow(!show)}
          >
            Upload
          </Button>
            <br/>
            {
                show?  <TreeView
                className={classes.root}
                defaultCollapseIcon={<FolderOpenOutlinedIcon />}
                defaultExpandIcon={<FolderIcon />}
                expanded={expanded}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
            >
            <TreeItem nodeId="1" label="test_files" style={{ maxWidth: '49%', alignItems: 'center', marginLeft: '26%', textAlign: 'justify', minHeight: '100%'}}>
                <TreeItem nodeId="7" label="doc1.txt" />
                <TreeItem nodeId="8" label="doc2.txt" />
                <TreeItem nodeId="9" label="doc3.txt" />
                <TreeItem nodeId="10" label="French sample.docx" />
                <TreeItem nodeId="11" label="French sample.pdf" />
                <TreeItem nodeId="12" label="Italian sample.docx" />
                <TreeItem nodeId="13" label="Manage 3 sheet.xlsx" />
                <TreeItem nodeId="14" label="Metamorphosis-jackson.epub" />
                <TreeItem nodeId="15" label="Work_Smarts.epub" />
                <TreeItem nodeId="16" label="Sub-folder1">
                    <TreeItem nodeId="6" label="Sub-folder1-child">
                        <TreeItem nodeId="17" label="Content,_views_and_purchasing.xlsx" />
                        <TreeItem nodeId="18" label="doc4.txt" />
                        <TreeItem nodeId="19" label="doc5.txt" />
                        <TreeItem nodeId="20" label="doc6.txt" />
                        <TreeItem nodeId="21" label="Dorsey.jpg" />
                        <TreeItem nodeId="22" label="RIAT_2015-visitor-information-guide.pdf" />
                    </TreeItem>
                    <TreeItem nodeId="23" label="Content,_views_and_purchasing.xlsx" />
                    <TreeItem nodeId="24" label="doc4.txt" />
                    <TreeItem nodeId="25" label="doc5.txt" />
                    <TreeItem nodeId="26" label="doc6.txt" />
                    <TreeItem nodeId="27" label="Dorsey.jpg" />
                    <TreeItem nodeId="28" label="RIAT_2015-visitor-information-guide.pdf" />
                </TreeItem>
                <TreeItem nodeId="3" label="Sub-folder2">
                    <TreeItem nodeId="29" label="2013.07.24_User_web_app_spec.docx" />
                    <TreeItem nodeId="30" label="2015.01.29_Floor_plan_19_Kings_Avenue.pptx" />
                    <TreeItem nodeId="31" label="Content_views.xltx" />
                    <TreeItem nodeId="32" label="doc7.txt" />
                    <TreeItem nodeId="33" label="doc8.txt" />
                    <TreeItem nodeId="34" label="doc9.txt" />
                </TreeItem>
                <TreeItem nodeId="4" label="Sub-folder3">
                    <TreeItem nodeId="35" label="20110916_-_Abacus_Model_Monthly_XLSM.xlsm" />
                    <TreeItem nodeId="36" label="Career_Anchors_Learning_Technologies_Presentation.pptx" />
                    <TreeItem nodeId="37" label="doc10.txt" />
                    <TreeItem nodeId="38" label="doc11.txt" />
                    <TreeItem nodeId="39" label="doc12.txt" />
                    <TreeItem nodeId="40" label="Obligors.xlsx" />
                </TreeItem>
                <TreeItem nodeId="5" label="Sub-folder4">
                    <TreeItem nodeId="41" label="bii_2015_investment_outlook_us.pdf" />
                    <TreeItem nodeId="42" label="BlackRock_2015_Investment_Outlook_US.pdf" />
                    <TreeItem nodeId="43" label="doc13.txt" />
                    <TreeItem nodeId="44" label="doc14.txt" />
                    <TreeItem nodeId="45" label="doc15.txt" />
                    <TreeItem nodeId="46" label="ハルコさんの彼氏.epub" />
                </TreeItem>
            </TreeItem>
            </TreeView>
                
                : null
            }
      
        
            {/* <Tree/> */}
            <Footer />
        </div>
        
        
    )
}