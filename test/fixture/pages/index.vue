<template>
    <div>
        <button type="button" @click='login'>Login</button>
    </div>
</template>

<script>
export default {
    methods: {
        async login() {
            const auth0 = this.$auth0;
            await auth0.loginWithPopup();
            console.log(await auth0.getTokenSilently());
        }
    }
}
</script>