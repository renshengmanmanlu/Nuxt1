<template>
    <div class="center">
        <h2>1父容器</h2>
        <div class="dad1">
            <div class="son-2">80*80</div>
        </div>
        <hr style="margin: 20px">
        <div>
            <h3>设置子容器沿主轴排列</h3>
            <h4>(位置排列)</h4>
            <h2>1.1：<span>justify-content:flex-start 起始端对齐</span></h2>
            <div class="dad-1-1" style="justify-content: flex-start;">
                <div class="son-1">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
            <h2>1.2：<span>justify-content:center 居中对齐</span></h2>
            <div class="dad-1-1" style="justify-content: center;">
                <div class="son-1">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
            <h2>1.3 ：<span>justify-content:flex-end 末尾段对齐</span></h2>
            <div class="dad-1-1" style="justify-content: flex-end;">
                <div class="son-1">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
            <h4>(分布排列)</h4>
            <h2>1.4 ：<span>justify-content: space-around 子容器沿主轴均匀分布，位于首尾两端的子容器到父容器的距离是子容器间距的一半。</span></h2>
            <div class="dad-1-1" style="justify-content: space-around;">
                <div class="son-1">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
            <h2>1.5 ：<span>justify-content:center space-between 子容器沿主轴均匀分布，位于首尾两端的子容器与父容器相切。</span></h2>
            <div class="dad-1-1" style="justify-content: space-between;">
                <div class="son-1">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
        </div>
        <hr style="margin: 20px">
        <div>
            <h3>设置子容器如何沿交叉轴排列：align-items</h3>
            <span>(位置排列)</span>
            <h2>2.1：<span>align-items:flex-start 起始端对齐</span></h2>
            <div class="dad-1-1" style="align-items: flex-start;">
                <div class="son-1">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
            <h2>2.2：<span>align-items:center 居中对齐</span></h2>
            <div class="dad-1-1" style="align-items: center;">
                <div class="son-1">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
            <h2>2.3 ：<span>align-items:flex-end 末尾段对齐</span></h2>
            <div class="dad-1-1" style="align-items: flex-end;">
                <div class="son-1">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
            <h2>2.4 ：<span>align-items: baseline 基线对齐，这里的 baseline 默认是指首行文字</span></h2>
            <div class="dad-1-1" style="align-items: baseline;">
                <div class="son-1" style="padding-top: 20px">120*120</div>
                <div class="son-2">80*80</div>
                <div class="son-3">100*100</div>
            </div>
            <h2>2.5 ：<span>align-items:stretch：子容器沿交叉轴方向的尺寸拉伸至与父容器一致。</span></h2>
            <div class="dad-1-1" style="align-items: stretch;">
                <div class="son-1-1">120*120</div>
                <div class="son-1-2">80*80</div>
                <div class="son-1-3">100*100</div>
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
    .dad1 {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #35495e;
    }
    .dad-1-1{
        width: 400px;
        height: 200px;
        display: flex;
        align-items: center;
        background-color: #35495e;
    }

    .son-1{
        width: 120px;
        height: 120px;
        background-color: #20A0FF;
    }
    .son-2{
        width: 80px;
        height: 80px;
        background-color: #5EB147;
    }
    .son-3{
        width: 100px;
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