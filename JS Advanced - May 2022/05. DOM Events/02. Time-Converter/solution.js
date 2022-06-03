function attachEventsListeners() {
    let allElements = document.getElementsByTagName('main')[0];
    allElements.addEventListener('click', convert)
    function convert(e) {
        if (e.target.type == 'button') {
            let unit = e
                .target
                .parentElement
                .querySelector('label')
                .textContent;
            unit = unit.substring(0, unit.length - 2);
            let days = document.getElementById('days').value;
            let hours = document.getElementById('hours').value;
            let minutes = document.getElementById('minutes').value;
            let seconds = document.getElementById('seconds').value;
            [days, hours, minutes, seconds] = [+days, +hours, +minutes, +seconds]
            switch (unit) {
                case 'Days':
                    hours = days * 24;
                    minutes = hours * 60;
                    seconds = minutes * 60;
                    break;
                case 'Hours':
                    days = hours / 24;
                    minutes = hours * 60;
                    seconds = minutes * 60;
                    break;
                case 'Minutes':
                    hours = minutes / 60;
                    days = hours / 24;
                    seconds = minutes * 60;
                    break;
                case 'Seconds':
                    minutes = seconds / 60
                    hours = minutes / 60;
                    days = hours / 24;
                    break;
                default:
                    break;
            }
            document.getElementById('days').value = days;
            document.getElementById('hours').value = hours;
            document.getElementById('minutes').value = minutes;
            document.getElementById('seconds').value = seconds;
        }
    }
}