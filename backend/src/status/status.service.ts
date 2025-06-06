import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStatusDto } from "./dto/create-status.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { Status } from "./entities/status.entity";

@Injectable()
export class StatusService implements OnModuleInit {
  constructor(@InjectRepository(Status) private repo: Repository<Status>) {}
  async onModuleInit() {
      const existentes = await this.repo.find();
    if (existentes.length === 0) {
      const statusPadroes = ['pendente', 'concluido', 'cancelado'];

      for (const nome of statusPadroes) {
        const status = this.repo.create({ nome });
        await this.repo.save(status);
      }

      console.log('Status padrão inseridos com sucesso.');
    }
  }
  
  
  create(dto: CreateStatusDto) {
    const status = this.repo.create(dto);
    return this.repo.save(status);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: number, dto: UpdateStatusDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
