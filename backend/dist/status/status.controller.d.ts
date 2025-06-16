import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    create(createStatusDto: CreateStatusDto): Promise<import("./entities/status.entity").Status>;
    findAll(): Promise<import("./entities/status.entity").Status[]>;
    findOne(id: string): Promise<import("./entities/status.entity").Status | null>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
