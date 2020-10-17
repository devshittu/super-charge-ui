<template>
    <div class="">

        <CableTVProviderList @getBeneficiaryPhoneNumber="updateBeneficiaryPhoneNumber" @getActiveCarrier="updateActiveCarrier" />

        <div class="container has-text-centered"><h4 class="title">Plans & Packages</h4><hr></div>
        <div class="container">

            <section>
                <b-field grouped group-multiline position="is-centered">
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="50"
                            customer-value="Premium" duration="175 Channels" :merchant-price="18400"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="100"
                            customer-value="Compact Plus" duration="155 Channels" :merchant-price="12400"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="200"
                            customer-value="Compact" duration="135 Channels" :merchant-price="7900"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="400"
                            customer-value="Confam" duration="95+ Channels" :merchant-price="4615"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="500"
                            customer-value="Yanga" duration="95 Channels" :merchant-price="2565"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="1000"
                            customer-value="Confam" duration="40 Channels" :merchant-price="1850"
                            v-model="activeVoucher"
                    />

                </b-field>
                <p class="content">
                    <b>Phone number:</b>
                    {{beneficiaryPhoneNumber}}
                    <!--<br>-->
                    <b>Selected Carrier:</b>
                    {{activeCarrier}}
                    <!--<br>-->
                    <b>Selected Voucher:</b>
                    {{activeVoucher}}
                </p>
            </section>

            <hr class="hr"/>


            <b-field grouped position="is-right">

                <b-input value="" placeholder="Decoder Number" type="number" maxlength="30"
                         size="is-medium is-radiusless is-dark" expanded></b-input>

                <!--<b-field label="Other amount">
                    <b-numberinput placeholder="Other amount" size="is-medium" step="50">
                    </b-numberinput>
                </b-field>-->

                <p class="control">
                    <b-button size="is-medium" type="is-primary" outlined class="is-radiusless">Pay
                    </b-button>
                </p>
            </b-field>

        </div>
    </div>
</template>
<script>
    import VoucherCardRadioButton from "../../components/custom-recharge-form-controls/VoucherCardRadio";
    import BButton from "buefy/src/components/button/Button";
    import {mobile} from "./mixins"
    import CableTVProviderList from "../../components/AppWidgets/CableTVProviderList";

    export default {
        name: "ServiceAirtime",
        components: {CableTVProviderList, BButton, VoucherCardRadioButton},
        mixins: [mobile],
        data() {
            return {
                count: 1,
                radioButton: '',
                beneficiaryPhoneNumber: '',
                activeCarrier: '',
                activeVoucher: '',
            }
        },
        mounted() {
            setTimeout(() => {
                this.count++;
            }, 3 * 1000)
        },


    }
</script>

