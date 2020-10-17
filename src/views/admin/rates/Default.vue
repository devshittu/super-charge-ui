<template>
    <section>
        <div class="block my-6">
        </div>

        <admin-settings-block block-label="Airtime Rates"
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
        <admin-settings-block block-label="Data Rates"
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

    </section>
</template>

<script>
    import BInput from "buefy/src/components/input/Input";
    import AdminSettingsBlock from "../settings/AdminSettingsBlock";

    export default {
        name: 'Default',
        components: {AdminSettingsBlock, BInput},
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