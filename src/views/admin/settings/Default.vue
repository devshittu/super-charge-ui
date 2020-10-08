<template>
    <section>
        <div class="block my-6">
        </div>

        <admin-settings-block block-label="Airtime Pricing"
                              block-description="Lets you modify your markup for your airtime prices.">

            <b-table :data="tableDataSimple">

                <b-table-column label="ID" width="40" numeric v-slot="props">
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column label="Carrier Name" v-slot="props">
                    {{ props.row.carrier_name }}
                </b-table-column>
                <b-table-column label="Rate" v-slot="props">
                    <b-input :value="props.row.current_rate"></b-input>
                </b-table-column>
                <b-table-column label="Last Changed" centered v-slot="props">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </b-table-column>



            </b-table>
        </admin-settings-block>
        <admin-settings-block block-label="Data Pricing"
                              block-description="Lets you modify your markup for your data prices.">
            <b-table :data="tableDataSimple">

                <b-table-column label="ID" width="40" numeric v-slot="props" class="is-hidden-mobile">
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column label="Carrier Name" v-slot="props">
                    {{ props.row.carrier_name }}
                </b-table-column>
                <b-table-column label="Rate" v-slot="props">
                    <b-input :value="props.row.current_rate"></b-input>
                </b-table-column>
                <b-table-column label="Last Changed" centered v-slot="props">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </b-table-column>


            </b-table>
        </admin-settings-block>

        <admin-settings-block block-label="Others Settings"
                              block-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum justo, laoreet ut iaculis vitae, molestie nec odio. ">

            <admin-settings-singleton-field field-label="Field Title" field-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">

                <b-field grouped>
                    <b-switch type="is-dark"
                            :rounded="false"
                            :outlined="true">On/Off
                    </b-switch>
                </b-field>

            </admin-settings-singleton-field>
            <admin-settings-singleton-field field-label="Field Title" field-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">

                <b-field>
                    <b-select placeholder="Select a topic">
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
    import BInput from "buefy/src/components/input/Input";
    import AdminSettingsBlock from "./AdminSettingsBlock";
    import AdminSettingsSingletonField from "./AdminSettingsSingletonField";

    export default {
        name: 'Default',
        components: {AdminSettingsSingletonField, AdminSettingsBlock, BInput},
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