# IgniteFleet App

To run the project, you need to perform some pre-build steps to install the necessary dependencies for Android and iOS.

1. Start by running the following command to install Android and iOS dependencies:
```bash
npx expo prebuild
```

2. For iOS, you also need to install the dependencies using CocoaPods. Run the following command:
```bash
npx pod-install
```

3. When running the project for the first time, you need to build it on a device or emulator. Use one of the following commands based on your target platform:
```bash
npx expo run:android
```
```bash
npx expo run:ios
```

Please make sure you have the required build tools, emulators, and simulators set up for Android and iOS development.
