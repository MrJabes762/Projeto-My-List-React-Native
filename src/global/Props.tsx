export interface AuthContextType {
    taskList:Array<PropCard>,
    abrir:void,
    handleDelete: Function,
    handleEditar: Function,
    filtrar:(t:string) => void
}

export type PropCard = {
    item:number,
    titulo:string,
    descricao:string,
    prioridade: Prioridade,
    tempoLimite: string,
}

export type Prioridade =  'Urgente' | 'Opcional';