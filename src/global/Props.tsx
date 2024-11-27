interface AuthContextType {
    taskList:Array<PropCard>,
    abrir:void,
    editar: Function,
    deletar: Function
}

type PropCard = {
    item:number,
    titulo:string,
    descricao:string,
    prioridade: Prioridade,
    tempoLimite: string,
}

type Prioridade =  'Urgente' | 'Opcional';