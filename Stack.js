import React, { Component } from 'react';

class StackComponent extends Component {
    componentWillMount() {
        //栈结构概念
        //栈底
        //栈顶
        //栈内数据后进先出
        //入栈 push()
        //出栈 pop()
        //栈顶 peek()
        //js实现栈结构--数组
        //[0,1,2,4,5]
        //栈底       栈顶
        
        // let a = [1, 2,3,4,5];
        // a.push(8);
        // console.log(a);
        // a.pop();
        // console.log(a);

        // var Stack =function(){
        //     let items = [];
        //     this.push = function(elemenr){
        //         items.push(element)
        //     }
        // }
        // let stack = new Stack([1,2,3]);
        // console.log( stack )

        //不改变原来数组，改变新的数组
        //concat()
        //join()
        //slice()
        //map()
        //every()
        //some()
        //filter()

        //改变原来数组
        //forEach()
        //pop()
        //push()
        //reverse()
        //shift()
        //unshift()
        //sort()
        //splice()

        //遍历数组
        //for....in...
        //for...of...

        //new Map创建一个map
        // let map = new Map( [ [1,'one'], [2,'two'],[3,'three']])
        // map.set(4,'four');

        // console.log([...map.keys()]);
        // console.log([...map.values()]);
        // console.log([ ...map ]);

        // const distinct = arr => arr.filter( (element, index, self) => {
        //     return self.indexOf( element ) === index;
        // });
        
        // let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
        // console.log(arr); // [1, 2, 3, 5, 4];

        // const distinct = arr => arr.sort().reduce( (init, current) => {
    
        //     if (init.length === 0 || init[init.length - 1] !== current) {
        //         init.push( current );
        //     }
        //     return init;
        // }, []);
        
        // let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
        // console.log(distinct(arr) ); // [1, 2, 3, 4, 5]

        // function generateFibonaccis(n) {
        //     var fib = [1, 1];
        //     for (var i = 2; i < n; i++) {
        //         fib[i] = fib[i - 2]+ fib[i - 1];
        //     }
        //     return fib;
        // }
        // var fib = generateFibonaccis(10);
        //console.log(fib.join(" "));

        // function fibonaccis(n){
        //     var fib = [1,1];
        //     for(let i =2;i<n;i++){
        //         fib[i]= fib[i-2] + fib[i-1];
        //     } 
        //     return fib
        // }
        // let fib = fibonaccis(100);
        // console.log( fib );

        // function fibonaccis(n){
        //    let fib = [1,1]
        //    for(let i=2; i<n; i++){
        //        fib[i] = fib[i-2] + fib[i-1];
        //    }
        //    return fib
        // }
        // console.log( fibonaccis(300) )

        // function fibonaccis(n){
        //     let fib = [1,1]
        //     for(let i=2;i<n;i++){
        //         fib[i]=fib[i-2] + fib[i-1]
        //     }
        //     return fib
        // }

        // console.log(fibonaccis(200));



        

    }
    render() {
        return (
            <div className="foot">
                <h1>you are StackComponent</h1>
            </div>
        );
    }
}

export default StackComponent;
