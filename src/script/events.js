import Util from './util';

export const CHANGE = Util.createEvent('wdp.change');
export const OPEN = Util.createEvent('wdp.open');
export const CLOSE = Util.createEvent('wdp.close');
export const SAVE = Util.createEvent('wdp.save');
export const CANCEL = Util.createEvent('wdp.cancel');
export const DESTROY = Util.createEvent('wdp.destroy');