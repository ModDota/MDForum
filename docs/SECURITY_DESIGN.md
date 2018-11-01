The core idea around the security design is to build for multiple authorization
levels. The core reason, surprisingly, is for easy caching. One of the ways that
many existing forums have some users invalidate a lot of caches is that they
serve up special content for moderators at the same URLs that normal users use.
This means more cache misses, intrinsically.

To avoid this, and to improve security, functionality should be locked at
multiple security levels, so that normal moderator browsing can have some
additional features, but generally ones that can be added through loading some
additional resources, not modifying the existing page.
