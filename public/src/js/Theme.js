import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, cyan700, pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack, blueGrey900 } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

export default getMuiTheme({
    fontFamily: 'YuGothic, Roboto, sans-serif',
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: white,
        alternateTextColor: white,
        canvasColor: blueGrey900,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
});