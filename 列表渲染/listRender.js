var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})

var vForObject = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'Li',
            lastName: 'Junfeng',
            age: 30
        }
    }
})

var filterID = new Vue({
    el: '#filter-id',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})

var spanID = new Vue({
    el: '#span-id'
})