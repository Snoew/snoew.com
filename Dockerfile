FROM nginx
COPY . /usr/share/nginx/html

CMD [ "npm", "run", "build"]
CMD [ "npm", "install", "-g", "serve"]
CMD [ "npm", "-s", "build", "-l", "80"]
# docker build -t snoew-nginx .
# docker run --name snoew.com -d -p 80:80 snoew-nginx
