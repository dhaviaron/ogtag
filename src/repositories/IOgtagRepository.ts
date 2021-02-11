import IOgtagDTO from '../dtos/IOgtagDTO';
import Ogtag from '../schemas/Ogtag';

// interface
export default interface IOgtagRepository {
  create(data: IOgtagDTO): Promise<Ogtag>;
  get(hash: string): Promise<Ogtag | undefined>;
}
