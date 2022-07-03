let personalDetails = {
  name: "David",
  age: "22",
  stack: {
    frontend: "ReactJs",
    backend: "NodeJs with Express",
  },
};
let {
  name,
  age,
  stack: { frontend, backend },
} = personalDetails;

document.getElementById(
  "txt"
).textContent = `My name is ${name} and I am ${age} years old
 I use ${frontend} and ${backend}`;
