import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wowtube";
  res.locals.routes = routes;
  next();
};
