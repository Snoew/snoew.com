FROM nginx
COPY . /usr/share/nginx/html


# docker build -t snoew-nginx .
# docker run --name snoew.com -d -p 80:80 snoew-nginx