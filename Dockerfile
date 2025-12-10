FROM node:20.17.0

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json /usr/src/app/
RUN npm install
RUN npm install -g expo-cli
RUN npm install -g serve


# add app
COPY . /usr/src/app

RUN npx expo export

EXPOSE 3000

# start app
CMD ["serve", "-s", "dist"]
