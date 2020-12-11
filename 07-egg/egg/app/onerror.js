'use strict';

async function onerror(ctx, next) {
  try {
    await next();
  } catch (error) {
    ctx.app.emit('error', error);
    ctx.body = 'server error';
    ctx.status = error.status || 500;
  }
}

module.exports = onerror;
