import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OgtagController from '../controllers/OgtagController';

const route = Router();
const ogtagController = new OgtagController();

route.post(
  '/:token',
  celebrate({
    [Segments.PARAMS]: {
      token: Joi.string().allow('', null),
    },
    [Segments.BODY]: {
      url: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required(),
      title: Joi.string().required(),
    },
  }),
  ogtagController.create,
);

route.get(
  '/:hash',
  celebrate({
    [Segments.PARAMS]: {
      hash: Joi.string().required(),
    },
  }),
  ogtagController.index
);

export default route;
