const Todo = require("../src/todo");
const  expect  =require("chai").expect;


describe("let me start checkung with the performance of todolist",()=>{
    //Arrange
    let todo;
    beforeEach(()=>{
        todo = new Todo();
    })

    afterEach(()=>{
        todo.resetList();
    })

    it("to evaluate the item getting added",()=>{
        //Act
        todo.addItem({label:"shopping"});
        //Assert
        // expect(todo.getItems()).to.be.an("Array");
        // expect(todo.getItems()).to.have.lengthOf(1);
        expect(todo.getItem()).to.have.lengthOf(1);
    })

    it("to evaluatewhether the item is getting removed or not",()=>{
        //Act 
        todo.addItem({label:"shopping"});
        todo.removeItem(0)
        //Assert
        expect(todo.getItem()).to.have.lengthOf(0);

    })






})

