<template>
    <div class="">

        <PhoneNumberInputBox @getBeneficiaryPhoneNumber="updateBeneficiaryPhoneNumber" @getActiveCarrier="updateActiveCarrier" />
        <div class="container">

            <section>
                <b-field grouped group-multiline position="is-centered">
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="50"
                            customer-value="500mb" duration="7 days" :merchant-price="48"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="100"
                            customer-value="1.5gb" duration="7 days" :merchant-price="97"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="200"
                            customer-value="2gb" duration="7 days" :merchant-price="194"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="400"
                            customer-value="3gb" duration="1 month" :merchant-price="390"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="500"
                            customer-value="4.5gb" duration="1 month" :merchant-price="485"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="1000"
                            customer-value="6gb" duration="1 month" :merchant-price="980"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="2000"
                            customer-value="10gb" duration="1 month" :merchant-price="1980"
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

                <b-input value="" placeholder="Other amount" type="number" maxlength="30"
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
    import PhoneNumberInputBox from "../../components/AppWidgets/PhoneNumberInputBox";
    import {mobile} from "./mixins"

    export default {
        name: "ServiceAirtime",
        components: {PhoneNumberInputBox, BButton, VoucherCardRadioButton},
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

