/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Button, ButtonGroup, Grid, IconButton, Link, makeStyles, Snackbar, TextField, Typography } from "@material-ui/core";
import { Add, ArrowBack, ArrowForward, ArrowRightAlt, GetApp } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "3em 0",
        padding: "3em",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "10px"
    },
    stepInstruction: {
        marginBottom: "1em",
        textAlign: "center"
    },
    launcherBox: {
        position: "relative",
        marginLeft: "0%"
    },
    loginContainer: {
        height: "100%"
    },
    loginInput: {
        margin: "0.75rem"
    },
    addButton: {
        position: "absolute",
        borderRadius: "0",
        backgroundColor: theme.palette.primary.dark,
        bottom: "25px",
        left: "25px",
        width: "50px",
        height: "40px"
    },
    instanceTypeBox: {
        position: "absolute",
        top: "50px",
        left: "200px"
    },
    instanceInput: {
        position: "absolute",
        width: "500px",
        top: "200px",
        left: "100px",
    },
    instanceButton: {
        position: "absolute",
        borderRadius: "0",
        width: "70px",
        height: "50px",
        bottom: "25px",
        right: "25px"
    },
    launchInstanceBox: {
        position: "absolute",
        top: "100px",
        left: "50px",
        borderRadius: "5px",
        cursor: "pointer"
    },
    stepButtons: {
        marginTop: "2em"
    },
    connectText: {
        fontSize: "20px"
    }
}));

