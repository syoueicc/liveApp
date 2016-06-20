<style>
</style>
<template>
    <div tabindex="-1" style="position: fixed; outline: 0px; left: 515px; top: 323px; z-index: 1027;display:{{show}}" class="ui-popup ui-popup-modal ui-popup-show ui-popup-focus">
    <div i="dialog" class="ui-dialog" style="min-width:300px">
        <div class="ui-dialog-arrow-a"></div>
        <div class="ui-dialog-arrow-b"></div>
        <table class="ui-dialog-grid" style="width:100%">
        <tbody>
            <tr>
            <td i="header" class="ui-dialog-header">
                <button i="close" class="ui-dialog-close" title="取消" @click="close">×</button>
                <div i="title" class="ui-dialog-title" id="title:art_dialog">提示</div></td>
            </tr>
            <tr>
            <td i="body" class="ui-dialog-body">
                <div i="content" class="ui-dialog-content" id="content:art_dialog">{{content}}</div></td>
            </tr>
            <tr>
            <td i="footer" class="ui-dialog-footer">
                <div i="statusbar" class="ui-dialog-statusbar" style="display: none;"></div>
                <div i="button" class="ui-dialog-button">
                <button type="button" data-id="ok" autofocus="" class="ui-dialog-autofocus" @click="close">确定</button></div>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
</template>
<script>

export default {
    props: ["show", "content"],
    methods: {
        close() {
            this.show = "none";
        }
    }
}

</script>