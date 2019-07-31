## Flow
1. bin/www
2. core/config
3. preload config, then callback config.onload(start)
4. load app.js
5. load core/routes
6. load apis
7. load db
8. load schemas and models
9. start server

## New Schema Process

1. Create

- ./schemas/schema-name.def.js
- ./schemas/schema-name.js

2. Config ./core/schemas.js

3. Config ./core/db.js