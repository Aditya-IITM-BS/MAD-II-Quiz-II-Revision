// Q1.

// var num = 15;

// const obj = {
//   num: 8,

//   func: function () {
//     console.log("Number 1:", this.num, "Number 2:", num);
//   },
// };
// obj.func.call();

// What will be the output of the above program, if it is executed in a
// browser and in a node.js, respectively?

// For browser: Number 1: undefined Number 2: 15
// For node.js: Number 1: 15 Number 2: 15

// For browser: Number 1: 8 Number 2: 15
// For node.js: Number 1: 15 Number 2: 15

// For browser: Number 1: undefined Number 2: 15
// For node.js: Number 1: 8 Number 2: 15

// For browser: Number 1: 8 Number 2: 15
// For node.js: Number 1: 8 Number 2: 15

// Q2.
// predict the output of the statements mentioned in the program?

function quiz() {
  var a = 10;
  let b = (c = 20);
  console.log(b); // Statement 1
}
quiz();
console.log(c); // Statement 2
console.log(a); // Statement 3

// Statement 1: 20
// Statement 2: 20
// Statement 3: 10

// Statement 1: 20
// Statement 2: 20
// Statement 3: Reference Error

// Statement 1: 20
// Statement 2: Error
// Statement 3: Control will not reach till statement 3

// Statement 1: Error
// Statement 2: Control will not reach till statement 2
// Statement 3: Control will not reach till statement 3

// Q3.

// async function Demo(str) {
//   let r = await new Promise((res, rej) => {
//     res(str);
//   });
//   return r;
// }

// Demo("Hello").then((val) => {
//   console.log(val);
// });

// console.log("World");

//   Hello
//   World

//   World
//   Hello

//   Hello

//   World

// Q4.

// const a = new Vue({
//   el: "#app",
//   template: `
//   <div>
//     <input v-model = "data" />
//     <p> Number of refreshes: {{refreshes}} </p>
//   </div>`,
//   data: {
//     data: "",
//     refreshes: 0,
//   },
//   methods: {},
//   mounted: function () {
//     if (sessionStorage.data) {
//       this.data = "suffix" + sessionStorage.data.slice(1, 5); // 1 -> suffixndef ; 2 -> suffixuffi
//       this.refreshes = (Number(sessionStorage.refreshes) % 3) - 1; // 1-> 1 ; 2 -> 0
//     } else {
//       this.data = sessionStorage.data + "prefix"; //0 -> undefinedprefix
//       this.refreshes = (Number(sessionStorage.refreshes) % 3) + 1; // 0 -> NaN
//     }
//     if (isNaN(this.refreshes)) this.refreshes = 2; // 0 -> 2
//     sessionStorage.data = this.data;
//     sessionStorage.refreshes = this.refreshes;
//   },
// });
// explain && , || ; truthy falsy

/* Say you open the file “index.html” in the browser, and enter the text “study” in 
the text box shown (after removing the existing text from the input box, if any). 
After that, you refresh the page twice. What be the text shown in the text input box, 
and the value of the “refreshes” placeholder, respectively? */

// suffixndef, 0
// suffixndef, -1
// suffixuffi, 0
// suffixuffi, -1

// Q5.

// https://www.boredapi.com/api/activity
// https://httpstat.us/404
// fetch("https://randomwebsite/api/activity")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => processData(data))
//   .then((result) => console.log(result))
//   .catch((error) => {
//     // This catch handles errors from the above Promise chain
//     console.log("Error occurred");
//   })
//   .then(() => {
//     console.log("This block always executes");
//   })
//   .catch((anotherError) => {
//     // This catch handles any errors that occur after the first catch
//     console.log("Another error occurred:", anotherError);
//   });

// Q6. predict the output, if executed

// async function test(x) {
//   let a = await new Promise((r) => r((4 && x) || 9)).catch((e) => e);
//   let b = await new Promise((res, rej) => {
//     if (a > 2) rej(8 || (a && 5));
//     else res(5 && a);
//   }).catch((e) => e);
//   console.log(a, b);
//   return 5 && a;
// }
// test(7)
//   .then(
//     (rej) => {
//       console.log("Promise rejected with the answer", rej);
//     },
//     (res) => console.log("Promise resolved with the answer", res)
//   )
//   .then((data) => {
//     console.log("New value:", data);
//     return "Promise";
//   })
//   .catch((e) => {
//     throw new Error("Error 1");
//   })
//   .finally((data) => {
//     console.log("New Value:", data);
//   })
//   .then((data) => console.log("New Value:", data))
//   .finally(() => console.log("End of Program"));

// 7 8
// Promise rejected with the answer 8
// New value: undefined
// New Value: Promise
// New Value: 15
// End of Program

