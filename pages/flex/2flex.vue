<template>
    <div class="center">
        <h1>
            <nuxt-link to="/flex/3flex">2.flex布局-综合例子</nuxt-link>
        </h1>
        <h2>1在主轴上如何伸缩：flex</h2>
        <div>
            <h2>1.1：<span> flex: 1 ; flex: 2 ; flex: 2 ;</span></h2>
            <div class="dad-1-1" style="justify-content: flex-start;">
                <div class="son-1" style="flex: 1">120*120</div>
                <div class="son-2" style="flex: 2">80*80</div>
                <div class="son-3" style="flex: 2">100*100</div>
            </div>
            <h2>1.2：单值<span>flex-basis 10rem ;flex-basis 100px ; </span></h2>
            <div class="dad-1-1" style="justify-content: center;">
                <div class="son-1" style="flex-basis:10rem;">120*120</div>
                <div class="son-2" style="flex-basis: 100px;">80*80</div>
                <div class="son-3" style="flex-basis:content">100*100</div>
            </div>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">


</script>

<style>
    div{
        border-radius: 8px;
    }
    span {
        color: #ed503b;
    }
    .center{

    }
    .dad-1-1{
        width: 50%;
        height: 200px;
        display: flex;
        align-items: center;
        background-color: #35495e;
    }

    .son-1{
        height: 100px;
        background-color: #20A0FF;
    }
    .son-2{
        height: 100px;
        background-color: #5EB147;
    }
    .son-3{
        height: 100px;
        background-color: #F4CF60;
    }

    .son-1-1{
        width: 120px;
        background-color: #20A0FF;
    }
    .son-1-2{
        width: 80px;
        background-color: #5EB147;
    }
    .son-1-3{
        width: 100px;
        background-color: #F4CF60;
    }

</style>