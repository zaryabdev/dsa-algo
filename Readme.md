https://downloadlynet.ir/2023/21/100685/07/the-nuts-and-bolts-of-oauth-2-0/21/?#/100685-udemy-152400105708.html

Top 100 Liked Qs
https://leetcode.com/problemset/?listId=79h8rn6&page=1&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJBQ19SQVRFIn1d

https://leetcode.com/studyplan/top-interview-150/

https://leetcode.com/studyplan/leetcode-75/

https://leetcode.com/problems/max-consecutive-ones/description/

https://leetcode.com/problems/max-consecutive-ones-ii/description/

https://leetcode.com/problems/max-consecutive-ones-iii/description/

https://www.youtube.com/watch?v=ClwGJNU3Yak

```js
const user1 = {
    name: "Arthur",
};
const user2 = {
    name: "Bob",
};
const people = [user1, user2, user1, { name: "Joe" }];

const knowObjects = new Map();

const generate = function* () {
    while (true) {
        const random = Math.random().toString(16).slice(2, 8);
        yield `0x${random}`;
    }
};
const generator = generate();

const refs = {};

const findRef = (object) => {
    let address;
    if (knowObjects.has(object)) {
        address = knowObjects.get(object);
    } else {
        address = generator.next().value;
        knowObjects.set(object, address);
        refs[address] = object;
    }
    return address;
};
const references = people.map((p) => findRef(p));

document.getElementById("app").innerHTML = `
<h1>Hello Youtube!</h1>
<div>
  <pre>${JSON.stringify(people, null, 0)}</pre>
  <pre>${JSON.stringify(references, null, 1)}</pre>
  <pre>${JSON.stringify(refs, null, 1)}</pre>
</div>
`;
```
