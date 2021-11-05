import * as _ from 'lodash/object';
import * as _lang from 'lodash/lang';

export const getLen = (field, domain)=>{
    let len = _.get(field, 'len');
    if (_lang.isNumber(len) && len === 0) {
        len =  _.get(domain, 'len', '');
    } else if (_lang.isString(len) && len.length === 0) {
        len = _.get(domain, 'len', '');
    }
    return len;
}

export const getScale = (field, domain)=>{
    let len = _.get(field, 'scale');
    if (_lang.isNumber(len) && len === 0) {
        len =  _.get(domain, 'scale', '');
    } else if (_lang.isString(len) && len.length === 0) {
        len = _.get(domain, 'scale', '');
    }
    return len;
}
