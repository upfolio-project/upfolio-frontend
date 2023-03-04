FROM node:16-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN node  -v

WORKDIR /app/upfolio-frontend
COPY . .

RUN yarn install
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

CMD yarn build; yarn start
