---
title: 'Optimizing docker using multistage docker build'
description: 'Optimizing docker container size using multistage docker build'
slug: 'optimize-docker-using-multistage-docker-build'
published: '2023-06-11'
category: 'Docker'
image: '/logo.png'
---

# Optimizing docker container size using multistage docker build
---

## Table of Contents

## Disclaimer
> This is based on my knowledge, any suggestion are welcome :D 


> Also this is my first writing in english so please bear with the grammar :")

## What is docker
> **"It works on my machine"** - *Software Engineer*

Docker is a platform that let you run applications in a container to ensure that the application can run anywhere without need to setting it all over again[^1]

Docker is really handy for deployment stuff, i usually use docker for deploying services for ctf challenge or even some backend things that runs on the cloud.

I will show you the example for deploying golang app using docker.

### Golang Docker
Here is a dockerfile that i usually used to deploy golang app

```dockerfile:standard_dockerfile
FROM golang:alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . .

RUN go build -o main

EXPOSE 3001

CMD ["./main"]
```

When we build our container, docker will execute the statement 1 by 1 from the top to the bottom. The **FROM** instruction is required for docker to be able to run. 

If you feel overwhelmed, it's okay and completly normal I will explain it line by line.

Please refer to the [^2] for much clearer explanation

#### FROM
```dockerfile:standard_dockerfile
FROM golang:alpine
```

This line are starting point of dockerfile, we usually use the **FROM** syntax to pull the image that we want to use. All the image are available in the dockerhub[^3].

Dockerhub also provide different kind of tags such as **alpine**, **bullsye**, or **latest**[^4].

I will always try to use the **alpine** tag because it has very small size, really handy for quick development. But alpine tag also have it's own drawback, the smaller size means more limited package or service that it has. **alpine** tag usually doesnt have **bash** shell and always use the **sh**. It little bit unconvinient but nice tradeoff.

#### WORKDIR
```dockerfile:standard_dockerfile
WORKDIR /app
```
Workdir means working directory, it basically move the **CWD** to desired location

before the **WORKDIR** syntax if we typed pwd it will be output **/**, but after the workdir syntax, our current directory will move to the **app**.

This is not required in dockerfile but i usually always set it to the **app**

#### COPY
```dockerfile:standard_dockerfile
COPY go.mod ./
COPY go.sum ./
```

Copy syntax means it will copy the files selected from **OUR COMPUTER** to the container. so that two lines means we will copy **go.mod** to the **/app** directory.

```dockerfile:standard_dockerfile
COPY . .
```

It emans we all copy **all** of the files in current directory from **OUR MACHINE** to the container

#### RUN
```dockerfile:standard_dockerfile
RUN go mod download
```

RUN means it will run the given command in the terminal, so when docker building the container and reach the RUN instruction. it will run that command in shell. That statement basically means it will download all the dependencies that app has.

```dockerfile:standard_dockerfile
RUN go build -o main
```

As for this statement, it will create the binary for our application named main.

#### EXPOSE
```dockerfile:standard_dockerfile
EXPOSE 3001
```

EXPOSE in a nut shell, will make our container listen that port. so that syntax basically means container will listen at port 3001 so that we can access the container at 3001

Using expose doesn't mean we can directly access the docker at 3001, we must map the port using the **-p** flags. Please refer to [^2]. 

#### CMD
```dockerfile:standard_dockerfile
CMD ["./main"]
```

CMD is the default executing container, it means when we run the container using **docker run** it will execute this statement, so when the container are run, it will execute the built **main** binary.

Ok, enough for the basic dockerfile let's move the advance stuff.

### Multistage
So i mentioned before that **FROM** statement are required in order to run the dockerfile, but can we put more than one **FROM** statement in one dockerfile? the answer is yes. [^5]

Take look at this dockerfile, this docker file use two images at the same times. The first one is **golang:alpine** and the second one is **debian:buster-slim**. So it will create two stage or phase of building the container. 

```dockerfile:advance_dockerfile
FROM golang:alpine as builder

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . .

RUN go build -o main

FROM debian:buster-slim

RUN set -x && apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3001

CMD ["./main"]
```

#### FROM
```dockerfile:advance_dockerfile
FROM golang:alpine as builder
```

In multistage build we have option to name the stage or phase using **as**. This is completly optional but will make our life easier for later. By default docker will use 0 index stage, so 0 will refer to the **golang** stage and 1 will refer to **debian**.

#### COPY
```dockerfile:advance_dockerfile
COPY --from=builder /app .
```

This syntax is the same from before but it has option **--from=builder**. This statement means, we will copy all of the files in **/app** directory from builder phase to current phase.

If you don't use **as** instruction before, we can still refer it by using 0 so our syntax will be
```dockerfile:advance_dockerfile
COPY --from=0 /app .
``` 

### Advantages
And that's basically it, the rest are the same as default. So why bother to use multistage build if we can achieve the same thing using default ones?

If we looks carefully, after we build the golang binary, we didin't need the golang compiler anymore so it basically useless, so it would be better if we copy the compiled binary and move it to smaller images to create smaller container size and reduces attack surfaces of the application. 

![Docker comparison](/docker.jpg)

As we can see the normal docker build have over than 500mb image size whereas the multistage one only has 90mb. Smaller container means faster CI/CD and deploy.

So that's all from me, thank you for reading till the end! I hope you can learn something after reading this article.

[^1]: `1.` [Docker website](https://www.docker.com/)
[^2]: `2.` [Docker instruction explained](https://docs.docker.com/engine/reference/builder) 
[^3]: `3.` [Dockerhub](https://hub.docker.com/)    
[^4]: `4.` [Golang dockerhub](https://hub.docker.com/_/golang/tags)
[^5]: `5.` [Docker multistage](https://docs.docker.com/build/building/multi-stage/)