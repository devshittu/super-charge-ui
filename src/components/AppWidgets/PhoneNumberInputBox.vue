<template>
    <div>
        <div class="columns  is-centered ">
            <div class="column is-8">
                <b-field grouped position="is-centered">

                    <b-input value="" placeholder="Phone number" type="number" maxlength="30"
                             size="is-medium is-dark is-radiusless" v-model="beneficiaryPhoneNumber" expanded></b-input>
                </b-field>
            </div>


        </div>
        <hr class="hr" v-if="horizontalRule"/>

        <div class="container">

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
            </nav>
            <hr class="hr" v-if="horizontalRule"/>
        </div>
    </div>
</template>
<script>

    import CarrierCardRadioButton from "../../components/custom-recharge-form-controls/MobileCarrierCardRadio";

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
        name: 'PhoneNumberInputBox',
        components: {CarrierCardRadioButton},
        props: {
            // beneficiaryPhoneNumber: {},
            horizontalRule: {
                type: Boolean,
                default: true,
                required: false
            },
        },
        data() {
            return {
                beneficiaryPhoneNumber: '',
                activeCarrier: '',
            }
        },
        methods: {
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
            updateActiveCarrier(mobileCarrier) {
                this.activeCarrier = mobileCarrier

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
        watch: {
            // whenever question changes, this function will run
            beneficiaryPhoneNumber: function (newValue) {
                this.$emit('getBeneficiaryPhoneNumber', this.beneficiaryPhoneNumber)
                if (newValue.length >= 4) this.detectCarrier(newValue);
                else return false;
            },
            // whenever question changes, this function will run
            activeCarrier: function (newValue) {
                this.$emit('getActiveCarrier', newValue);
            }
        },


    }
</script>
