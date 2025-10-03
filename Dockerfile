# syntax=docker/dockerfile:1
FROM node:20.18.0-alpine

WORKDIR /app

# Install deps (pakai lockfile biar reproducible)
COPY --chown=node:node package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy source
COPY --chown=node:node src ./src

# Env & port sesuai server.js
ENV NODE_ENV=production
ENV PORT=8000
EXPOSE 8000

# Non-root user
USER node

# Start
CMD ["node", "src/server.js"]
