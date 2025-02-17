FROM node:latest as build
WORKDIR /app
COPY package*.json ./
# Install Angular CLI globally
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build --output-path todo-one/browser --base-href /

FROM nginx:latest
COPY --from=build /app/dist/todo-one/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
