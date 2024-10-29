import { Appearance } from 'react-native';
const colorScheme = Appearance.getColorScheme();


export default color = {
    PrimaryBlue: '#009CDC',
    PrimaryDarkBlue: "#0646A4",
    SecondaryLightBlue: '#70CDF2',
    MidGray: '#989898',
    DarkGray: '#181818',
    Background_Blue: 'D4F1FD',
    LightBG: '#F9F9F9',
    LightGray: '#E3E3E3',
    Light_Blue: '#70CDF2',
    midLightBlue: '#D4F1FD',
    Dark_Blue: '#0646A4',
    Business_Name_Color: "#648eaa",
    Background_Color: "white",
    Slogan_Color: "#B19DD0",
    Icon_Color: "#989898",
    Quaternary_Color: "#35185A",
    primary_color : colorScheme == 'dark' ?  '#0091EA':'#0091EA', //blue
    dark_primary_color : colorScheme == 'dark' ?  '#0068A8':'#0068A8', //blue
    primary_color_opacity : '#0091EAD1', //blue
    black_color  : '#0e0e0e',
    green_color : '#0D842B',
    text_light_color : '#575757', //light-grey
    border_light_color : '#EFEFEF',
    light_color_opacity : '#EFEFEF71',
    border_color : '#b0b0b0',
    base_color : '#ffffff', //white
    popup_background: "#393939ad",
    light_gray: '#d0d0d0',
    dark_grey: '#5a6667',
    danger: "#db0000",
    transparent: '#00000000',
    text_dark: '#1D3947',
    text_light: '#5F636C',
    background_color_dark: '#007DCAA8',
    background_color_light: '#D3E2E7',
    cardBackground: '#E8EFF1',
    highlightColor: '#E6F2F6',
    gradientColor1: 'rgba(177, 213, 226, 0.88)',
    gradientColor2: '#489FD4',
    gradientColor3: '#268BC8',
    light_yellow_background: "#EBFAE3",
    yellow_background: "#FDF6B2",
    text_dark_brown: "#8E4B10",
    border_outline: "#0074BB",
    splash_bg: "#E8EFF1"
}