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
            const user = await auth0.getUser();
            console.log(user);
        }
    }
}
</script>