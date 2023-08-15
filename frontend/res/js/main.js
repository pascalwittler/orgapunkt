import { Routing } from './helpers/routing.js';
import { Rendering } from './helpers/rendering.js';
import { Api } from './helpers/api.js';

const routing = new Routing();
const rendering = new Rendering(routing.module, routing.action);
