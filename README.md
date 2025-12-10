## Requirements

| Name                          | Version    |
|-------------------------------|------------|
| [Node.js](https://nodejs.org) | v20.17.0+  |
| NPM                           | v10.8.2+   |
| Android Studio                | v2024.2.0+ |
| XCode                         | v16.0+     |

## How to run

### Create a `.env` file in the root of the project and add the following:

| name                 | value  | required |
|----------------------|--------|----------|
| REACT_APP_SENTRY_DSN | secret | no       |

### Install the dependencies:

```bash
npm install
#or 
yarn install
```

### Run the development WEB server:

```bash
npm run web
# or
yarn web
```
#### Development server will run on [http://localhost:3000](http://localhost:3000)


### Run the development ANDROID server:

```bash
npm run android
# or
yarn android
```
#### Development app will run on the Android Emulator/device


### Run the development IOS server:

```bash
npm run ios
# or
yarn ios
```
#### Development app will run on the IOS Emulator/device

## How to run tests

```bash
npm run test
#or
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://callstack.github.io/react-native-testing-library/docs/start/intro) for more
information.

## How to deploy with Codemagic
1. Rename code codemagic.yaml.example to codemagic.yaml
2. Follow the [React Native](https://docs.codemagic.io/yaml-quick-start/building-a-react-native-app/) guide to configure your project and update the codemagic.yaml file.
3. Push the updated file to the repository.
4. Signup/Login to [Codemagic](https://codemagic.io/). [how to signup](https://docs.codemagic.io/getting-started/signup/)
5. [Create](https://codemagic.io/apps) a new project and select the repository where the project is located.
6. Select the branch you want to build and click on the start new build button.
7. The build will start and you can monitor the build progress in the build logs.
8. Once the build is successful, you can download the APK file and install it on your device.
## Libs/API Documentation

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- This project uses [file-based routing](https://docs.expo.dev/router/introduction)
- [Codemagic documentation](https://docs.codemagic.io/yaml-quick-start/codemagic-sample-projects/): Codemagic deployment documentation


