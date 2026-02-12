FROM public.ecr.aws/lambda/nodejs:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "index.handler" ]
