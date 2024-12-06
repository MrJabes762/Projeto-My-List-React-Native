const formatDateToBr = (data) => {
    const parsedDate = new Date(data);

    const dia = String(parsedDate.getDate()).padStart(2, '0');
    const mes = String(parsedDate.getMonth() + 1).padStart(2, '0'); // getMonth() é 0-based
    const ano = parsedDate.getFullYear();

    const horas = String(parsedDate.getHours()).padStart(2, '0');
    const minutos = String(parsedDate.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
};

export {
    formatDateToBr
}