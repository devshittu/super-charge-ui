import * as psl from "psl";
import {API_SOURCE_LOGO_FETCHER_URL} from "./config";
import {
    MA_ASSET_RESPONSE_TYPES_ERROR,
    MA_ASSET_RESPONSE_TYPES_SUCCESS,
    MA_ASSET_RESPONSE_TYPES_TIMEOUT
} from "./constants.type";

export var array_difference = function(array_one, array_two){
    // let array_one = [1, 3, 4, 5]
    // let array_two = [1, 2, 5, 6, 7]
    if (!(Array.isArray(array_one) && array_one.length) || !(Array.isArray(array_two) && array_two.length)){

        throw new Error('An array is expected.'); //new TypeError('An array is expected.')
    }
    return array_one.filter(x => !array_two.includes(x)); // [3,4]

};
export var get_ids = array => {
    // let array_one = [1, 3, 4, 5]
    // let array_two = [1, 2, 5, 6, 7]
    // return array_one.filter(x => !array_two.includes(x)); // [3,4]
    // let getIds = array.map(x => x.id);
    if (!(Array.isArray(array) && array.length)){
        throw new Error('An array is expected.'); //new TypeError('An array is expected.')
    }
    return array.map(x => x.id) || [];

};
export var get_id = (array, code_name) => {

    if (!(Array.isArray(array) && array.length)){
        throw new Error('An array is expected.'); //new TypeError('An array is expected.')
    }
    console.log('array:// ', array, ' codename:// ', code_name)
    let findByCodeName = array.find((x) => {
        return ( x['code_name'] === code_name) ? x :null;
        // x.id
    });
    return findByCodeName['id'] || null;

};

export var isFunction = possibleFunction =>  typeof(possibleFunction) === typeof(Function);
// export var isObject = value =>  typeof(value) === typeof(Object);
export var isObject = item =>  (typeof(item) === 'object') && (item !== null);// && (!Array.isArray(item))
export var isString = value =>  typeof(value) === 'string';

const snakeToCamel = (str) => str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
        .replace('-', '')
        .replace('_', '')
);

export const toFieldName = str => snakeToCamel(str)+'Field';

export const parseURL = function (url) {

    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;

    // Let the browser do the work
    parser.href = url;

    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }

    console.log('origin:// ', parser.origin, )
    var parsed = psl.parse(parser.hostname);
    console.log(`parsed.domain://`, parsed.domain);
    return {
        protocol: parser.protocol,
        host: parser.host,
        // href: parser.href,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash,
        origin: parser.origin,
        domain: parsed.domain,
        domainName: (parsed.domain.split('.'))[0],
        domainLogo: API_SOURCE_LOGO_FETCHER_URL + parser.origin,
        uriend: pathPart(parser.origin, parser.href)
    };

};

export const  pathPart =  function (origin, href) {
    var pathPart = href.replace(origin, '');
    return pathPart;
};

export const  truncateWord =  function (str, wordCount, endWith = "&hellip;") {
    String.prototype.trunc = String.prototype.trunc || function (n, useWordBoundary){
        if (this.length <= n) {return this;}
        var subString = this.substr(0, n-1);

        return (useWordBoundary
            ? subString.substr(0, subString.lastIndexOf(' '))
            : subString ) + endWith;
    };
    return str.trunc(wordCount, true)
};


export const sanitizeStr = (str) => str.replace(/[^a-zA-Z0-9 ]/g, "");


// image avatar helper function
export const dataURItoBlob = function (dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    //Old Code
    //write the ArrayBuffer to a blob, and you're done
    //var bb = new BlobBuilder();
    //bb.append(ab);
    //return bb.getBlob(mimeString);

    //New Code
    return new Blob([ab], {type: mimeString});


}


export const validateImageUrl = async function (url, timeoutT) {
    return await new Promise(function(resolve, reject) {
        var timeout = timeoutT || 5000;
        var timer, img = new Image();
        img.onerror = img.onabort = function() {
            clearTimeout(timer);
            reject(MA_ASSET_RESPONSE_TYPES_ERROR);
        };
        img.onload = function() {
            clearTimeout(timer);
            resolve(MA_ASSET_RESPONSE_TYPES_SUCCESS);
        };
        timer = setTimeout(function() {
            // reset .src to invalid URL so it stops previous
            // loading, but doens't trigger new load
            img.src = "//!!!!/noexist.jpg";
            reject(MA_ASSET_RESPONSE_TYPES_TIMEOUT);
        }, timeout);
        img.src = url;
    });
}

/*

function record(url, result) {
    // document.body.innerHTML += "<span class='" + result + "'>" +
    //     result + ": " + url + "</span><br>";
    console.log('validate Image URL:  ' + result , `asset url: ${url}`);
}

function runImage(url) {
    validateImageUrl(url).then(record.bind(null, url), record.bind(null, url));
}


runImage("http://photos.smugmug.com/photos/344291068_HdnTo-Ti.jpg");

runImage("http://photos.smugmug.com/photos/invalid344291068_HdnTo-Ti.jpg");

runImage("http://www.cnn.com/foo1.jpg");

runImage("https://www.google.com/images/srpr/logo3w.png");

runImage("http://www.google.com:81/foo2.jpg");*/

// export const validateImageUrl = function (url, callback, timeout) {
//     timeout = timeout || 5000;
//     var timedOut = false, timer;
//     var img = new Image();
//     img.onerror = img.onabort = function() {
//         if (!timedOut) {
//             clearTimeout(timer);
//             callback(url, "error");
//         }
//     };
//     img.onload = function() {
//         if (!timedOut) {
//             clearTimeout(timer);
//             callback(url, "success");
//         }
//     };
//     img.src = url;
//     timer = setTimeout(function() {
//         timedOut = true;
//         callback(url, "timeout");
//     }, timeout);
// }
// function record(url, result) {
//     document.body.innerHTML += "<span class='" + result + "'>" +
//         result + ": " + url + "</span><br>";
// }

// testImage("http://photos.smugmug.com/photos/344291068_HdnTo-Ti.jpg", record);