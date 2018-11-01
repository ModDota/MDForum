The key thing to getting replication right is having the ability to negotiate
consistency. Distributed systems are, as has been noted, hard to make, and even
harder to make correct. For a website, this is generally handled by having a
backing database that has replication functionality, and then having multiple
flat copies of a site accessing it; normally, with a well-defined schema,
there's not a problem if updating the site takes a minute longer on a few nodes,
because the backing data structure (the DB) can handle (or throw away) the odd
requests.

If you're rolling your own data structure, though, it's more complicated. In
this case you're probably best served by not doing replication, but sharding.
It's far easier to spread work out on some known identifiers than working out
how to synchronize various tables, but you don't get the performance.

If you can manage it, a forum is actually a great place to use a hybridized
system. Live data can be sharded, and old data can be replicated - since it
doesn't change much, it doesn't matter if it lives in several places.

