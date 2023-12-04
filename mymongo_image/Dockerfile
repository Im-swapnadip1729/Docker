#step1 -- install OS
FROM alpine

#step2 -- install a softwere
#RUN apk add binutils
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
# it is responsible for taking input from echo and insert that into a file eg. reprosetory

RUN apk update
RUN apk add mongodb=3.4.4-r0
RUN apk add binutils
#step2.5 -- configer that softwere
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017
RUN apk add isl 

#step3 -- set deafult commands
CMD [ "mongod" ]


