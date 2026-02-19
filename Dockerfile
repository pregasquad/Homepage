# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist/public /usr/share/nginx/html

# Default Nginx configuration is usually sufficient for static files
# but we can add a custom one if needed for SPA routing.
# Since this is a video template, it likely loads everything on initial load.

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
