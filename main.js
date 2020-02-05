var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


const sr = ScrollReveal({
   opacity:0,
    distance: '100px',
    reset: true
});

sr.reveal('#name',{
    duration: 2000,
    origin: 'top',
    delay: 100,
    distance: '50px'
});
sr.reveal('#role',{
    duration: 4000,
    origin: 'top',
    delay: 2000,
    distance: '0px'
});

sr.reveal('#home-img',{
duration: 2000,
delay: 800,
origin: 'bottom',
});

sr.reveal('#text1',{
duration: 2000,
delay: 200,
origin:'left'
});

sr.reveal('#text2',{
    duration: 2000,
    distance: '50px',
delay: 1200,
origin:'right'
});

sr.reveal('#index-quote1',{
    duration: 2000,
delay: 200,
origin:'left'
});

sr.reveal('#index-quote2',{
    duration: 2000,
delay: 1200,
distance: '50px',
origin:'right'
});

