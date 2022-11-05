import { createRunOncePlugin, withAndroidStyles, AndroidConfig } from 'expo/config-plugins';

function setForceDarkModeToFalse(styles) {
    styles = AndroidConfig.Styles.assignStylesValue(styles, {
        add: true,
        parent: AndroidConfig.Styles.getAppThemeLightNoActionBarGroup(),
        name: `android:forceDarkAllowed`,
        value: "false",
    });

    return styles;
}

const withDisableForcedDarkModeAndroid = (config) => {
    return withAndroidStyles(config, (config) => {
        config.modResults = setForceDarkModeToFalse(config.modResults);
        return config;
    });
};

export default createRunOncePlugin(withDisableForcedDarkModeAndroid, 'disable-forced-dark-mode', '1.0.0');