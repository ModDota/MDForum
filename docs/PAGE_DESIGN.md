Setting up a forum for distributed caching is somewhat complex. It's tempting to
reach for a Merkle tree or the like, and have each thread have that internal
structure; this would allow for caching of the entries easily, since each of the
threads could have effectively a full commit history of the discussion, with
edits and new comments being handled smoothly. However, this is still a bit
heavy-weight; since we don't necessarily need the full functionality of a merkle
tree, and the hashing of history could cause issues with both moderation and how
quickly a client can load all of the content.

What's probably a good take-away, though, is that we can keep mostly static
content for each post, and transmit history linearly, but allow for some later
clean-up. This allows us to simplify some situations, like a highly edited post,
and allows for removal of information where required (e.g. dmca takedowns).

