import React, { useState } from 'react';
import { Switch as SwitchRouter, Route } from 'react-router-dom';
import DashBoard from '../pages/Dashboard/Dashboard';
import LabeledSwitch from '../UI/LabeledSwitch';

import { Container } from '@material-ui/core';
import { grey, indigo } from '@material-ui/core/colors';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
    const [darkState, setDarkState] = useState(false);
    const mainPrimaryColor = darkState ? grey[500] : indigo[500];
    const mainSecondaryColor = darkState ? grey[900] : indigo[800];
    const palletType = darkState ? 'dark' : 'light';
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        },
        overrides: {
            MuiContainer: {
                root: {
                    backgroundColor: darkState ? grey[800] : indigo[100]
                }
            }
        }
    });
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };
    const themeLables = {
        left: <WbSunnyRoundedIcon style={{ fill: '#ff8f00' }} />,
        right: <NightsStayRoundedIcon style={{ fill: '#ffeb3b' }} />
    };
    return (
        <ThemeProvider theme={darkTheme}>
            <Container maxWidth="md" className="wrapper">
                <SwitchRouter>
                    <Route exact path="/">
                        <DashBoard />
                    </Route>
                    <Route path="/settings">
                        <div>Settings</div>
                    </Route>
                    <Route path="*">
                        <div>No match</div>
                    </Route>
                </SwitchRouter>
            </Container>
            <LabeledSwitch
                checked={darkState}
                color="primary"
                onToggle={handleThemeChange}
                labels={themeLables}
            />
        </ThemeProvider>
    );
}

export default App;
