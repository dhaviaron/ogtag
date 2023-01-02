import { container } from 'tsyringe';

import OgtagRepository from '../repositories/OgtagRepository';
import IOgtagRepository from '../repositories/IOgtagRepository';

container.registerSingleton<IOgtagRepository>(
  'OgtagRepository',
  OgtagRepository,
);
