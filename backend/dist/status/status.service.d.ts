import { OnModuleInit } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateStatusDto } from "./dto/create-status.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { Status } from "./entities/status.entity";
export declare class StatusService implements OnModuleInit {
    private repo;
    constructor(repo: Repository<Status>);
    onModuleInit(): Promise<void>;
    create(dto: CreateStatusDto): Promise<Status>;
    findAll(): Promise<Status[]>;
    findOne(id: number): Promise<Status | null>;
    update(id: number, dto: UpdateStatusDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
