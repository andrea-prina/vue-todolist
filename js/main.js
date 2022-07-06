const app = new Vue(
    {
        el : "#app",

        data : {
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        },

        methods : {
            removeTaskItem : function(itemIndex){
                this.todos.splice(itemIndex, 1) //Remove only 1 element from index position itemIndex
            }
        }
    }
)