<template>
    <div class="messageBox">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <div @touchstart="handleCancel">取消</div>
            <div @touchstart="handleOk">切换城市</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageBox"
    }
</script>

<style scoped>
    .messageBox {
        width: 200px;
        height: 120px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        position: absolute;
        left: 0px;
        right: 0;
        top: 0;
        bottom: 0;
        box-shadow: 2px 2px 2px 2px #ccc;
        margin: auto;
    }

    .messageBox h2 {
        text-align: center;
        line-height: 40px;
        font-size: 18px
    }

    .messageBox p {
        text-align: center;
        line-height: 40px
    }

    .messageBox > div {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px #ccc solid
    }

    .messageBox > div div {
        flex: 1;
        text-align: center;
        line-height: 30px;
        border-right: 1px #ccc solid
    }

    .messageBox > div div:last-child {
        border: none
    }

</style>