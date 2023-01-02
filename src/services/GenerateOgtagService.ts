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
    ogtag_hash,
  }: IOgtagDTO): Promise<string> {
    // Gerar link de retorno

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
