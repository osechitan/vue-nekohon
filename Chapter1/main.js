var app = new Vue({
    el: '#app',
    data: {
        list: ['りんご', 'ばなな', 'いちご'],
        message: '初期メッセージ',
        show:true
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        }
    }
})