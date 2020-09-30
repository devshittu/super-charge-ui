import {extend} from 'vee-validate';
import {required, email, min, max, numeric, image, length, oneOf} from 'vee-validate/dist/rules';
import {_NAMESPACE_AUTH_, _NAMESPACE_SOURCES_, _NAMESPACE_STORIES_} from "../store/namespace.type";
import {CHECK_SOURCE_EXIST, CHECK_STORY_EXIST, CHECK_USERNAME_EXIST} from "../store/actions.type";
import store from '../store/'

// Add the required rule
extend('required', required);
// Add the email rule
extend('email', email);
extend('min', min);
extend('max', max);
extend('length', length);
extend('numeric', numeric);
extend('image', image);
extend('oneOf', oneOf);

extend('username_exists', {
    validate: async value => {
        let oldUsername = store.getters[_NAMESPACE_AUTH_ + 'currentUser'].username;
        // eslint-disable-next-line no-console
        // console.log('username_exists:oldUsername:// ', oldUsername, typeof oldUsername, 'value:// tha', value, typeof value);
        if (oldUsername === value) return true;
        var check =  await store.dispatch(_NAMESPACE_AUTH_ + CHECK_USERNAME_EXIST, value)
        // eslint-disable-next-line no-console
        // console.log('valid Return.user.exist:// ', check.user.exist)
        return !check.user.exist
    },
    message: 'The {_field_} is already taken'
});


export const validateSourceExists = async value => {
    var check =  await store.dispatch(_NAMESPACE_SOURCES_ + CHECK_SOURCE_EXIST, value)
    // eslint-disable-next-line no-console
    console.log('validateSourceExists valid Return.source.exist:// ', check)
    return !check.source.exist
};



export const validateStoryExists = async value => {
    var check =  await store.dispatch(_NAMESPACE_STORIES_ + CHECK_STORY_EXIST, value)
    // eslint-disable-next-line no-console
    console.log('validateStoryExists valid Return.story.exist:// ', check)
    return !check.story.exist
};


export const validateUrl = value => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
        '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i');
    return pattern.test(value);
};

extend('source_exists', {
    validate: validateSourceExists,
    message: 'The {_field_} is already exists'
});
extend('story_exists', {
    validate: validateStoryExists,
    message: 'The {_field_} is already exists'
});
extend('url', {
    validate: validateUrl,
    message: 'The {_field_} is requires a valid url'
});

