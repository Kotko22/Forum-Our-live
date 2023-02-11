// let hello = "Hello."
// let name = "My name is Bob."
// let old = "My age is one day."
// let life = "I live in the computer."
// let phone = "My number phone +7 968 012 54-41."
// console.log (hello + " " + name + " " + old + " " + life + " " + phone)

// let num1 = 5
// let num2 = 2
// let num3 = '3'
// console.log (num1 % num2)
// console.log (num1 ** num2)
// console.log (num1 + num2 + num3)
// console.log (num1 > num2) 
// console.log (num1 != num2)
// console.log (num1 <= num2)

// let str1 = 'Папугай'
// let str2 = 'Слон'
// console.log (str1 > str2)

// let answer = prompt ('Укажите ваш возрост')
// if (answer < 18){
//     console.log ('Как дела в школе?')
// }
// else {
//     console.log ('Не женился еще?')
// }

// console.log (true && true)
// console.log (false && true)

// console.log (true || true)
// console.log (false || true)
// console.log (false || !false)

// let season = prompt ('Введите число')
// switch (season){
//     case '1':
//         console.log ('зима')
//         break
//     case '2':
//         console.log ('весна')
//         break
//         case '3':
//             console.log ('лето')
//             break
//         case '4':
//             console.log ('осень')
//             break
// }

// let number = prompt ('Введите число')
// if (number <= 10){
//     console.log ('Это число в первой декаде')
// }
// if (number <= 20 && number >= 11 ) {
//     console.log ('Это число во второй декаде')
// } 
// if (number >= 21 && number <= 31 ) {
//     console.log ('Это число в третей декаде')
// }
// else {
//     console.log('Надо ввести число от нуля до 31')
// }

// let i = 0
//     do {
//         console.log(i)
//         i ++
//     }
//     while (i < 3){
// }

// for (let i = 0; i < 3; i++){
//     console.log (i)
// }

// for (let i = 0; i <= 10; i++){
//     console.log (i)
// }



// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0 ){
//         console.log(i)
//     }
// }



// const numbers = [1,2,3,4,5]
// const fruts = ["Яблоко","Банан","Апельсин"]
// fruts.shift('Яблоко')
// fruts.push('Киви')
// console.log (fruts)
// console.log (fruts[0])
// console.log (fruts)
// console.log (fruts.length)



// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 1){
//         console.log (i)
//     }
// }

// // let num1 = 3
// // let num2 = 5
// function calcsum (num2, num1){
//     let sum = num2 + num1
//     console.log(sum)
// }
// calcsum(3,5)



// let compare = (num1, num2) =>{
//     if (num1 > num2){
//         return('Первое число больше.');
//     }
//     else if (num1 < num2) {
//         return('Второе число больше.');
//     }
//     else {
//         return('Числа равны.');
//     }
// }

// console.log(compare(2,2))


// const pupil = 
//     // {
//     //     FirstName: 'Ваня',
//     //     LastName: 'Иванов',
//     //     Address: 'Ленина 1',
//     //     Age: 16
//     // },

//     {
//         FirstName: 'Татьяна',
//         LastName: 'Смернова',
//         Address: {
//             street: 'Пушкина',
//             houseNum: '4'
//         },
//         Age: 17
//     }

//     {
//         FirstName: 'Саша',
//         LastName: 'Никитин',
//         Address: 'Маяковского 14',
//         Age: 15
//     }

// pupil.isgirl = true

// delete pupil.LastName

// console.log(pupil.Address.street)

// console.log(pupil)

// pupil.forEach((Person) => { 
//     console.log(Person.FirstName  )
// }
// )

// const AddresS = pupil.map((Person) => {
//     Person.Age * 2
// }) 
// console.log (AddresS)

// const demandedAge = pupil.filter((Person) => {
//     if (Person.Age >= 16){
//         return true
//     }
// // })
// console.log(demandedAge)

// const firstCandidate = pupil.find((Person) => {
//     if (Person.Age >= 16){
//         return true
//     }
// })
// console.log(firstCandidate)

// const firstCandidateIndex = pupil.findIndex((Person) => {
//     if (Person.Age >= 16){
//         return true
//     }
// })
// console.log(firstCandidateIndex)

// const arr = [1,2,3,4,5]

// let result = arr.reduce((sum, current) => sum + current)
// console.log(result)

// const arrFactorial = [1,2,3,4,5]

// let resultFactorial = arrFactorial.reduce((sum, current) => sum * current)
// console.log(resultFactorial)

// let men = prompt ('Введите имя')
// let lastname = prompt ('Введите фамилию')
// let number = prompt ('Введите возраст')

// const log = []

// log.push(men)
// log.push(lastname)
// log.push(number)

// console.log(log)

// let inform = {
//     firstName:'Василий',
//     lastName:'Петров',
//     age: 17,
//     sayName(){
//         console.log(this.firstName)
//     }
// }

// inform.sayName()

let car = {
    model:'BMW',
    gasTank:{
        value: 80,
        gas: 50,
        gasConsumption: 15 / 100,
    },
    carModel(){
        console.log(this.model)
    },
    refuel(gasValue){
        let result 
        if (gasValue <= this.gasTank.value){
            result = this.gasTank += gasValue
        }
        else{
            console.log('Бак переполнен')
        }
        return `Сейчас в баке ${this.gasTank.gas} литров бензина.`
    },
    trip(km){
        if (km * this.gasConsumption > this.gasTank.gas){
            let result = this.gasTank.gas / this.gasConsumption
            this.gasTank = 0
            return `Бензобак пуст, осталось ехать ${km-result} километров.`
        }
        else{
            this.gasTank.gas - km * this.gasConsumption
            return`Проехали ${km}. Осталось ${this.gasTank.gas} литров бензина.`
        }
    }
}

console.log (`Модел: ${car.model}`)

console.log (car.refuel(30))
console.log (car.trip(100))
