import React from 'react';
import 'typeface-roboto';
import {FeedList} from "../feed/feedList.component";
import {SlackerAppBar} from "./appBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    typography: {
        useNextVariants: true,
    },
});

export class Main extends React.Component {
    componentDidMount(){
        document.title = "Slacker"
    }
    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <SlackerAppBar></SlackerAppBar>
                    <FeedList feedUrl={'/api/reddit/feed?subreddit=funny&channel=hot'}></FeedList>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}