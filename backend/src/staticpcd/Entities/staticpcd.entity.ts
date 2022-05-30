import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('staticpcd')
export class Staticpcd {
  @PrimaryColumn({ type: 'int' })
  scheduleno: Number;

  @Column({ type: 'date' })
  pcd: Date;

  @CreateDateColumn()
  created: Date;
}
