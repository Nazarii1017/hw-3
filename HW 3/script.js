//1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. 

function getProduct(arr) {
  let res = 1;
  for (i = 0; i <= arr.length - 1; i++) {
    res = res * arr[i];
  }
  return res;
}

getProduct([2, 3, 4, 5]);


//Також реалізуйте завдання через while.

function getProduct(arr) {
  let i = 0;
  let res = 1;

  while (arr[i]) {
    res *= arr[i];
    i++;
  }
  return res;
}

getProduct([2, 3, 4, 5]);
//2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
Sample Output:
"0 is even"
"1 is odd"
"2 is even" 
for (i = 0; i <= 15; i++) {
  console.log(i % 2 === 0 ? `${i} even` : `${i} odd`);
};

 //Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

function getRandom(min = 1, max = 500) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function randArray(k) {
  let newArray = [];
  
  for (i = 0; i <= k - 1; i++) {
    newArray.push(getRandom());
  }
  console.log(newArray)
  return newArray;
};

randArray(10)


//4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.


function raiseToDegree() {
 const a = prompt("Please enter a", '');
 const b = prompt("Please enter b", '');
  
 alert(Math.pow(a, b))
 return Math.pow(a, b);
}

raiseToDegree();


//5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4

function findMin(...arguments) {
  let minNumber = 0;
  for (let i = 0; i <= arguments.length; i++) {
    if(minNumber > arguments[i]) {
      minNumber = arguments[i];
    }
  }
  return minNumber;
  
}

findMin(12, 14, 4, -4, 0.2); // => -4


//6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.


function findUnique(arr) {
  console.log([... new Set(arr)])
  const getUnque = [... new Set(arr)];
  if (getUnque.length === arr.length) {
    console.log('true');
    return true
  }
  console.log('false');
  return false;
}

findUnique([1, 2, 3, 5, 3]);  //f
findUnique([1, 2, 3, 5, 11]); //t



//7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.


function getLast(arr, number = 1) {

  return arr.slice(-number);
}

getLast([3, 4, 10, -5]);


//8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.


function camelCase(string) {
  const arrayStr = string.split(' ');
  const upperCasedArray = []
  for (i = 0; i <= arrayStr.length - 1; i++) {
    upperCasedArray.push(arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].slice(1))
  }
  return upperCasedArray.join(' ');
}

camelCase('i love java script');
