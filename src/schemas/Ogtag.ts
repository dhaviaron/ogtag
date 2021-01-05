import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('ogtags')
class Ogtag {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  url: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  ogtag_hash: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ogtag;
