# Simple storehouse client on Angular 6

## Installation

1. Create files from DISTs:

    e.g.:

    `docker/bin/bash/.env.sh.dist.sh`
    ->
    `docker/bin/bash/.env.sh`

    and other:

    `docker/.env.dist.env`

    `project/proxy.conf.json.dist.json`

    `.env.dist.env`

2. Build Docker containers (only for Linux host recipe, for Windows not ready):

    check / change configuration if you know what you do:

    `docker/.env`

    `docker/bin/bash/.env.sh`

    `project/proxy.conf.json`

    If API is not on the same machine as Client
    then you will need set API IP by DNS or manually in

    `docker/bin/bash/.env.sh`

    API can be inside container or immediatelly on host then bash scripts
    autosetup host IP as API IP

    Use terminal:

    got to dir `docker/`

    exec:

    `bash bin/bash/build.sh`


3. Start containers (only for Linux host recipe)

    Use terminal:

    got to dir `docker/`

    `bash bin/bash/start.sh`

    Start is at default dev mode, prod not ready.

    Do not close terminal, because it close dev server

    To access to client if not changed port:

    `http://localhost:4200`

    The end.