<template>
    <div class="">

        <b-field grouped position="is-centered">

            <b-input value="" placeholder="Phone number" type="number" maxlength="30"
                     size="is-medium is-dark is-radiusless" v-model="beneficiaryPhoneNumber"></b-input>


            <!--<p class="control">
                <button class="button is-success is-outlined is-medium is-radiusless">Proceed to Pay</button>
            </p>-->
        </b-field>

        <hr class="hr"/>

        <nav class="level is-mobile">
            <!--<section>-->
            <!--<b-field grouped group-multiline position="is-centered is-mobile">-->
            <carrier-card-radio-button
                    carrier-logo-source="https://nigerialogos.com/logos/9mobile/9mobile.png"
                    carrier-name="9mobile"
                    v-model="activeCarrier"
            />
            <carrier-card-radio-button
                    carrier-logo-source="https://nigerialogos.com/logos/airtel/airtel.png"
                    carrier-name="Airtel"
                    v-model="activeCarrier"
            />
            <carrier-card-radio-button
                    carrier-logo-source="https://nigerialogos.com/logos/glo/glo.png"
                    carrier-name="Glo"
                    v-model="activeCarrier"
            />
            <carrier-card-radio-button
                    carrier-logo-source="https://nigerialogos.com/logos/mtn/mtn.png"
                    carrier-name="MTN"
                    v-model="activeCarrier"
            />
            <!--</b-field>-->
            <!--</section>-->
            <!--<div class="level-item has-text-centered">
                &lt;!&ndash;Check Levels on the documentation&ndash;&gt;
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-64x64 mt-2">
                            <img src="https://nigerialogos.com/logos/9mobile/9mobile.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <p class="title is-size-5">
                            9mobile
                        </p>
                        &lt;!&ndash;<p class="subtitle">
                            Jeff Atwood
                        </p>&ndash;&gt;
                    </div>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-64x64 mt-2">
                            <img src="https://nigerialogos.com/logos/airtel/airtel.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <p class="title is-size-5">
                            Airtel
                        </p>
                    </div>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-64x64 mt-2">
                            <img src="https://nigerialogos.com/logos/glo/glo.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <p class="title is-size-5">
                            Glo
                        </p>
                    </div>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-64x64 mt-2">
                            <img src="https://nigerialogos.com/logos/mtn/mtn.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <p class="title is-size-5">
                            MTN
                        </p>
                    </div>
                </div>
            </div>-->
        </nav>
        <hr class="hr"/>
        <div class="container">

            <section>
                <b-field grouped group-multiline position="is-centered">
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="50"
                            :customer-value="50" duration="7" :merchant-price="48"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="100"
                            :customer-value="100" duration="7" :merchant-price="97"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="200"
                            :customer-value="200" duration="7" :merchant-price="194"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="400"
                            :customer-value="400" duration="7" :merchant-price="390"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="500"
                            :customer-value="500" duration="7" :merchant-price="485"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="1000"
                            :customer-value="1000" duration="7" :merchant-price="980"
                            v-model="activeVoucher"
                    />
                    <voucher-card-radio-button
                            name="voucherType"
                            native-value="2000"
                            :customer-value="2000" duration="7" :merchant-price="1980"
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
                         size="is-medium is-radiusless"></b-input>

                <!--<b-field label="Other amount">
                    <b-numberinput placeholder="Other amount" size="is-medium" step="50">
                    </b-numberinput>
                </b-field>-->

                <p class="control">
                    <b-button size="is-medium" type="is-primary" outlined class="is-radiusless">Proceed to Pay
                    </b-button>
                </p>
            </b-field>

        </div>
    </div>
</template>
<script>
    import VoucherCardRadioButton from "../../components/custom-recharge-form-controls/VoucherCardRadio";
    import CarrierCardRadioButton from "../../components/custom-recharge-form-controls/MobileCarrierCardRadio";
    import BButton from "buefy/src/components/button/Button";

    const nigerianCarrierNoPrefixes = {
        "9mobile": ["0809", "0817", "0818", "0909", "0908"],
        "airtel": ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0904", "0907"],
        "glo": ["0705", "0805", "0807", "0811", "0815", "0905"],
        "mtn": ["0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "07025", "07026", "0704"],
        "multi-links": ["07027", "0709"],
        "ntel": ["0804"],
        "smile": ["0702"],
        "starcomms": ["07028", "07029", "0819"],
        "zoom": ["0707"]
    }

    export default {
        name: "ServiceAirtime",
        components: {BButton, CarrierCardRadioButton, VoucherCardRadioButton},
        data() {
            return {
                count: 1,
                radioButton: '',
                beneficiaryPhoneNumber: '',
                activeCarrier: '',
                activeVoucher: '',
            }
        },
        methods: {
            updateActiveCarrier(mobileCarrier) {
                this.activeCarrier = mobileCarrier

            },
            updateActiveVoucher(voucher) {
                this.activeVoucher = voucher
            },
            detectCarrier(phoneNumber) {
                for (const key in nigerianCarrierNoPrefixes) {
                    console.log(`${key}: ${nigerianCarrierNoPrefixes[key]} `, `${typeof nigerianCarrierNoPrefixes[key]}`);

                    const carrierGroups = Object.values(nigerianCarrierNoPrefixes[key]);
                    if ((carrierGroups.indexOf(phoneNumber.slice(0, 4)) > -1) || (carrierGroups.indexOf(phoneNumber.slice(0, 5)) > -1)) {
                        console.log(`This network is  ${key}`);
                        this.setActiveCarrier(key);
                        return key
                    }
                }
            },
            setActiveCarrier(carrier) {
                switch (carrier) {
                    case '9mobile':
                        this.updateActiveCarrier('9mobile');
                        break;
                    case 'airtel':
                        this.updateActiveCarrier('Airtel');
                        break;
                    case 'glo':
                        this.updateActiveCarrier('Glo');
                        break;
                    default:
                        this.updateActiveCarrier('MTN');
                        break;
                }
            }
        },
        mounted() {
            setTimeout(() => {
                this.count++;
            }, 3 * 1000)
        },

        watch: {
            // whenever question changes, this function will run
            beneficiaryPhoneNumber: function (newPhoneNumber) {
                // this.answer = 'Waiting for you to stop typing...'
                if (newPhoneNumber.length >= 4) this.detectCarrier(newPhoneNumber);
                else return false;
            }
        },

    }
</script>

<style scoped>

</style>