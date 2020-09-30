import {APP_LOCALE, APP_NAME, TW_APP_ACCOUNT_HANDLE} from "./general-text";

export const MA_PROP_UPDATE = "update:";
export const MA_SCROLL_TOP = "MAScrollTop";
export const MA_PAGE_PROPERTIES = "MAPageProperties";
export const MA_PAGE_PROPERTIES_STORYLINE = "MAPagePropertiesStoryline";
export const MA_SEARCH_KEY_WORD = "MASearchKeyword";
export const MA_LOAD_STORIES_FOR = "MALoadStoriesFor";
export const MA_GET_STARTED_VERIFICATION_FLAG = "MAGetStartedVerificationFlag";
export const MA_CREATE_STORY_VERIFICATION_FLAG = "MACreateStoryVerificationFlag";
export const MA_PREPARE_EDIT_ADMIN_CONTENT_ID = "MAPrepareEditAdminContentId";
export const MA_PREPARE_EDIT_ADMIN_CONTENT_CATEGORY_ID = "MAPrepareEditAdminContentCategoryId";
export const MA_PREPARE_EDIT_ADMIN_CONTENT_TAG_ID = "MAPrepareEditAdminContentTagId";
export const MA_PREPARE_EDIT_ADMIN_CONTENT_SOURCE_ID = "MAPrepareEditAdminContentSourceId";
export const MA_STORY_SHARE_MODAL_FLAG = "MAStoryShareModalFlag";
export const MA_STORY_NAVIGATE_OUT_OF_APP_DIALOG_FLAG = "MAStoryNavigateOutOfAppModalFlag";
export const MA_ITEM_ADDED_SUCCESS = "MAItemAddedSuccess";
export const MA_ITEM_ADDED_FAILED = "MAItemAddedFailed";
export const MA_ACCOUNT_PERCENT_COMPLETE_THRESHOLD = 60; //45;
export const MA_SHARE_CONTENT_MAX_LENGTH = 120;

export const MA_PAGINATION_PER_PAGE_STORIES = 10;//30
export const MA_PAGINATION_PER_PAGE_STORYLINE = 2;

export const MA_URI_STORIES_STORIES_FOR_AUTH_USER = 'you';
export const MA_URI_STORIES_STORIES_AUTHORED_BY_AUTH_USER = 'me';
export const MA_URI_STORIES_STORIES_FOR_UNAUTH_USER = 'all';


export const MA_USER_ROLE_TYPE_READER = `Reader`;
export const MA_USER_ROLE_TYPE_ADMIN = "Admin";
export const MA_USER_ROLE_TYPE_EDITOR = "Editor";
export const MA_USER_ROLE_TYPE_WRITER = "Writer";
export const MA_USER_ROLE_TYPE_PUBLISHER = "Publisher";

// export const MA_IMAGE_PLACEHOLDER_URL = "@/assets/images/";
export const MA_IMAGE_PLACEHOLDER_URL = "@/assets/img/";
export const MA_IMAGE_PLACEHOLDER_USER_AVATAR = MA_IMAGE_PLACEHOLDER_URL + "avatar.svg";

export const MA_ASSET_RESPONSE_TYPES_TIMEOUT = 'timeout';
export const MA_ASSET_RESPONSE_TYPES_SUCCESS = 'success';
export const MA_ASSET_RESPONSE_TYPES_ERROR = 'error';

//Wait for repeated action to be carried out.
export const MA_DEBOUNCE_WAIT_IN_MS = 500;
export const MA_DEBOUNCE_WAIT_IN_MS_TYPING = 500;
//wait in ms for a call-to-action to fire immediately after the first fire then suspends the consecutive sequence of clicks.
export const MA_THROTTLE_WAIT_IN_MS_CLICK_CTA = 10000; //10secs


// To be used in the /home/devshittu/WebstormProjects/media-app-web-ui/src/router/index.js
// To further identify the newly added tags to make sharing fully breezy.
export const MA_METADATA_TAG_ATTR = 'ma-tag-meta-data-attr'; // 'data-vue-router-controlled'

// Field names for getting description, featured images, title, article author, url,
export const MA_METADATA_META_DESCRIPTION = 'body';
export const MA_METADATA_META_TITLE = 'title';
export const MA_METADATA_META_KEYWORDS = 'story_tag_list';// 'story.story_tag_list.tags';
export const MA_METADATA_META_AUTHOR = 'user';
export const MA_METADATA_META_IMAGE = 'app_logo';
export const MA_METADATA_META_ARTICLE_STYLE = 'narrative';
// export const MA_METADATA_META_URL = 'url'; // window.location.href
export const MA_METADATA_META_URL = window.location.href; // window.location.href
export const MA_METADATA_META_FB_APP_ACCOUNT_ID = '123456789';
export const MA_METADATA_META_FB_OG_TYPE = 'website';
export const MA_METADATA_META_FB_OG_SITE_NAME = APP_NAME;
export const MA_METADATA_META_FB_OG_APP_LOCALE = APP_LOCALE;
export const MA_METADATA_META_FB_OG_APP_MARKUP_VERSION = 'v1.0';
export const MA_METADATA_META_TW_APP_ACCOUNT = TW_APP_ACCOUNT_HANDLE;
export const MA_METADATA_META_TW_AUTHOR_ACCOUNT = TW_APP_ACCOUNT_HANDLE;





