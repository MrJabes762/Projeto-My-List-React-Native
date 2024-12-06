export const formatDateToBr = (dateString: string): string => {
    try {
        const date = new Date(dateString);
        const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

        const formattedDate = date.toLocaleDateString('pt-BR', optionsDate);
        const formattedTime = date.toLocaleTimeString('pt-BR', optionsTime);

        return `${formattedDate} às ${formattedTime}`;
    } catch (error) {
        console.error('Erro ao formatar a data:', error);
        return 'Data inválida';
    }
};
