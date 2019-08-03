<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name: "Scroller",
        props:{
            toScroll:{
                type: Function,
                default: function () {
                }
            },
            toTouchEnd:{
                type: Function,
                default: function () {
                }
            }
        },
        mounted() {
            var scroll = new BScroll(this.$refs.wrapper,{
                click: true,
                probeType: 1
            });
            this.scroll = scroll;
            scroll.on('scroll',(pos)=>{
                this.toScroll(pos)
            });
            scroll.on('touchEnd',(pos)=>{
                this.toTouchEnd(pos)
            });
        },
        methods:{
            toScrollTop(y){
                return this.scroll.scrollTo(0,y)
            }
        }
    }
</script>



<style scoped>
.wrapper{height: 100%}
</style>