 import { makeStyles } from "@mui/styles";

 export default makeStyles( () => ({
      root: {
        display: 'flex',
        height: '100%',
        // backgroundColor: 'rgb(30, 30, 30)'
      },
      toolbar: {
        height: '70px',
        // backgroundColor: 'black'
      },
      content: {
        flexGrow: 1,
        padding: '2em',
        // backgroundColor: 'red'
      }
 }));