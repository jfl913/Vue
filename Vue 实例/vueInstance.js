var obj = {
    foo: 'bar'
}

Object.freeze(obj)

var app = new Vue({
    el: '#app',
    data: obj
})

var exampleData = {
    message: '实例属性'
}
var exampleVue = new Vue({
    el: '#example',
    data: exampleData
})

if (exampleVue.$data === exampleData) {
    console.log("exampleVue.$data == exampleData")
} else {
    console.log("exampleVue.$data != exampleData")
}

if (exampleVue.$el === document.getElementById('example')) {
    console.log("exampleVue.$el == document.getElementById('example')")
} else {
    console.log("exampleVue.$el != document.getElementById('example')")
}

exampleVue.$watch('message', function (newValue, oldValue) {
    console.log("newValue: " + newValue)
    console.log("oldValue: " + oldValue)
})

var lifeCycleVue = new Vue({
    el: '#lifeCycle',
    data: {
        message: '生命周期'
    },
    created: function () {
        console.log("created message: " + this.message)
    },
    mounted: function () {
        console.log("mounted message: " + this.message)
    },
    updated: function () {
        console.log("updated message: " + this.message)
    },
    destroyed: function () {
        console.log("destroyed message: " + this.message)
    }
})