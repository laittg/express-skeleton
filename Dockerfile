FROM node:10.16.0-stretch

# Build arguments
ARG environment=development
ARG debug=express-skeleton
ARG appdir=/var/www/express
ARG port=3000
ARG aws_region=us-west-2

# Install global npm packages
RUN npm i -g pm2

# Set the work directory
RUN mkdir -p ${appdir}
WORKDIR ${appdir}

# Add our package.json and install *before* adding our application files
# Since Docker will intelligently cache files between incremental builds,
# the further down the pipeline we can move buildsteps, the better.
ADD package.json ./
RUN npm install --no-package-lock

# Add application files
ADD . ${appdir}

# Set environment
RUN echo "NODE_ENV=${environment}" > .env
RUN echo "DEBUG=${debug}" >> .env
RUN echo "PORT=${port}" >> .env
RUN echo "AWS_DEFAULT_REGION=${aws_region}" >> .env

# Build log
RUN echo "Docker build completed on" $(date) >> ./public/.build

# Expose the port
EXPOSE ${port}

CMD ["pm2-runtime", "pm2.config.js"]