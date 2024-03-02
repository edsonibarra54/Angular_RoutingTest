export interface Show {
    id: number,
    title: string,
    year: number,
    episodes: number,
    image: string,
    isSelected?: boolean //El signo ? se usa para indicar que un atributo puede estar o no estar
}