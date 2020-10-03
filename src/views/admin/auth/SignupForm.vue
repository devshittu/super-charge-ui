<template>
    <div class="column is-6  has-text-left">
        <h1 class="title">
            Register as an Admin
        </h1>

        <section>
            <!--<b-checkbox v-model="hasError">Show errors</b-checkbox>-->

            <b-field label="Username" position="is-centered"
                     :type="{ 'is-danger': hasError }"
                     :message="{ 'Username is not available': hasError }">
                <b-input value="runcie" maxlength="30"
                         size="is-medium is-dark is-radiusless" expanded></b-input>
            </b-field>
            <b-field label="Email" position="is-centered"
                     :type="{ 'is-danger': hasError }"
                     :message="{ 'Username is not available': hasError }">
                <b-input value="runcie@biz.name" maxlength="30"
                         size="is-medium is-dark is-radiusless" expanded></b-input>
            </b-field>

            <b-field grouped label="Password"
                     :type="{ 'is-danger': hasError }"
                     :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
                <b-input type="password" value="password" maxlength="30"
                         size="is-medium is-dark is-radiusless" expanded></b-input>


                <p class="control is-flex-tablet">
                    <b-button size="is-medium" type="is-primary" class="is-radiusless">Signup
                    </b-button>
                </p>

            </b-field>
            <hr>

            <auth-footer-links />
        </section>
    </div>
</template>

<script>
    import AuthFooterLinks from "./AuthFooterLinks";

    export default {
        name: "SignupForm",
        components: {AuthFooterLinks},
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

