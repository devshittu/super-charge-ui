<template>
    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">

        <div class="column  has-text-left has-background-white px-6 py-6">
            <h1 class="title">
                Start A Project
            </h1>

            <section>
                <!--<b-checkbox v-model="hasError">Show errors</b-checkbox>-->

                <b-field label="Full Name" position="is-centered"
                         :type="{ 'is-danger': hasError }"
                         :message="{ 'Username is not available': hasError }">
                    <b-input value="" maxlength="30"
                             size="is-medium is-dark is-radiusless" placeholder="First Name" expanded></b-input>
                    <b-input value="" maxlength="30"
                             size="is-medium is-dark is-radiusless" placeholder="Last Name" expanded></b-input>
                </b-field>
                <b-field label="Phone" position="is-centered"
                         :type="{ 'is-danger': hasError }"
                         :message="{ 'Username is not available': hasError }">
                    <b-input value="" maxlength="30"
                             size="is-medium is-dark is-radiusless" placeholder="+234 701 XXX XXXX" expanded></b-input>
                </b-field>
                <b-field label="Email" position="is-centered"
                         :type="{ 'is-danger': hasError }"
                         :message="{ 'Username is not available': hasError }">
                    <b-input value="" maxlength="30"
                             size="is-medium is-dark is-radiusless" placeholder="johndoe@abc.biz" expanded></b-input>
                </b-field>
                <b-field label="Company/Organisation" position="is-centered"
                         :type="{ 'is-danger': hasError }"
                         :message="{ 'Username is not available': hasError }">
                    <b-input value="" maxlength="30"
                             size="is-medium is-dark is-radiusless" placeholder="ABC Nig Ltd." expanded></b-input>
                </b-field>
                <b-field group-multiline grouped label="I'm interested in" position="is-centered"
                         :type="{ 'is-danger': hasError }"
                         :message="{ 'Username is not available': hasError }">

                    <div class="block">
                        <p class="is-desc pb-5">Your answer to this question will determine whether or not you get a
                            response
                            from our team. Choose wisely.</p>
                        <div class="field">
                            <b-checkbox v-model="interestedIn" name="interest" native-value="Branding">Branding</b-checkbox>
                        </div>
                        <div class="field">
                            <b-checkbox v-model="interestedIn" name="interest" native-value="Marketing">Marketing</b-checkbox>
                        </div>
                        <div class="field">
                            <b-checkbox v-model="interestedIn" name="interest" native-value="web">Web Design & Development</b-checkbox>
                        </div>
                        <div class="field">
                            <b-checkbox v-model="interestedIn" name="interest" native-value="sales">Gadget Sales</b-checkbox>
                        </div>
                        <div class="field">
                            <b-checkbox v-model="interestedIn" name="interest" native-value="Other">Other</b-checkbox>
                        </div>
                    </div>

                </b-field>
                <br>

                <b-field label="I understand that good work requires both time and money" position="is-centered"
                         :type="{ 'is-danger': hasError }"
                         :message="{ 'Username is not available': hasError }">
                    <div class="block">
                        <p class="is-desc pb-5">Your answer to this question will determine whether or not you get a
                            response
                            from our team. Choose wisely.</p>
                        <div class="field block">
                            <b-radio v-model="understandState" name="understand" native-value="yes">I understand.</b-radio>
                        </div>
                        <div class="field block">
                            <b-radio v-model="understandState" name="understand" native-value="no">Wait, what?</b-radio>
                        </div>
                    </div>
                </b-field>

                <b-field grouped label="Anything else?"
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
                        <b-button size="is-medium" type="is-primary" class="is-radiusless">Start a Project
                        </b-button>
                    </p>
                </b-field>
                <auth-footer-links/>
            </section>
        </div>
    </b-modal>
</template>
<script>
    import BButton from "buefy/src/components/button/Button"
    import BCheckbox from "buefy/src/components/checkbox/Checkbox"
    import BModal from "buefy/src/components/modal/Modal";
    import BRadio from "buefy/src/components/radio/Radio";

    export default {
        name: 'StartAProjectModal',
        components: {BRadio, BModal, BButton, BCheckbox},
        props: ['isCardModalActive'],
        data() {
            return {
                interestedIn: [],
                understandState: '',
            }
        },
        watch: {
            isCardModalActive: function (val) {
                this.$emit('update:isCardModalActive', val)
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/main";
    .field{
        label{

                @include app-font-face('header');
        }
    }
</style>