const Wizard = () => {
    const classes = useStyles();

    // eslint-disable-next-line no-unused-vars
    const [currentStep, setCurrentStep] = React.useState(0);
    const [copied, setCopied] = React.useState(false);

    return (
        <div className={classes.root}>
            <Grid
                direction="column"
                justify="center"
                alignItems="center"
            >
                {currentStep == 0 ? (
                    <div>
                        <div className={classes.stepInstruction}>
                            <Typography variant="h4">Installiere und Starte den GDLauncher.</Typography>
                            <Typography variant="h6">Ausnahme: Du hast einen Minecraft-Account mit Microsoft-Login</Typography>
                        </div>
                        <Grid
                            className={classes.stepInstruction}
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                        >
                            <Link href="https://github.com/gorilla-devs/GDLauncher/releases/download/v1.0.11/GDLauncher-win-setup.exe" rel="noreferrer" target="_blank">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    startIcon={<GetApp />}
                                >
                                    Windows
                                </Button>
                            </Link>
                            <Link href="https://github.com/gorilla-devs/GDLauncher/releases/download/v1.0.11/GDLauncher-mac-setup.dmg" rel="noreferrer" target="_blank">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    startIcon={<GetApp />}
                                >
                                    Mac OS
                                </Button>
                            </Link>
                            <Link href="https://github.com/gorilla-devs/GDLauncher/releases/download/v1.0.11/GDLauncher-linux-setup.AppImage" rel="noreferrer" target="_blank">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    startIcon={<GetApp />}
                                >
                                    Linux
                                </Button>
                            </Link>
                        </Grid>
                        <Typography
                            className={classes.stepInstruction}
                            align="center"
                            variant="body1"
                        >
                            Probleme bei der Installation?&nbsp;
                            <Link
                                href="https://github.com/gorilla-devs/GDLauncher/releases/download/v1.0.11/GDLauncher-win-portable.zip"
                                rel="noreferrer"
                                target="_blank"
                                color="inherit"
                                style={{ textDecoration: "underline" }}
                            >
                                Probiere es mit der portablen Version!
                            </Link>
                        </Typography>
                        <Typography
                            align="center"
                            variant="h6"
                        >
                            Du hast einen Minecraft-Account mit Microsoft-Konto?
                        </Typography>
                        <Typography
                            align="center"
                            variant="body1"
                        >
                            Solltest du einen neuen Minecraft-Account haben,<br />
                            der nur mit einem Microsoft-Konto funktioniert,<br />
                            dann lade&nbsp;
                            <Link
                                href="https://emkace.de/files/Belastend-1.16.4_manual.zip"
                                color="inherit"
                                style={{ textDecoration: "underline" }}
                            >
                                diese Datei herunter
                            </Link>
                            &nbsp;und folge der beigelegten Anleitung.
                        </Typography>
                    </div>
                ) : null}
                {currentStep == 1 ? (
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography
                            className={classes.stepInstruction}
                            variant="h4"
                        >
                            Logge dich mit deinen Minecraft Account-Daten ein.
                        </Typography>
                        <Box
                            className={classes.launcherBox}
                            key="launcherBox"
                            width={700}
                            height={500}
                            bgcolor="secondary.main"
                        >
                            <Box
                                key="loginBox"
                                width={200}
                                height={500}
                                bgcolor="primary.main"
                            >
                                <Grid
                                    className={classes.loginContainer}
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <TextField
                                        className={classes.loginInput}
                                        label="E-Mail"
                                        variant="outlined"
                                        disabled={true}
                                    />
                                    <TextField
                                        className={classes.loginInput}
                                        label="Passwort"
                                        variant="outlined"
                                        disabled={true}
                                    />
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                ) : null}
                {currentStep == 2 ? (
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography
                            className={classes.stepInstruction}
                            variant="h4"
                        >
                            Klicke unten Links auf das "+"-Symbol
                        </Typography>
                        <Box
                            className={classes.launcherBox}
                            key="launcherBox"
                            width={700}
                            height={500}
                            bgcolor="secondary.main"
                        >
                            <IconButton
                                className={classes.addButton}
                                color="initial"
                                onClick={() => setCurrentStep(currentStep + 1)}
                            >
                                <Add />
                            </IconButton>
                        </Box>
                    </Grid>
                ) : null}
                {currentStep == 3 ? (
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography
                            className={classes.stepInstruction}
                            variant="h4"
                        >
                            Klicke oben auf "Import Zip"
                        </Typography>
                        <Box
                            className={classes.launcherBox}
                            key="launcherBox"
                            width={700}
                            height={500}
                            bgcolor="secondary.main"
                        >
                            <ButtonGroup
                                className={classes.instanceTypeBox}
                                color="primary"
                                variant="contained"
                            >
                                <Button disabled>Vanilla</Button>
                                <Button disabled>Twitch</Button>
                                <Button onClick={() => setCurrentStep(currentStep + 1)}>Import Zip</Button>
                            </ButtonGroup>
                        </Box>
                    </Grid>
                ) : null}
                {currentStep == 4 ? (
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <div className={classes.stepInstruction}>
                            <Typography variant="h4">Füge den Link ein und klicke auf den Pfeil unten rechts.</Typography>
                            <Typography variant="h6">Tipp: Wenn du den Link anklickst, dann kopiert er sich von alleine</Typography>
                        </div>
                        <Box
                            className={classes.launcherBox}
                            key="launcherBox"
                            width={700}
                            height={500}
                            bgcolor="secondary.main"
                        >
                            <ButtonGroup
                                className={classes.instanceTypeBox}
                                color="primary"
                                variant="contained"
                            >
                                <Button disabled>Vanilla</Button>
                                <Button disabled>Twitch</Button>
                                <Button>Import Zip</Button>
                            </ButtonGroup>
                            <TextField
                                className={classes.instanceInput}
                                variant="outlined"
                                value="https://emkace.de/files/Belastend-1.16.4.zip"
                                inputProps={{
                                    readOnly: true
                                }}
                                onClick={(e) => {
                                    e.target.focus();
                                    e.target.select();
                                    document.execCommand("copy");
                                    document.getSelection().removeAllRanges();
                                    setCopied(true);
                                }}
                            />
                            <IconButton
                                className={classes.instanceButton}
                                onClick={() => setCurrentStep(currentStep + 1)}
                            >
                                <ArrowRightAlt fontSize="large" />
                            </IconButton>
                        </Box>
                        <Snackbar open={copied} autoHideDuration={6000} onClose={() => setCopied(false)}>
                            <Alert onClose={() => setCopied(false)} severity="success" color="info">
                                Adresse kopiert! Mit STRG+V einfügen
                            </Alert>
                        </Snackbar>
                    </Grid>
                ) : null}
                {currentStep == 5 ? (
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <div className={classes.stepInstruction}>
                            <Typography variant="h4">Du kannst das Modpack nun starten!</Typography>
                            <Typography variant="h6">Dafür musst du einfach nur die "Belastend" Instanz anklicken</Typography>
                        </div>
                        <Box
                            className={classes.launcherBox}
                            key="launcherBox"
                            width={700}
                            height={500}
                            bgcolor="secondary.main"
                        >
                            <Box
                                className={classes.launchInstanceBox}
                                key="launchInstanceBox"
                                width={180}
                                height={100}
                                bgcolor="primary.main"
                                onClick={() => setCurrentStep(currentStep + 1)}
                            >
                                <Typography
                                    variant="h6"
                                    align="center"
                                    style={{ padding: "20%" }}
                                >
                                    Belastend
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ) : null}
                {currentStep == 6 ? (
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <div className={classes.stepInstruction}>
                            <Typography variant="h4">Mit dem Server verbinden!</Typography>
                            <Typography variant="h6">Stelle vorher sicher, dass du auf der Whitelist stehst.</Typography>
                        </div>
                        <Typography
                            className={classes.connectText}
                            align="center"
                            variant="body1">
                            <p>Nehme deine Einstellungen vor, wie es dir beliebt und<br />
                            installiere auch gerne ein Resource Pack,<br />
                            falls du das möchtest (Optifine ist bereits mitinstalliert).</p>
                            <p>Die Server-Adresse lautet:<br />
                                <code>mc.emkace.de</code>
                            </p>
                            <p>Ich wünsche dir viel Spaß!</p>
                        </Typography>
                    </Grid>
                ) : null}
                <Grid
                    className={classes.stepButtons}
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={currentStep == 0}
                        startIcon={<ArrowBack />}
                        onClick={() => setCurrentStep(currentStep - 1)}
                    >
                        Zurück
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={currentStep == 6}
                        endIcon={<ArrowForward />}
                        onClick={() => setCurrentStep(currentStep + 1)}
                    >
                        Weiter
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Wizard;