# Imagen base
FROM node:22
# Definir directorio de trabajo
WORKDIR /app
# Copiar archivos necesarios
COPY package.json package-lock.json ./
# Instalar Node.js (pnpm requiere Node.js)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs
# Instalar dependencias
RUN npm install
# Copiar el resto del código
COPY . .
# Exponer el puerto
EXPOSE 3000
# Comando de inicio
CMD ["node", "main.js"]