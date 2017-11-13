# react-native-skeleton

This is my skeleton for my react-native projects. Have fun.

## Rename

Use [react-native-rename](https://github.com/junedomingo/react-native-rename) to rename this project.

## First steps

```bash
  git clone --depth 1 github.com:patlux/react-native-skeleton.git <your-new-project-name>
  react-native-rename <your-new-project-name>
```

Change the name in `index.js` to your new project name.
Go to `android/` and run `gradle wrapper`.

You need to change/remove the `KEYSTORE_PROPERTIES` in the `android/gradle.properties` file as you like.

## Project

The code will be formatted with [prettier](https://github.com/prettier/prettier) before every git commit with the help of [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).

### Android

- Using proguard for debug and release builds.
- Using latest stable android sdk build tools.

### iOS

- Nothing to mention yet.

## TODO

- Use [flow](https://github.com/facebook/flow)

## Troubleshooting

### Could not find or load main class org.gradle.wrapper.GradleWrapperMain

Run this in your `android/`-folder:

```
gradle wrapper
```

## Contributions

If you have any suggestions for improvements or issues with this skeleton, let me know :)
