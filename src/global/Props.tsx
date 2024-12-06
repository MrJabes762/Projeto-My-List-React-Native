interface AuthContextType {
    taskList:Array<PropCard>,
    abrir:void,
    handleDelete: Function,
    handleEditar: Function
}

type PropCard = {
    item:number,
    titulo:string,
    descricao:string,
    prioridade: Prioridade,
    tempoLimite: string,
}

type Prioridade =  'Urgente' | 'Opcional';