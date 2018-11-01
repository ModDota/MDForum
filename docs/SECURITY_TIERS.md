In another note, I went over avoiding having everything visible by default to
any authenticated admin or moderator, to avoid caching issues. Deeper in this is
a desire to stick to the principle of least privilege pretty closely, and to
have an ease of use for normal authenticated work without having the security
hassle associated with the rigorous authentication needed for finer, less common
operations.

The basic gist of it is additional factors of security as you go up in access.
Basic moderation is availble after one factor, stronger moderation after a
second, site administration after a third, and arbitrary execution after a
fourth. This is a tad overkill, probably, but it's worth it to do it right, and
I think it'll be a learning experience.

