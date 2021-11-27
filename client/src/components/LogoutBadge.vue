<template>
    <div class="buttons">
        <a class="button is-link" @click="logout">
            Log out
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            // @ts-ignore
            this.$router.push('/');
        }
    }
}
</script>

<style>
</style>