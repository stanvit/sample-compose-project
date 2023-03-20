FROM node:current-alpine
COPY index.js /app/index.js
RUN echo "svcuser:*:1034:1034:Service:/app:/bin/false" >> /etc/passwd
WORKDIR /app
USER 1034:1034
CMD ["node", "/app/index.js"]