# To run the application you will need:

## Environment setup: https://reactnative.dev/docs/environment-setup

## 1. Set up the environment.

### 1.1. Node (v14 or newer).

### 1.2. Java Development Kit (java v11 or newer), JDK v8+.

### 1.3. Android development environment (Android Studio, Android SDK, configure the ANDROID_SDK_ROOT, ).

## 2. Run application.

### 2.1. Install all dependencies:

### `npm install`

### 2.2. Start Metro bundler:

### `npx react-native start`

### 2.3. Start application:

### `npx react-native run-android`

#### Description:

On the first load, you will see the spinner while the server is being requested. If the server returns an error, you will see an error message on the screen (ErrorBundler).
If there is no error, then after a successful request you will get 30 random images, any of which can be opened by simply clicking on it once. Next, a full size screen will open and you will see a back button to return to the gallery screen.
You can query by word and the server will return up to 30 images for that query. If there are none or the request is incorrect, then the server will return 30 random images (as unsplash does).

Below are screenshots of the application (only on Android OS).

#### Screenshots:

1. https://prnt.sc/r-7ad3tOxa5B
2. https://prnt.sc/1GgaEm6rElUY
3. https://prnt.sc/Zv7u0gAbr2SG
4. https://prnt.sc/tfR31JZP8jMZ
5. https://prnt.sc/nV0VIhQ7YfDR
6. https://prnt.sc/754niH8oS-q1
7. https://prnt.sc/uTap2m47foiP
8. https://prnt.sc/1mbNAOFDWqvM
