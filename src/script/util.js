export default class Util {
    /**
     * Returns the given element.
     * 
     * @param {String|HTMLElement} el 
     * @returns {HTMLElement}
     */
    static getElement(el) {
        if(typeof el === 'string') {
            return document.querySelector(el);
        }

        return el;
    }

    /**
     * Creates a event and initalizes it.
     * 
     * @param {String} name
     * @returns {Event} 
     */
    static createEvent(name) {
        let event = document.createEvent('HTMLEvents') || document.createEvent('event');
        event.initEvent(name, false, true);
        return event;
    }

    /**
     * Attaches the events to the element.
     * 
     * @param {HTMLElement} el
     * @param {String[]} events
     * @param {EventListener} callback
     */
    static addEventListener(el, events, callback) {
        for(let i in events) {
            el.addEventListener(events[i], callback, true);
        }
    }

    /**
     * Removes the events from the element.
     * 
     * @param {HTMLElement} el
     * @param {String[]} events
     * @param {EventListener} callback
     */
    static removeEventListener(el, events, callback) {
        for(let i in events) {
            el.removeEventListener(events[i], callback, true);
        }
    }

    /**
     * Attaches the events to the element for once.
     * 
     * @param {HTMLElement} el
     * @param {String[]} events
     * @param {Function} callback
     */
    static addEventListenerOnce(el, events, callback) {
        let cb = e => {
            this.removeEventListener(el, events, cb);
            callback(e);
        };

        this.addEventListener(el, events, cb);
    }

    /**
     * Adds the given css class to the given element.
     * 
     * @param {HTMLElement} el 
     * @param {String} cname 
     */
    static addClass(el, cname) {
        if(el.classList) {
            el.classList.add(cname);
        } else {
            el.setAttribute('class', `${el.getAttribute('class')} ${cname}`);
        }
    }

    /**
     * Removes the given css class from the given element.
     * 
     * @param {HTMLElement} el 
     * @param {String} cname 
     */
    static removeClass(el, cname) {
        if(el.classList) {
            el.classList.remove(cname);
        } else {
            el.setAttribute('class', el.getAttribute('class').replace(cname, ' '));
        }
    }

    /**
     * Checks an element if it contains another element.
     * 
     * @param {HTMLElement} p
     * @param {HTMLElement} c
     * @returns Boolean
     */
    static contains(p, c) {
        if(p.contains) {
            return p.contains(c);
        } else {
            while(c = c.parentNode) {
                if(c === p) {
                    return true;
                }
            }
            return false;
        }
    }

    /**
     * Checks the browser if it is mobile.
     * 
     * @returns {Boolean}
     */
    static isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    /**
     *  Renders a number with given digits as string.
     * 
     * @param {Number} n
     * @param {Number} d
     * @param {String} p
     * @returns {String}
     */
    static renderNumber(n, d=2, p='0') {
        var s = n.toString();
        while(s.length < d) {
            s = p + s;
        }

        return s;
    }

    /**
     * Gets day count of a year.
     * 
     * @param {Number} m
     * @param {Number} y
     * @returns {Number}
     */
    static getDayCount(m, y) {
        switch(m) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                if(this.isLeapYear(y)) {
                    return 29;
                }

                return 28;
        }
    }

    /**
     * Checks the given year whether it is a leap year or not.
     * 
     * @param {Number} y
     * @returns {Boolean} 
     */
    static isLeapYear(y) {
        if(y % 4 == 0) {
            return true;
        }

        return false;
    }

    /**
     * Gets start and end year of the given year.
     * 
     * @param {Number} y
     * @returns {{start:Number, end:Number}} 
     */
    static getStartEndYear(y) {
        var s = y;
        while(s % 10 != 0) {
            s -= 1;
        }
        return {
            start: s,
            end: s + 10
        };
    }
}

Util.MOUSE_DOWN = Util.isMobile() ? 'touchstart' : 'mousedown';
Util.MOUSE_MOVE = Util.isMobile() ? 'touchmove' : 'mousemove';
Util.MOUSE_UP = Util.isMobile() ? 'touchend' : 'mouseup';
Util.ANIMATION_END = ['webkitAnimationEnd', 'mozAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd', 'animationend'];
Util.TRANSITION_END = ['webkitTransitionEnd', 'oTransitionEnd', 'otransitionend', 'MSTransitionEnd', 'transitionend'];
Util.WHEEL_EVENTS = ['wheel', 'mousewheel', 'DOMMouseScroll'];