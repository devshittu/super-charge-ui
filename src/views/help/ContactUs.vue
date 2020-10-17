<template>
    <div class="column is-6  has-text-left">
        <h1 class="title">
            Contact Us
        </h1>

        <section>
            <!--<b-checkbox v-model="hasError">Show errors</b-checkbox>-->

            <b-field label="Full Name" position="is-centered"
                     :type="{ 'is-danger': hasError }"
                     :message="{ 'Username is not available': hasError }">
                <b-input value="Runcie" maxlength="30"
                         size="is-medium is-dark is-radiusless" expanded></b-input>
            </b-field>
            <b-field label="Email" position="is-centered"
                     :type="{ 'is-danger': hasError }"
                     :message="{ 'Username is not available': hasError }">
                <b-input value="runcie@biz.name" maxlength="30"
                         size="is-medium is-dark is-radiusless" expanded></b-input>
            </b-field>
            <b-field label="Topic" position="is-centered"
                     :type="{ 'is-danger': hasError }"
                     :message="{ 'Username is not available': hasError }">
                <b-select placeholder="Select a topic" value="1"
                          size="is-medium is-dark is-radiusless" expanded>
                    <option value="1">Airtime Delay</option>
                    <option value="2">Payment Inconclusive</option>
                </b-select>
            </b-field>

            <b-field grouped label="Message"
                     :type="{ 'is-danger': hasError }"
                     :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
                <b-input type="textarea" value="Your message goes here" maxlength="30"
                         size="is-medium is-dark is-radiusless" expanded></b-input>



            </b-field>

            <b-field>

                <p class="control is-flex-tablet">
                    <b-button size="is-medium" type="is-primary" class="is-radiusless">Send Message
                    </b-button>
                </p>
            </b-field>
            <hr>

            <auth-footer-links />
        </section>
    </div>
</template>

<script>
    import AuthFooterLinks from "../admin/auth/AuthFooterLinks";
    import BInput from "buefy/src/components/input/Input";
    import BSelect from "buefy/src/components/select/Select";
    import BField from "buefy/src/components/field/Field";

    export default {
        name: "SignupForm",
        components: {BField, BSelect, BInput, AuthFooterLinks},
        data() {
            return {
                hasError: false,
            }
        },
        computed: {
            currentPage() {
                return this.$route.path
            }
        }
    }
</script>

