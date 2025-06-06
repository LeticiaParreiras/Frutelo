import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { Pagamento } from './entities/pagamento.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PagamentoService {
  constructor(
   @InjectRepository(Pagamento)
    private pagamentoRepository: Repository<Pagamento>,
  ){}
  
   async updateStatus(idPagamento: number, updatepagamentoDto: UpdatePagamentoDto, userId: number) {
      const pagamento = await this.pagamentoRepository.findOne({
        where: { id: idPagamento, compra:{cliente: { id: userId }} },
        relations: ['compra'],
      });
      if (!pagamento) throw new NotFoundException('pagamento não encontrada');
  
    if (pagamento.status.id !== 1) {
      throw new ForbiddenException('A pagamento já foi processada ou cancelada.');
    }
  
    switch (updatepagamentoDto.statusId) {
      case 2: // Concluir
        pagamento.status.id = 2;
        break;
  
      case 3: // Cancelar
        pagamento.status.id = 3;
        pagamento.compra.status.id = 3;
        await this.pagamentoRepository.save(pagamento.compra);
        break;
  
      default:
        throw new NotFoundException('Status indisponível');
    }
  
    return this.pagamentoRepository.save(pagamento);
  }
}
