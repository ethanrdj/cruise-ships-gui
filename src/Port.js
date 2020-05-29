class Port {
    constructor(currentPort) {
        this.currentPort = currentPort;
    };
    setSail () {
        this.currentPort = "";
    };
};

module.exports = Port;