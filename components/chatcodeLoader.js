const loadChatCode = (callback) => {
    // console.log('loadChatCode')
    const existingScript = document.getElementById('chatcode');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = '//code.tidio.co/m5xsaowjltibdxpvjlsdku1e9iiv0mge.js';
        script.id = 'chatcode';
        script.async = false;
        // script.async = true;
        // document.body.appendChild(script);
        document.body.append(script);
        script.onload = () => {
            if (callback) callback();
        };
    }
    if (existingScript && callback) callback();
};
export default loadChatCode;

// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }
// loadScript("//code.tidio.co/m5xsaowjltibdxpvjlsdku1e9iiv0mge.js");