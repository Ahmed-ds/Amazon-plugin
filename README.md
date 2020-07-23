# Scania Wrapper of Amazon Connect Contact Conntrol Panel (CCP)  Plugin
This is actually a wrapper of amazon connect contact control panel (ccp). It's purpose is to provide easy to use interface in order to integrate CCP UI into your own site without writing much code. 
You will simply include this in your site and when you initialize this will create a `<div id="aws-ccp-container"></div>` container for aws ccp and append this at the end of your pages body.

## Usage
It's usage is very basic you need to include this in your project

`npm install aws-ccp`

Now where you want to use this just use as follow

```
import CCPWrapper from 'aws-ccp';

const instanceURL = https://{your-instance-name}.awsapps.com/connect/ccp-v2/
const config = {
    ccpUrl: instanceURL,
    loginPopup: true,
    loginPopupAutoClose: true,
    region: 'eu-central-1',
    softphone: {
        allowFramedSoftphone: true,
        disableRingtone: false,
        ringtoneUrl: './ringtone.mp3'
    }
}

CCPWrapper.init(config, onInit, onCallInit, onCallEnded);

```

You can call init when ever you want. This will initialize and redirect user to new tab to authenticate user. On success tab will close automatically and user comes back to own page.

You can view config details on original documentation of amazon streams
[amazon-connect-streams](https://github.com/amazon-connect/amazon-connect-streams)

- `onInit` (callback will be called on initial agent connection establish)
- `onCallInit` (callback will be called on call initialized, not specifically on call connected with customer / end user)
- `onCallEnded` (callback will be called on call ended, whether automatically or manually by agent ot cms user)


### Available Methods

- `init`
- `call`
- `show`
- `hide`

### How to trigger call

```

CCPWrapper.call(number).then(res => {
    // On successfully call triggered this will be called
}).catch((error) => {
    // If any error occurs during call trigger
})

```
