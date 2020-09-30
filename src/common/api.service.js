import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
import JwtService from "@/common/jwt.service"
import { API_URL } from "@/common/config"
import {
    MA_URI_STORIES_STORIES_AUTHORED_BY_AUTH_USER,
    MA_URI_STORIES_STORIES_FOR_AUTH_USER,
    MA_URI_STORIES_STORIES_FOR_UNAUTH_USER
} from "./constants.type";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = API_URL
    },

    setHeader(__multipart=false) {
        Vue.axios.defaults.headers.common[
            "Authorization"
            ] = `Token ${JwtService.getToken()}`
        if (__multipart ===  true) {
            Vue.axios.defaults.headers.common[
                "Content-Type"
                ] = `multipart/form-data`
        }
    },

    query(resource, params) {

        return Vue.axios.get(resource, params).catch(error => {
            throw new Error (`[MA] ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
            throw new Error(`[MA] ApiService ${error}`);
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params)
    },

    put(resource, params) {
        return Vue.axios.put(`${resource}`, params)
    },

    patch(resource, params) {
        return Vue.axios.patch(`${resource}`, params)
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw  new Error(`[MA] ApiService ${error}`);
        });
    }

};

export default ApiService

export const CategoriesService = {
     // defaultResource = 'categories',

    query(params) {
        return ApiService.query("categories", {
            params
        });
    },

    query_all(params) {
        return ApiService.query("categories/all/", {
            params
        });
    },

    get(slug) {
        return ApiService.get("categories", slug)
    },

    create(data) {
        return ApiService.post("categories/", data)
    },

    update(slug, data) {
        return ApiService.update("categories", slug, data)
    },

    destroy(slug) {
        return ApiService.delete(`categories/${slug}`)
    }
};

export  const TagsService = {

    query(params) {
        return ApiService.query("tags", {
            params
        });
    },


    query_all(params) {
        return ApiService.query("tags/all/", {
            params
        });
    },

    get() {
        return ApiService.get("tags")
    },


    create(data) {
        // console.log('SourcesService.create:// ', data)
        return ApiService.post("tags/", data)
    },

    update(slug, data) {
        return ApiService.update("tags", slug, data)
    },

    destroy(slug) {
        return ApiService.delete(`tags/${slug}`)
    }
};


export const SourcesService = {
    query(params) {
        return ApiService.query("sources", {
            params: params
        });
    },

    get(slug) {
        return ApiService.get("sources", slug)
    },

    create(data) {
        // console.log('SourcesService.create:// ', data)
        return ApiService.post("sources/", data)
    },

    update(slug, data) {
        return ApiService.update("sources", slug, data)
    },

    destroy(slug) {
        return ApiService.delete(`sources/${slug}`)
    }
};

export const StoriesService = {
    query(type, params) {
        let uri = '';
        switch (type) {
            case MA_URI_STORIES_STORIES_FOR_AUTH_USER:
            case 'for-you':
                uri = MA_URI_STORIES_STORIES_FOR_AUTH_USER;
                break;
            case MA_URI_STORIES_STORIES_AUTHORED_BY_AUTH_USER:
            case 'my-stories':
                uri = MA_URI_STORIES_STORIES_AUTHORED_BY_AUTH_USER;
                break;
            default:
                uri = MA_URI_STORIES_STORIES_FOR_UNAUTH_USER

        }
        return ApiService.query("stories" + (`/${uri}`), {
        // return ApiService.query("stories" + (type === "feed" ? "/feed" : ""), {
            params
        });
    },

    get(slug) {
        return ApiService.get("stories", slug)
    },

    create(data) {
        // console.log('StoriesService.create:// ', data)
        return ApiService.post("stories/", data)
    },

    update(slug, params) {
        return ApiService.update("stories", slug, {story: params})
    },

    destroy(slug) {
        return ApiService.delete(`stories/${slug}`)
    }
};

export const  StorylineService = {
    past(slug, page = 1) {
        return ApiService.query(`stories/storyline/past/${slug}`, {
            params: {page}
        });
    },
    recent(slug, page = 1) {
        return ApiService.query(`stories/storyline/recent/${slug}`, {
            params: {page}
        });
    },
}

export const AppThemesService = {
    query(params) {
        return ApiService.query("app-themes", {
            // return ApiService.query("stories/", {
            params: params
        });
    },
}