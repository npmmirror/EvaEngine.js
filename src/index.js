import * as swagger from './swagger';
import * as exceptions from './exceptions';
import * as services from './services';
import * as middlewares from './middlewares';
import * as ServiceProviders from './services/providers';
import * as MiddlewareProviders from './middlewares/providers';
import * as utils from './utils';
import Command from './command';
import Entities from './entities';
import EvaEngine, * as engine from './engine';

const providers = {
  services: ServiceProviders,
  middlewares: MiddlewareProviders
};

const wrapper = utils.wrapper;

const {
        DI,
        express
      } = engine;

/**
 * @typedef {Object} engineCore
 */
const engineCore = {
  EvaEngine,
  Command,
  DI,
  Entities,
  engine,
  express,
  exceptions,
  middlewares,
  swagger,
  services,
  providers,
  wrapper,
  utils
};

exports = module.exports = engineCore;
