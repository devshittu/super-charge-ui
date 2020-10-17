<template>
    <section>
        <admin-settings-block block-label="General Settings"
                              block-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum justo, laoreet ut iaculis vitae, molestie nec odio. ">

            <admin-settings-singleton-field field-label="Business Name" field-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">


                <b-input value="Super Charge" placeholder="Business Name" maxlength="12" disabled
                         size="is-medium is-dark is-radiusless" v-model="beneficiaryPhoneNumber" expanded></b-input>

            </admin-settings-singleton-field>
            <div class="panel-block"></div>

        </admin-settings-block>
        <admin-settings-block block-label="Others Settings"
                              block-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum justo, laoreet ut iaculis vitae, molestie nec odio. ">

            <admin-settings-singleton-field field-label="Field Title" field-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">

                <b-field grouped>
                    <b-switch type="is-dark"
                            :rounded="false"
                            :outlined="true" value="1"
                              size="is-medium" expanded>On/Off
                    </b-switch>
                </b-field>

            </admin-settings-singleton-field>
            <admin-settings-singleton-field field-label="Field Title" field-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">

                <b-field>
                    <b-select placeholder="Select a topic" value="1"
                              size="is-medium is-dark is-radiusless" expanded>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </b-select>
                </b-field>


            </admin-settings-singleton-field>
            <div class="panel-block"></div>

        </admin-settings-block>
    </section>
</template>

<script>
    import AdminSettingsBlock from "./AdminSettingsBlock";
    import AdminSettingsSingletonField from "./AdminSettingsSingletonField";
    import BInput from "buefy/src/components/input/Input";

    export default {
        name: 'Default',
        components: {BInput, AdminSettingsSingletonField, AdminSettingsBlock},
        data() {
            const tableDataSimple = [
                {
                    'id': 1,
                    'carrier_name': 'MTN',
                    'current_rate': '4.2%',
                    'date': '2016/10/15 13:43:27',
                },
                {
                    'id': 2,
                    'carrier_name': '9mobile',
                    'current_rate': '8%',
                    'date': '2016/12/15 06:00:53',
                },
                {
                    'id': 3,
                    'carrier_name': 'Airtel',
                    'current_rate': '4.5%',
                    'date': '2016/04/26 06:26:28',
                },
                {
                    'id': 4,
                    'carrier_name': 'Glo',
                    'current_rate': '2.8%',
                    'date': '2016/04/10 10:28:46',
                },
            ]

            return {
                tableDataSimple,
                isCustom: false
            }
        }
    }
</script>