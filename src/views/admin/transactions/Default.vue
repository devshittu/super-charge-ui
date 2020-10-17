<template>
    <section>

        <!--<div class="block">
            <b-switch v-model="showMusic"> Show Music item (using <code>v-if</code>)</b-switch>
        </div>
        <div class="block">
            <b-switch v-model="showBooks"> Show books item (by adding / removing from the array)</b-switch>
        </div>
        <div class="block">
            <b-switch v-model="multiline">Multiline</b-switch>
        </div>-->
        <div class="block mt-6"></div>
        <b-tabs v-model="activeTab" :multiline="multiline" position="is-centered" type="is-toggle-rounded">
            <template v-for="tab in tabs">
                <b-tab-item
                        v-if="tab.displayed"
                        :key="tab.id"
                        :value="tab.id"
                        :label="tab.label">
                    <!--{{ tab.content }}
                        :icon="'fi fi-'+tab.icon"-->

                    <admin-settings-block :block-label="tab.label +' Transactions'"
                                          block-description="Section description goes here." class="mt-0">

                        <!--<airtime/>-->

                        <component :is="tab.content"></component>

                    </admin-settings-block>
                </b-tab-item>
            </template>
        </b-tabs>


    </section>
</template>

<script>
    import AdminSettingsBlock from "../settings/AdminSettingsBlock";
    import Airtime from "./Airtime";
    import BTabs from "buefy/src/components/tabs/Tabs";

    export default {
        name: 'Default',
        components: {BTabs, Airtime, AdminSettingsBlock},
        data() {
            return {
                activeTab: 'airtime',
                showMusic: true,
                showBooks: false,
                multiline: true
            }
        },
        computed: {
            baseTabs() {
                return [
                    {
                        id: 'airtime',
                        label: 'Airtime',
                        icon: 'dollar-sign',
                        // content: 'Airtime: Lorem ipsum dolor sit amet.',
                        content: Airtime,
                        displayed: true,
                    },
                    {
                        id: 'Data',
                        label: 'Data',
                        // content: 'Data: Lorem ipsum dolor sit amet.',
                        content: Airtime,
                        displayed: this.showMusic,
                    },
                    {
                        id: 'cabletv',
                        label: 'Cable TV',
                        // content: 'Cable TV: Lorem ipsum dolor sit amet.',
                        content: Airtime,
                        displayed: true,
                    },
                    {
                        id: 'power',
                        label: 'Power Bills',
                        // content: 'Power Bills: Lorem ipsum dolor sit amet.',
                        content: Airtime,
                        displayed: true,
                    },
                ]
            },
            tabs() {
                const tabs = [...this.baseTabs]
                if (this.showBooks) {
                    tabs.splice(tabs.length - 2, 0, this.bookTab);
                }
                return tabs
            },
            bookTab() {
                return {
                    id: 'books',
                    label: 'Books',
                    content: 'Books: Lorem ipsum dolor sit amet.',
                    displayed: true,
                }
            }
        }
    }
</script>