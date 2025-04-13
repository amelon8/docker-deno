# docker-deno

- Build the Docker image.

```
docker-compose build
```

- Bring up the Docker container and check to see if it's running.

```
docker-compose up -d
docker-compose ps
```

- Enter the container shell.

```
docker-compose exec deno sh
```

- Check Deno version.

```
# which deno
/bin/deno

# deno --version
deno 2.2.9 (stable, release, aarch64-unknown-linux-gnu)
v8 13.5.212.10-rusty
typescript 5.7.3
```

- Run Yoga GraphQL server
  - http://localhost:8009/
  - http://localhost:8009/graphql?query={hello}

```
# cd /usr/src/app/yoga-server

# deno task start
Task start deno run --allow-net --allow-env main.ts
Listening on http://0.0.0.0:8009//graphql
```

- To stop the container.

```
docker-compose down
```
