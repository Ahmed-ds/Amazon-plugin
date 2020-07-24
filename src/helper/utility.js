const createDOMElement = (id, parent, innerHtml, styleObj) => {
    const container = document.createElement('div');
    container.setAttribute("id", id);
    container.innerHTML = innerHtml;
    Object.keys(styleObj).forEach(function(key,index) {
        container.style[key] = styleObj[key];
    });
    if (parent) {
        parent.appendChild(container);
    } else {
        document.body.appendChild(container);
    }
}

export const createAWSCCPContainer = (id) => {
    const styleProps = {
        width: '400px',
        height: '0px',
        display: 'block',
        margin: 'auto',
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        transition: 'height .5s ease-in-out'
    }
    createDOMElement(id, null, '', styleProps);
}

export const createAWSCCPContainerToggler = (containerId) => {
    const styleProps = {
        display: 'block',
        color: '#ffffff',
        backgroundColor: '#4a4a4a',
        fontSize: '22px',
        padding: '8px',
        cursor: 'pointer',
        position: 'absolute',
        top: '-49px',
        right: '2px',
        borderTopLeftRadius: '8px',
        borderTop: '2px solid rgb(102, 102, 102)',
        borderLeft: '2px solid rgb(102, 102, 102)'
    }
    createDOMElement(`${containerId}-toggler`, document.getElementById(containerId), 'Open Call Center', styleProps);
}

export const updateTogglerText = innerText => {
    const handle = document.getElementById('aws-ccp-container-toggler');
    if (handle) {
        handle.innerHTML = `${innerText} Call Center` ;
    }
}