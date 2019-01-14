var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!'
    }
});

var copyApp = new Vue({
    el:'#copyApp',
    data:{
        copyMessage:'Copy Hello Vue! ' + new Date().toLocaleString(),
        copyMessage2: 'Copy Hello Vue2!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message:'页面加载于 ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var copyApp3 = new Vue({
    el: '#copyApp-3',
    data: {
        show: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: '学习 JavaScript'},
            {text: '学习 Vue'},
            {text: '整个牛项目'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: "Hello Vue.js!",
        palindromeMessage: "黄山落叶松叶落山黄"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join(''),
            this.palindromeMessage = this.palindromeMessage.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其他什么吃的东西'}
        ]
    }
});