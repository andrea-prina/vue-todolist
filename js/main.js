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
            ],

            newTask : ""
        },

        methods : {

            removeTaskItem : function(itemIndex){
                this.todos.splice(itemIndex, 1); //Remove only 1 element from index position itemIndex
            },

            addNewTaskItem : function(taskText){
                const taskItem = {
                    text : taskText,
                    done : false
                }

                this.todos.push(taskItem);
                this.newTask = "";
            },

            invertDoneStatus : function(itemIndex){
                this.todos[itemIndex].done = !this.todos[itemIndex].done;
            }
        }
    }
)