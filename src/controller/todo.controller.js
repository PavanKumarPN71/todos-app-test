// //const todoModel = require("../model/todo.model");
// const TodoModel = require("../model/todo.model");

// const getAllTodos = async (req, res) => {
//     try {
//         const todos = await TodoModel.find();
//         return res.send(todos)
//     } catch (error) {
//         return res.send(error)
//     }
// }



// const createTodo = async (req, res) => {
//     try {
//         const createdTodo = new TodoModel(req.body);
//         const todo = await createdTodo.save();
//         return res.send(todo)
//     } catch (error) {
//         return res.send(error)
//     }
// }

// const getTodoById = async(req, res) => {
//     try {
//         const {id} = req.params;
//         const foundItem = await TodoModel.findById(id)
//         if(foundItem){
//             return res.send(foundItem)
//         }
//         return res.send({message : "unable to find item for " + id})
//     } catch (error) {
//         return res.send(error)
//     }
// }

// const deleteTodoById = async(req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedItem = await TodoModel.findByIdAndDelete(id)
//         return res.send(deletedItem)
//     } catch (error) {
//         return res.send(error)
//     }
// }

// const updateById = async(req,res)=>{
//         try {
//           const {label,status} = req.body;
//           const {id} = req.params;
//           const foundUser = await UserModel.findOne({_id : id})
//           if(foundUser){
//             const updatedUser = await UserModel.findByIdAndUpdate(id, {$set : { label, status }})
//             //console.log("Updated User -> ", updatedUser);
//             return res.send(updatedUser);
//           }else{
//             return res.send(new Error("Unable to find User for ID - " + id))
//           }
//         } catch (err) {
//           return res.send(err)
//     }
// }



// module.exports = { getAllTodos, createTodo , getTodoById ,deleteById ,updateById }

const TodoModel = require("../model/todo.model");

const getAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        return res.send(todos)
    } catch (error) {
        return res.send(error)
    }
}

const createTodo = async (req, res) => {
    try {
        const createdTodo = new TodoModel(req.body);
        const todo = await createdTodo.save();
        return res.send(todo)
    } catch (error) {
        return res.send(error)
    }
}

const getTodoById = async(req, res) => {
    try {
        const {id} = req.params;
        const foundItem = await TodoModel.findById(id)
        if(foundItem){
            return res.send(foundItem)
        }
        return res.send({message : "unable to find item for " + id})
    } catch (error) {
        return res.send(error)
    }
}

const deleteTodoById = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await TodoModel.findByIdAndDelete(id)
        return res.send(deletedItem)
    } catch (error) {
        return res.send(error)
    }
}

const updateTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await TodoModel.findByIdAndUpdate(id, req.body)
        const foundItem = await TodoModel.findOne({_id : id})
        return res.send(foundItem);
    } catch (error) {
        console.log(error)
        return res.send(error)
    }
}

module.exports = { getAllTodos, createTodo, getTodoById, deleteTodoById, updateTodoById }