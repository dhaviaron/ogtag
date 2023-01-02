import { inject, injectable } from 'tsyringe';
import IOgtagRepository from '../repositories/IOgtagRepository';
import IOgtagDTO from '../dtos/IOgtagDTO';

@injectable()
class GenerateOgtagService {
  constructor(
    @inject('OgtagRepository')
    private ogtagRepository: IOgtagRepository,
  ) {}

  public async execute({
    description,
    url,
    image,
    title,
    ogtag_hash,
  }: IOgtagDTO): Promise<string> {
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
