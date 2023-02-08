# Translation

## Duplicate words count

Devnagri platform counts the duplicate words and handles all repetitive sentences translation.

**How do we calculate duplicate words?**

Duplicate word count is calculated on the basis of repetitive sentences.

Example,

Source sentences in an order:

1. <span style="color: red;">Apple is red color</span>
2. <span style="color: red;">Apple is red color</span>
3. <span style="color: red;">Apple is red color</span>
4. <span style="color: blue">Banana is rich in potassium</span>
5. <span style="color: blue">Banana is rich in potassium</span>
6. <span style="color: green">An apple a day keeps the doctor away</span>

**Duplicate words count: 13**

### Explanation

Segments 1., 2., 3. are same as well as 4., 5. are same

Segment 1. is repeated 2 more times in the order, which contains 4 words in it.

i.e. duplicate words count = **2 x 4 = 8** (<span style="color: red;">Apple is red color, Apple is red color</span>)

Segment 4. is repeated 1 more time, which contains 5 words in it

i.e. duplicate words count = **1 x 5 = 5** (<span style="color: blue">Banana is rich in potassium</span>)

Total duplicate words in the order = **8 + 5 = 13**
