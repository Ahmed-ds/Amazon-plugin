// import "amazon-connect-streams";

let bus;

export const initCCP = (containerElement, config, onInit, onCallInit, onCallEnded) => {
    // initialize the aws-ccp
    try{
        window.connect.core.initCCP(containerElement, config);
        bus = window.connect.core.getEventBus();
        bus.subscribe(window.connect.AgentEvents.INIT, () => {
        console.log("CCP Initiaalized...");
        onInit();
        });
        bus.subscribe(window.connect.ContactEvents.INIT, () => {
            console.log("Call initialized...");
            onCallInit();
        });
        bus.subscribe(window.connect.ContactEvents.ENDED, () => {
            console.log("Call ended...");
            onCallEnded();
        });
    } catch(e) {
        console.log("CCP init break!...");
        console.log(e);
    }
};

export const callToNumber = (number) => {
    return new Promise((res, rej) => {
        window.connect.agent(function(agent) {
            const endpoint = window.connect.Endpoint.byPhoneNumber(number)
            agent.connect(endpoint , {
                success : () => {
                    console.log("Success call!!!!!!");
                    res();
                },
                failure : (e) => {
                    console.log("Call failed!!!!!!!")
                    console.log(e);
                    rej(e);
                }
            });
        });
    });
}