const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

const jobs = [
  { id: 1, company: "Google" },
  { id: 2, company: "Amazon" }
];

jobs.map((job) => {
  return <div>{job.company}</div>
})
```

This creates:
```
[
  <div>Google</div>,
  <div>Amazon</div>
]