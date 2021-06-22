import { StartupModel } from '../model/startup_model';
import { StartupDTO } from '../dto/startup_dto';

export class StartupMapper {
    converterDTOParaModel(dto: StartupDTO): StartupModel{
        return {
            id: dto.id ? dto.id : 0,
            nome: dto.nome ? dto.nome.split(' ')[0] : '',
            cnpj: dto.cnpj ? dto.cnpj : '',
            telefone: dto.telefone
        };
    }
    converterModelParaDTO(model: StartupModel): StartupDTO{
        return {
            id: model.id,
            nome: model.nome,
            cnpj: model.cnpj,
            telefone: model.telefone
        };
    }
}   