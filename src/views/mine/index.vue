<template>
    <div id="main">
        <Header title="我的喵喵"></Header>
        <div id="content">
            <Login></Login>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import Header from '@/components/header';
    import TabBar from '@/components/tabBar';
    import Login from '@/components/login';

    export default {
        name: "Mine",
        components: {
            Header,
            TabBar,
            Login
        }
    }
</script>

<style scoped>

</style>