class Todo{
    todoList=[];
    addItem(item){
        this.todoList.push(item);
    }

    getItem(){
        return this.todoList;
    }

    removeItem(index){
        this.todoList.splice(index, 1)
    }

    resetList(){
        this.todoList = []
    }

}

module.exports = Todo;