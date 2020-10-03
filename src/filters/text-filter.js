import {truncateWord} from "../common/helpers";

export const capitalize = function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}


export const slugify = function (value) {
    value = value.replace(/^\s+|\s+$/g, ''); // trim
    value = value.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return value;
};

export const truncate = (str, count, endWith) => truncateWord(str, count, endWith);