// End of Program
// 7 8
// Promise rejected with the answer 7
// New value: undefined
// New Value: undefined
// New Value: Promise

// 7 8
// Promise rejected with the answer 7
// New value: undefined
// New Value: undefined
// New Value: Promise
// End of Program

// 7 8
// Promise rejected with the answer 5
// New value: undefined
// New Value: Promise
// New Value: 15
// End of Program

// Q7.

// var x = 20;

// const y = {
//   x: 40,
//   func: function (x) {
//     console.log("Value is:", x);
//   },
// };

// const z = {
//   x: 40,
//   func: () => {
//     console.log("Value is:", x);
//     y.func.call(this);
//   },
// };

// z.func.apply(y);

// Value is: 40
// Value is: undefined

// Value is: 40
// Value is: 20

// Value is: 20
// Value is: 40

// Value is: 20
// Value is: undefined

// Q8. Consider the below javascript program, and predict the output
// assuming the variable “random_num” always has a value greater than 8.

// const num = "8";

// new Promise((rej, res) => {
//   const random_num = Math.floor(Math.random() * 10);

//   if (random_num == num) rej(random_num);
//   else res(num + num);
// })
//   .then(
//     (msg) => console.log("Some Data Came"),
//     (msg) => console.log("Some Data Lost")
//   )
//   .then((data) => {
//     console.log("Data Sent");
//     return data;
//   })
//   .then((num) => console.log(num));

// Some Data Came
// Some Data Lost
// Some Data Lost

// Some Data Came
// Data Sent
// Data Sent

// Some Data Came
// Data Sent
// undefined

// Some Data Lost
// Data Sent
// undefined

// Some Data Lost
// undefined
// Data Sent

// Q9. Suppose the application is running on port 8080.
// What will be rendered inside router-view for the URL
// “http://127.0.0.1:8080/#/profile/5”?

// const Home = { template: `<div> Hello World </div>` };
// const Error = { template: `<div> Page Not Found</div>` };
// const Profile = {
//   template: `<div>
//                  <div v-if='user'>
//                      Name: {{user.name}}, State: {{user.state}}
//                  </div>
//                  <div v-else>
//                      Unknown User
//                  </div>
//              </div>`,
//   data() {
//     return {
//       users: [
//         { id: "1", name: "Narendra", state: "UP" },
//         { id: "2", name: "Abhishek", state: "Delhi" },
//       ],
//     };
//   },
//   computed: {
//     user() {
//       let user = this.users.find((usr) => {
//         return usr.id == this.$route.params.id;
//       });
//       return user;
//     },
//   },
// };

// const routes = [
//   { path: "/", component: Home },
//   { path: "/profile/:id", component: Profile },
//   { path: "*", component: Error },
// ];

// const router = new VueRouter({
//   routes,
// });

// new Vue({
//   el: "#app",
//   router,
//   template: `<router-view></router-view>`,
// });

// Page Not Found
// Name: Narendra, State: UP
// Name: Abhishek, State: Delhi
// Unknown User

// Q10.

const Create = {
  template: `<div>{{message}}</div>`,
  computed: {
    message() {
      return this.$route.query.update
        ? "This is create page"
        : "This is update page";
    },
  },
};
const router = new VueRouter({
  routes: [{ path: "/", component: Create }],
});

new Vue({
  el: "#app",
  router,
});

// Suppose the application is running on “http://127.0.0.1:8080”. What will be the value of message property of Create component for “http://127.0.0.1:8080/#/?update=true” ?

// “This is create page”
// “This is update page”
// null
// None of the above.

// Q11.
// Consider the following Vue application with script app.js and markup index.html.

// const fruits = ["Apple", "abiu", "Acrola", "ackee"];

// const app = new Vue({
//   el: "#app",
//   template: `<div>
//   <input
//     type="text"
//     placeholder="search for fruits"
//     v-model="filter_text"
//   />
//   <ul v-for="fruit in fruits_temp">
//     <li>{{fruit}}</li>
//   </ul>
// </div>`,
//   data: {
//     fruits: ["Apple", "abiu", "Acrola", "ackee"],
//     fruits_temp: [...fruits],
//     filter_text: "",
//   },
//   watch: {
//     filter_text() {
//       this.fruits_temp = this.fruits.filter((fruit) => {
//         return this.filter_text
//           ? fruit.startsWith(this.filter_text == "A" ? "a" : "A")
//           : this.fruits;
//       });
//     },
//   },
// });

// Suppose the application is running on http://localhost:8080”.
// What will be rendered if the user types ‘A’ in the input box?

// abiu
// ackee

// Apple
// Acrola

// Apple
// abiu
// Acrola
// ackee

// None of the above
async function processData(data) {
  return await JSON.stringify(data);
}
