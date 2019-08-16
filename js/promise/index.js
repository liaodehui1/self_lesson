// function promiseClick(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }

// promiseClick().then(
//     function(data){
//         console.log('resolved成功回调');
//         console.log('成功回调接受的值：',data);
//     }, 
//     function(reason){
//         console.log(reason)
//         console.log('rejected失败回调');
//         console.log('失败执行回调抛出失败原因：',reason);
//     }
// );


// function promiseClick1(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }
//    function promiseClick2(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }
//    function promiseClick3(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }

// let p=Promise
//     .all([promiseClick3(), promiseClick2(), promiseClick1()])
//     // .then(function(results){
//     //     console.log(results);
//     // })
//     // .catch(reason=>{
//     //     console.log(reason)
//     // });
//     console.log(p)

function promiseClick1(){
    console.log('promiseClick1')
    let p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var num = Math.ceil(Math.random()*20); //生成1-10的随机数
            console.log('2s随机数生成的值：',num)
            if(num<=10){
                resolve(num);
            }
            else{
                reject('2s数字太于10了即将执行失败回调');
            }
        }, 2000);
       })
       return p
   }
   function promiseClick2(){
    console.log('promiseClick2')
    let p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var num = Math.ceil(Math.random()*20); //生成1-10的随机数
            console.log('3s随机数生成的值：',num)
            if(num<=10){
                resolve(num);
            }
            else{
                reject('3s数字太于10了即将执行失败回调');
            }
        }, 3000);
       })
       return p
   }
   function promiseClick3(){
    console.log('promiseClick3')
    let p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var num = Math.ceil(Math.random()*20); //生成1-10的随机数
            console.log('4s随机数生成的值：',num)
            if(num<=10){
                resolve(num);
            }
            else{
                reject('4s数字太于10了即将执行失败回调');
            }
        }, 4000);
       })
       return p
   }

Promise
    .race([promiseClick3(), promiseClick2(), promiseClick1()])
    .then(function(results){
        console.log(results);
    },function(reason){
        console.log(reason);
    });