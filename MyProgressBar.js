(function () {

    var bars = [];

    // This is simple progress bar
    function MyProgressBar(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('element should be HTMLElement');
        }
        this._element = element;

        if (element.hasAttribute("data-to")) {
            this.setValue(element.getAttribute('data-to'));
        }

        else {
            this.setValue(0);
        }

    }

    // SetValue Method
    MyProgressBar.prototype.setValue = function (value) {
        value = parseInt(value, 10);
        if (value > 100 || value < 0) {
            throw new Error('value unexpected value');
        }
        var line = this._element.querySelector('.line');
        line.style.width = value + '%';
    };

    if(!window.MyProgressBar) {
        window.MyProgressBar = MyProgressBar;
    }


    if(!window.ProgressBarInstances) {
        window.ProgressBarInstances = bars;
    }

    document.addEventListener( 'DOMContentLoaded', function () {
        document.querySelectorAll('.my-bar').forEach((bar)=> {
            bars.push(new MyProgressBar(bar));            
        }); 
    });
    


})();
