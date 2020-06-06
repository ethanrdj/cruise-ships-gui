(function exportController() {
class Controller {
    constructor () {
        this.initialiseSea()
    };

    initialiseSea() {
        const backgrounds = [
            './images/water0.png',
            './images/water1.png',
        ];
        let backgroundIndex = 0;
        window.setInterval(() => {
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            backgroundIndex += 1;
          }, 1000);
    };

    renderPorts(ports) {
        const portsElement = document.querySelector('#ports');
        portsElement.style.width = '0px';
        
        ports.forEach((port, index) => {
          const newPortElement = document.createElement('div');
          newPortElement.className = 'port';

          newPortElement.dataset.portName = port.name; // this and the line below will display as:
          newPortElement.dataset.portIndex = index; // <div class="port" data-port-name="New York City" data-port-index="0"></div>

          portsElement.appendChild(newPortElement);

          const portsElementWidth = parseInt(portsElement.style.width, 10);
          portsElement.style.width = `${portsElementWidth + 256}px`;
        });
    };

    renderShip(ship) {
      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`)

      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLef - 32}px`;
    };
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());