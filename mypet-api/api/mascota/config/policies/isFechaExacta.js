module.exports = async (ctx, next) => {
  let fecha;
  if (ctx.request.body.fecha_exacta) {
    fecha = new Date(ctx.request.body.fecha_nacimiento);
    fecha.setDate(fecha.getDate() + 2);
  } else {
    fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() - ctx.request.body.edad_años);
    fecha.setMonth(fecha.getMonth() - ctx.request.body.edad_meses);
  }
  ctx.request.body.fecha_nacimiento = fecha;
  return await next(ctx);
};
