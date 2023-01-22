FROM node:18-alpine

RUN apk add ffmpeg

COPY ./scripts /opt/source-code

CMD ["node", "/opt/source-code/ffmpeg.mjs"]