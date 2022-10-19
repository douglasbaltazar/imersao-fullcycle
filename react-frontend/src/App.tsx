import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { Mapping } from "./components/Mapping";
import { SnackbarProvider } from 'notistack'
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3}>
                <CssBaseline />
                <Mapping />
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
