import { inject, injectable } from 'tsyringe';
import Hashids from 'hashids/cjs';

import IOgtagRepository from '../repositories/IOgtagRepository';
import IOgtagDTO from '../dtos/IOgtagDTO';
import IHashProvider from '../container/providers/HashProvider/models/IHashProvider';

@injectable()
class GenerateOgtagService {
  constructor(
    @inject('OgtagRepository')
    private ogtagRepository: IOgtagRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    description,
    url,
    image,
    title,
  }: IOgtagDTO): Promise<string> {
    // Gerar link de retorno
    const hashedPassword = await this.hashProvider.generateHash(
      `${description},${title},${image},${url}`,
    );

    const hashids = new Hashids(hashedPassword);
    const ogtag_hash = hashids.encode(1, 2, 3);

    await this.ogtagRepository.create({
      description,
      title,
      image,
      url,
      ogtag_hash,
    });

    return ogtag_hash;
  }
}

export default GenerateOgtagService;
