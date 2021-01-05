import { getMongoRepository, MongoRepository } from 'typeorm';

import Ogtag from '../schemas/Ogtag';
import IOgtagDTO from '../dtos/IOgtagDTO';
import IOgtagRepository from './IOgtagRepository';

class OgtagRepository implements IOgtagRepository {
  private ormRepository: MongoRepository<Ogtag>;

  constructor() {
    this.ormRepository = getMongoRepository(Ogtag, process.env.MONGO_NAME);
  }

  public async create({
    title,
    description,
    image,
    url,
    ogtag_hash,
  }: IOgtagDTO): Promise<Ogtag> {
    const ogtag = this.ormRepository.create({
      title,
      description,
      image,
      url,
      ogtag_hash,
    });

    await this.ormRepository.save(ogtag);

    return ogtag;
  }

  public async get(hash: string): Promise<Ogtag | undefined> {
    const ogtag = this.ormRepository.findOne({
      where: {
        ogtag_hash: hash,
      },
    });

    return ogtag;
  }
}

export default OgtagRepository;
