//  import {alpha } from "@mui/material";
//   // import makeStyles from '@mui/styles/makeStyles';
//   import { makeStyles } from "@mui/styles";
// import { ThemeProvider,createTheme } from "@emotion/react";
// import card from '@mui/material';

// const useStyles =  makeStyles((theme) => ({
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
//   },
//   toolbar: {
//     display: 'flex', justifyContent: 'space-between',
//   },
// }));
// export default useStyles;

import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    chip:{
        margin : '5px 5px 5px 0',
    },
    subtitle: {
        display: 'flex' ,alignItems: 'center' ,justifyContent: 'space-between' ,marginTop: '10px'
    },
    spacing:{
        display:'flex', alignItems:'center',justifyContent:'space-between',
    },
}))