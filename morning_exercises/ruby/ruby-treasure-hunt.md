[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Documentation Treasure Hunt: Ruby Methods

![image](http://www.nothomesyndrome.com/uploads/2/1/0/0/21007102/281547392.jpg?405)

We are going finish up the week enjoying our favorite past-time -- reading [ documentation](http://ruby-doc.org/)!!
For this exercise, we'd like you to _only_ use the Ruby's docs -- that way, you get
very comfortable looking things up there.

Each correct answer is worth 1 point. Try and find the best possible solution. If you're not sure, take a guess, since you won't lose points if you're wrong.

The team with the most points after 30 minutes wins!

Ready.... Set..... Go!!!

### Quick Links for Ruby Classes:
- [Array](http://ruby-doc.org/core-2.3.0/Array.html)
- [String](http://ruby-doc.org/core-2.3.0/String.html)
- [Hash](http://ruby-doc.org/core-2.3.0/Hash.html)
- [Integer](http://ruby-doc.org/core-2.3.0/Integer.html)
- [Object](http://ruby-doc.org/core-2.3.0/Object.html)
- [DateTime](http://ruby-doc.org/stdlib-2.3.0/libdoc/date/rdoc/DateTime.html)

### The Clues (1pt Each):

1.   What method would turn "marc" into "cram"?
// .reverse

2.   What method could you use that returns a boolean to check if "pickle" includes the substring "ick"?

// .include?

3.  What method would check to see if `249092` is an odd number?

// .odd?

4.   What method would turn `"winter is coming"` into `["winter", "is", "coming"]`?

//.split

5.   What method could replace all vowels in `"banana"` and replace them with `!` so it returns `b!n!n!`?

// .gsub(/[a]/, '!')

6.  Which method can check to see if `"vanilla"` is a key for `cupcake = {"chocolate" => 4, "strawberry" => 0, "vanilla" => 3}` ?

has_key?

7.   What method can I use on `weather` to find how many key/value pairs exist in `weather = {:snow => true, :rain => false, :sun => false}` so it returns `3`?

.keys.count

8.  What method can you call on `tally` to flip the key/value pairs in `tally = {"x" => 100, "y" => 200}` into  a new hash `{100 => "x", 200 => "y"}`?



9.   What method can you call to shuffle `[2, 4, 6]` into `[4, 2, 6]`?

//.shuffle
// .sample

10.  What Array method can turn `["b","b","q"]` into `"b-b-q"`?

.join

11.   What method would return `"McDonald's"` from `"mCdONALD'S"`?

.swapcase

12.   What method can turn `{"small" => 3, "medium" => 5, "large" => 12}` into `[["small", 3], ["medium", 5], ["large", 12]]`?

.to_a
(  .to_h returns the array back to hash)

13.   What method can randomly select 1 or more elements from an array?

.sample

14. What Array method can turn `[[1,1], [2,2], [3,3,3]]` into `[1,1,2,2,3,3,3]`?

.flatten

15. Which method could you use to git rid of all whitespace in `"   bat  m   a   n   "`?

.delete(' ') ((easier to do ))

.gsub(/ /, "")

16. What method can you call to get rid of all duplicate elements in `["Luke", "Yoda", "Yoda", "Boba", "Luke"]` so that it returns `["Luke", "Yoda", "Boba"]`?

.uniq

17. What method would let you add `"Posh"` in the beginning of our array `["Ginger", "Sporty", "Scary", "Baby"]` so that it becomes `["Posh", "Ginger", "Sporty", "Scary", "Baby"]`?

.unshift
