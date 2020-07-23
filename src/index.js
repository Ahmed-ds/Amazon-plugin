import { createAWSCCPContainer, createAWSCCPContainerToggler, updateTogglerText } from './helper/utility';
import { initCCP, callToNumber } from './helper/aws-streams-api';

const CCPWrapper = {
    init: function(config, onInit, onCallInit, onCallEnded) {
        console.log('Initializing AWS CCP Wrapper...');
        createAWSCCPContainer('aws-ccp-container');
        createAWSCCPContainerToggler('aws-ccp-container');
        const toggler = document.getElementById('aws-ccp-container-toggler');
        if (toggler) {
            toggler.addEventListener('click', () => {
                console.log("Toggle");
                const container = document.getElementById('aws-ccp-container');
                if (container && container.style && container.style.height === '0px') {
                    this.show();
                } else {
                    this.hide();
                }
            });
        }
        initCCP(document.getElementById('aws-ccp-container'), config, onInit, onCallInit, onCallEnded);
    },
    show: function() {
        const container = document.getElementById('aws-ccp-container');
        if (container) {
            container.style.height = '560px';
            updateTogglerText('Close');
        }
    },
    hide: function() {
        const container = document.getElementById('aws-ccp-container');
        if (container) {
            container.style.height = '0px';
            updateTogglerText('Open');
        }
    },
    call: function(number) {
        this.show();
        return callToNumber(number);
    }
};

export default CCPWrapper;

