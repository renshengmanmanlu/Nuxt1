<template>
    <div>
        <h1>
            <nuxt-link to="/flex/1flex">2.flex布局-父容器</nuxt-link>
        </h1>
        <div class="content">

            <div class="flex-l">
                <div class="border-frame"><input type="text" placeholder="请输入你的姓名">
                    <button>提交</button>
                </div>
            </div>
            <div class="flex-r">
                <div class="border-frame" style="height: inherit">
                    <div style="flex: 1;background-color: #5EB147;display: flex;justify-content: center;align-items: center;">
                        <span style="display: flex;justify-content: center;align-items: center;">1</span>
                    </div>
                    <div style="flex: 2;background-color: #93ff42;display: flex;flex-wrap:wrap;justify-content: space-around;align-items: center; ">
                        <span style="display: flex;justify-content: center;align-items: center;">1</span>
                        <span style="display: flex;justify-content: center;align-items: center;">2</span>
                        <span style="display: flex;justify-content: center;align-items: center;">3</span>
                        <span style="display: flex;justify-content: center;align-items: center;">4</span>
                        <span style="display: flex;justify-content: center;align-items: center;">5</span>

                    </div>
                    <div style="flex: 3;background-color: #8bb120;"><span>3</span></div>
                </div>
            </div>
        </div>
    </div>

</template>


<script type="text/ecmascript-6">


</script>

<style>
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vmax - 45px);
        background-color: #00BCD4;
    }

    .flex-l {
        flex: 1;
        background-color: rgba(0, 0, 0, .1);
        height: inherit;
    }

    .flex-r {
        flex: 1;
        background-color: rgba(0, 0, 0, .2);
        height: inherit;
    }

    .border-frame {
        display: flex;
        width: inherit;
        height: 2rem;
    }

    .border-frame input {
        flex: 1;
    }

    .border-frame button {
        width: 100px;
        background-color: rgba(237, 55, 44, 0.4);
    }

    .border-frame span {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 2555, .6);
    }

</style>