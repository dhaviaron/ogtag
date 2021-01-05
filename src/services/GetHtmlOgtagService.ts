import Ogtag from 'schemas/Ogtag';
import { inject, injectable } from 'tsyringe';

import IOgtagRepository from '../repositories/IOgtagRepository';

@injectable()
class GetHtmlOgtagService {
  constructor(
    @inject('OgtagRepository')
    private ogtagRepository: IOgtagRepository,
  ) {}

  public async execute(hash: string): Promise<Ogtag | undefined> {
    const ogtag = this.ogtagRepository.get(hash);

    return ogtag;
  }
}

export default GetHtmlOgtagService;
